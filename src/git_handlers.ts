import { execSync } from'child_process';
import { logWarn } from './logger';

export function isInGitRepository() {
  try {
    execSync('git rev-parse --is-inside-work-tree', { stdio: 'ignore' });
    return true;
  } catch (e) {
    return false;
  }
}

export function tryGitInit() {
  try {
    execSync('git --version', { stdio: 'ignore' });
    if (isInGitRepository()) {
      return false;
    }
    execSync('git init', { stdio: 'ignore' });
    return true;
  } catch (e) {
    logWarn('Git仓库初始化失败(Git repo not initialized)!');
    logWarn(e);
    return false;
  }
}