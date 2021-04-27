import fs from 'fs';
import path from 'path';
import { logWarn } from './logger';

export default function (moduleId: string, silent?: boolean) {
  let result = null;
  try {
    const CWD = process.cwd();
    const cwdPaths = {
      paths: [ CWD, path.resolve(CWD, 'node_modules') ]
    };
    const realPath = require.resolve(moduleId, cwdPaths);
    if (!fs.existsSync(realPath)) {
      if (!silent) {
        logWarn(`The "${realPath}" is invalid path`);
        logWarn(`"${realPath}" 是一个无效的路径！`);
      }
    } else {
      result = require(realPath);
    }
  } catch (err) { !silent && logWarn(err); }

  return result;
}