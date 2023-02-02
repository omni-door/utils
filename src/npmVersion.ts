import http from 'http';
import https from 'https';
import semver from 'semver';
import { exec, execSync } from'child_process';
import { logInfo } from './logger';

export type Options = {
  protocol?: string;
  hostname?: string;
  registry?: string;
};

export async function getNpmVersion (pkgName: string, options?: Options) {
  const {
    protocol = 'https',
    hostname = 'registry.npmjs.org',
    registry = 'https://registry.npmjs.org',
  } = options || {};
  const url = registry || `${protocol}://${hostname}`;
  const checkUrl = `${url}/-/package/${pkgName}/dist-tags`;

  const npmViewCheck = () => {
    try {
      return execSync(`npm view ${pkgName} version --registry=${url}`).toString().trim();
    } catch (e) {
      return null;
    }
  };

  const request = protocol === 'https' ? https : http;
  const lastVersion = await new Promise<null | string>((resolve, reject) => {
    request
      .get(
        checkUrl,
        res => {
          if (res.statusCode === 200) {
            let body = '';
            res.on('data', data => (body += data));
            res.on('end', () => {
              resolve(JSON.parse(body).latest);
            });
          } else {
            resolve(npmViewCheck());
          }
        }
      )
      .on('error', () => resolve(npmViewCheck()));
  });


  return lastVersion;
}

export async function getNpmVersions (pkgName: string, options?: Options) {
  const {
    protocol = 'https',
    hostname = 'registry.npmjs.org',
    registry = 'https://registry.npmjs.org',
  } = options || {};
  const url = registry || `${protocol}://${hostname}`;

  return new Promise<string[]>((resolve, reject) => {
    exec(`npm view ${pkgName} versions --registry=${url}`, function (err, stdout, stderr) {
      if (err || stderr) {
        reject(err || stderr);
        return;
      }
      resolve(stdout.replace(/(\s|\[|\]|')+/g, '').split(','));
    });
  });
}

async function npmVersionCheck (pkgName: string, v: string, options?: {
  protocol?: string;
  hostname?: string;
}) {
  try {
    const version = await getNpmVersion(pkgName, options);
    if (version && semver.lt(v, version)) {
      console.log('\n');
      logInfo(`A new version ${pkgName} (${version}) is available!`);
      logInfo(`最新版本的 ${pkgName} 为 ${version}！`);
      console.log('\n');
      return false;
    }
  } catch (e) {
    logInfo(e as string);
  }
  return true;
}

export default npmVersionCheck;