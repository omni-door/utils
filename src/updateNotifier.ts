import chalk from 'chalk';
import updateNotifier from 'update-notifier';
import { logInfo } from './logger';

export default function (pkg: {
  name: string;
  version: string;
  [props: string]: any;
}) {
  try {
    const notifier = updateNotifier({
      pkg,
      updateCheckInterval: 1000 * 60 * 60 * 24,
      shouldNotifyInNpmScript: true
    });
    
    const update = notifier.update;
  
    if (!update) {
      return;
    }
  
    const message = `Update available(更新提醒)! ${chalk.red(update.current)} → ${chalk.green(update.latest)}
    
    Run ${chalk.magenta(`{updateCommand}@latest`)} to update!
  
    Website(官网): ${chalk.cyan('https://www.omnidoor.org/')}
  
    Changelog(变更日志): https://github.com/omni-door/cli/blob/master/docs/CHANGELOG.md`;
  
    notifier.notify({ message });
  } catch (e) {
    logInfo(e as string);
  }
}