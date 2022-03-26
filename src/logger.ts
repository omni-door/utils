import chalk from 'chalk';
import { Signale } from 'signale';
import getLogPrefix, { getLogo, getBrand } from './logPrefix';
import { stateMap2Emoji } from './emoji';

const signale = new Signale({
  scope: getBrand()
});

export const interactive = () => new Signale({
  interactive: true,
  scope: getBrand()
});

export function logErr (err: string) {
  console.error(chalk.redBright(getLogPrefix(), err, stateMap2Emoji.fail, '\n'));
}

export function logWarn (warn: string) {
  console.warn(chalk.yellowBright(getLogPrefix(), warn, stateMap2Emoji.warn, '\n'));
}

export function logInfo (info: string) {
  console.info(chalk.white(getLogPrefix(), info, '\n'));
}

export function logDetail (detail: string) {
  console.log(chalk.gray(getLogPrefix(), detail, '\n'));
}

export function logEmph (info: string) {
  console.info(chalk.cyanBright(getLogPrefix(), info, stateMap2Emoji.hot, '\n'));
}

export function logSuc (msg: string) {
  console.info(chalk.greenBright(getLogPrefix(), chalk.bold(msg), stateMap2Emoji.succeed, '\n'));
}

export function logCongrat (msg: string) {
  console.info(chalk.magentaBright(getLogPrefix(), chalk.bold(msg), stateMap2Emoji.congratulation, '\n'));
}

export function logTime (msg: string, isEnd?: boolean) {
  const method = isEnd ? 'timeEnd' : 'time';
  const newSignale = signale.scope(getBrand());
  return newSignale[method](chalk.gray(`${getLogo()}  ${msg}`));
}

export function underline (str: string) {
  return chalk.bold.underline(str);
}

export function italic (str: string) {
  return chalk.bold.italic(str);
}