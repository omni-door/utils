import chalk from 'chalk';
import { Signale } from 'signale';
import getLogPrefix, { getLogo, getBrand } from './log_prefix';

const signale = new Signale({
  scope: getBrand()
});

export const interactive = () => new Signale({
  interactive: true,
  scope: getBrand()
});

export function logErr (err: string) {
  console.error(chalk.red(getLogPrefix(), err, '❌\n'));
}

export function logWarn (warn: string) {
  console.warn(chalk.yellow(getLogPrefix(), warn, '❗\n'));
}

export function logInfo (info: string) {
  console.info(chalk.white(getLogPrefix(), info, '\n'));
}

export function logDetail (info: string) {
  console.log(chalk.gray(getLogPrefix(), info, '\n'));
}

export function logEmph (info: string) {
  console.info(chalk.cyan(getLogPrefix(), info, '🚩\n'));
}

export function logSuc (msg: string) {
  console.info(chalk.green(getLogPrefix(), chalk.bold(msg), '✅\n'));
}

export function logTime (msg: string, isEnd?: boolean) {
  const method = isEnd ? 'timeEnd' : 'time';
  return signale[method](chalk.gray(`${getLogo()}  ${msg}`));
}

export function underline (str: string) {
  return chalk.bold.underline(str);
}

export function italic (str: string) {
  return chalk.bold.italic(str);
}