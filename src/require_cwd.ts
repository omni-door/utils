import fs from 'fs';
import path from 'path';
import { logWarn } from './logger';

export default function (moduleId: string, silent?: boolean) {
  let result = null;
  try {
    const cwd = process.cwd();
    const cwdPaths = {
      paths: [ cwd, path.resolve(cwd, 'node_modules') ]
    };
    const realPath = require.resolve(moduleId, cwdPaths);
    if (!fs.existsSync(realPath)) {
      !silent && logWarn(`${realPath} 是一个无效的路径！(The ${realPath} is invalid path)`);
    } else {
      result = require(realPath);
    }
  } catch (err) { !silent && logWarn(err); }

  return result;
}