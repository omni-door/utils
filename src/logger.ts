import chalk from 'chalk';
import { Signale } from 'signale';
import { getLogo, getBrand } from './log_prefix';

const basic = {
  badge: getLogo(),
  label: `[${getBrand()}]:`
};

const signale = new Signale({
  types: {
    success: {
      ...basic,
      color: 'green'
    },
    error: {
      ...basic,
      color: 'red'
    },
    warn: {
      ...basic,
      color: 'yellow'
    },
    info: {
      ...basic,
      color: 'white'
    },
    detail: {
      ...basic,
      color: 'gray'
    },
    emphasis: {
      ...basic,
      color: 'cyan'
    }
  }
});

signale.config({
  displayFilename: false,
  displayTimestamp: false,
  displayDate: false
});

export function logErr (err: string) {
  signale.error(chalk.red(err, '❌\n'));
}

export function logWarn (warn: string) {
  signale.warn(chalk.yellow(warn, '❗\n'));
}

export function logInfo (info: string) {
  signale.info(chalk.white(info, '\n'));
}

export function logDetail (info: string) {
  signale.detail(chalk.gray(info, '\n'));
}

export function logEmph (info: string) {
  signale.emphasis(chalk.cyan(info, '🚩\n'));
}

export function logSuc (msg: string) {
  return signale.success(chalk.green(chalk.bold(msg), '✅\n'));
}

export function logTime (msg: string, isEnd?: boolean) {
  const method = isEnd ? 'timeEnd' : 'time';
  return signale[method](chalk.gray(msg));
}

export function underline (str: string) {
  return chalk.bold.underline(str);
}

export function italic (str: string) {
  return chalk.bold.italic(str);
}