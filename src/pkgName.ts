import chalk from 'chalk';
import validateProjectName from 'validate-npm-package-name';
import { logWarn } from './logger';

function pkgName (name: string, noExit?: boolean) {
  const validationResult = validateProjectName(name);
  if (!validationResult.validForNewPackages) {
    const pkjName = chalk.green(`"${name}"`);
    logWarn(`${pkjName} is an invalid project name per npm naming rules.`);
    [
      ...(validationResult.errors || []),
      ...(validationResult.warnings || []),
    ].forEach((e, k) => logWarn(`${k + 1}. ${e}`));
    !noExit && process.exit(0);
    return false;
  }

  return true;
}

export default pkgName;
