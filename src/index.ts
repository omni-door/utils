import exec from './exec';
import logPrefix, {
  setLogo,
  setBrand,
  getLogo,
  getBrand
} from './log_prefix';
import {
  logDetail,
  logEmph,
  logErr,
  logInfo,
  logSuc,
  logWarn,
  logTime,
  underline,
  italic
} from './logger';
import {
  getDependency,
  arr2str,
  intersection
} from './dependencies';
import name_check from './name_check';
import node_version from './node_version';
import npm_version from './npm_version';
import output_file from './output_file';
import spinner from './spinner';
import { tpl_engine_init, tpl_engine_new, _typeof } from './tpl_engine';
import require_cwd from './require_cwd';
import { isInGitRepository, tryGitInit } from './git_handlers';

export { default as exec } from './exec';
export { default as logPrefix,
  setLogo,
  setBrand,
  getLogo,
  getBrand
} from './log_prefix';
export {
  logDetail,
  logEmph,
  logErr,
  logInfo,
  logSuc,
  logWarn,
  logTime,
  underline,
  italic
} from './logger';
export {
  getDependency,
  arr2str,
  intersection
} from './dependencies';
export { default as name_check } from './name_check';
export { default as node_version } from './node_version';
export { default as npm_version } from './npm_version';
export { default as output_file } from './output_file';
export { default as spinner } from './spinner';
export { tpl_engine_init, tpl_engine_new, _typeof } from './tpl_engine';
export { default as require_cwd } from './require_cwd';
export { isInGitRepository, tryGitInit } from './git_handlers';

export type { BUILD, PKJTOOL, PLUGINSTAGE, PROJECT_TYPE, STRATEGY, STYLE, LOGLEVEL, MARKDOWN, SPASERVER, COMPONENTSERVER, SSRSERVER, TESTFRAME, HASH } from './global.d';

export default {
  exec,
  logPrefix,
  setLogo,
  setBrand,
  getLogo,
  getBrand,
  logDetail,
  logEmph,
  logErr,
  logInfo,
  logSuc,
  logWarn,
  logTime,
  underline,
  italic,
  name_check,
  node_version,
  npm_version,
  output_file,
  getDependency,
  arr2str,
  intersection,
  spinner,
  tpl_engine_init,
  tpl_engine_new,
  _typeof,
  require_cwd,
  isInGitRepository,
  tryGitInit
};