import chalk from 'chalk';
import updateNotifier from 'update-notifier';

export default function test (pkg: {
  name: string;
  version: string;
  [props: string]: any;
}) {
  const notifier = updateNotifier({
    pkg,
    updateCheckInterval: 1000 * 60 * 60 * 24,
    shouldNotifyInNpmScript: true
  });
  
  const update = notifier.update;

  if (!update) {
    return;
  }

  const message = `更新提醒(Update available)! ${chalk.red(update.current)} → ${chalk.green(update.latest)}
  
  Run ${chalk.magenta(`{updateCommand}@latest`)} to update!

  官网(Website): ${chalk.cyan('https://www.omnidoor.org/')}

  变更日志(Changelog): https://github.com/omni-door/cli/blob/master/docs/CHANGELOG.md`;

  notifier.notify({ message });
}