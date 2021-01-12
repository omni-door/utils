import https from 'https';
import semver from 'semver';
import { execSync } from'child_process';
import { logInfo } from './logger';

async function npm_version (pkgName: string) {
  const checkUrl = `https://registry.npmjs.org/-/package/${pkgName}/dist-tags`;

  const npmViewCheck = () => {
    try {
      return execSync(`npm view ${pkgName} version`).toString().trim();
    } catch (e) {
      return null;
    }
  };

  const lastVersion = await new Promise<null | string>((resolve, reject) => {
    https
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

async function version_check (pkgName: string, v: string) {
  const version = await npm_version(pkgName);
  if (version && semver.lt(v, version)) {
    logInfo(`为了更好的使用体验，请将 ${pkgName} 版本升级至 ${version} (Please upgrade the ${pkgName} to ${version} for better use experience)`);
    return false;
  }

  return true;
}

export default version_check;