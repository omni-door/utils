import path from 'path';

export default function (moduleId: string) {
  const cwd = process.cwd();
  const cwdPaths = {
    paths: [ cwd, path.resolve(cwd, 'node_modules') ]
  };
  const realPath = require.resolve(moduleId, cwdPaths);
  return require(realPath);
}