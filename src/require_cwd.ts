import fs from 'fs';
import path from 'path';
import { logWarn } from './logger';

export default function (moduleId: string) {
  let result = null;
  try {
    const cwd = process.cwd();
    const cwdPaths = {
      paths: [ cwd, path.resolve(cwd, 'node_modules') ]
    };
    const realPath = require.resolve(moduleId, cwdPaths);
    if (!fs.existsSync(realPath)) {
      logWarn(`${realPath} 是一个无效的路径！(The ${realPath} is invalid path)`);
    } else {
      result = require(realPath);
    }
  } catch (err) { logWarn(err); }

  return result;
}