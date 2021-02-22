import updateNotifier from 'update-notifier';

export default function (pkg: {
  name: string;
  version: string;
  [props: string]: any;
}) {
  const notifier = updateNotifier({
    pkg,
    updateCheckInterval: 1000 * 60 * 60 * 24 * 3,
    shouldNotifyInNpmScript: true,
  });
  
  notifier.notify();
}