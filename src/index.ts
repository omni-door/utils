import exec from './exec';
import logPrefix, {
  setLogo,
  setBrand,
  getLogo,
  getBrand
} from './logPrefix';
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
import pkgNameCheck from './pkgName';
import nodeVersionCheck from './nodeVersion';
import npmVersionCheck, { npm_version as getNpmVersion } from './npmVersion';
import outputFile from './outputFile';
import spinner from './spinner';
import { tpl_engine_init as tplEngineInit, tpl_engine_new as tplEngineNew, _typeof } from './tplEngine';
import requireCwd from './requireCwd';
import { isInGitRepository, tryGitInit } from './gitHandlers';
import updateNotifier from './updateNotifier';

export { default as exec } from './exec';
export { default as logPrefix,
  setLogo,
  setBrand,
  getLogo,
  getBrand
} from './logPrefix';
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
export { default as pkgNameCheck } from './pkgName';
export { default as nodeVersionCheck } from './nodeVersion';
export { default as npmVersionCheck, npm_version as getNpmVersion } from './npmVersion';
export { default as outputFile } from './outputFile';
export { default as spinner } from './spinner';
export { tpl_engine_init as tplEngineInit, tpl_engine_new as tplEngineNew, _typeof } from './tplEngine';
export { default as requireCwd } from './requireCwd';
export { isInGitRepository, tryGitInit } from './gitHandlers';

export type { BUILD, PKJTOOL, PLUGINSTAGE, PROJECT_TYPE, STRATEGY, STYLE, LAYOUT, LOGLEVEL, MARKDOWN, SPASERVER, COMPONENTSERVER, SSRSERVER, TESTFRAME, HASH } from './global.d';

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
  pkgNameCheck,
  nodeVersionCheck,
  npmVersionCheck,
  getNpmVersion,
  outputFile,
  getDependency,
  arr2str,
  intersection,
  spinner,
  tplEngineInit,
  tplEngineNew,
  _typeof,
  requireCwd,
  isInGitRepository,
  tryGitInit,
  updateNotifier
};