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
  logCongrat,
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
import npmVersionCheck, { getNpmVersion } from './npmVersion';
import outputFile from './outputFile';
import spinner from './spinner';
import { tplEngineInit, tplEngineNew, _typeof } from './tplEngine';
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
  logCongrat,
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
export { default as npmVersionCheck, getNpmVersion, getNpmVersions } from './npmVersion';
export { default as outputFile } from './outputFile';
export { default as spinner } from './spinner';
export { tplEngineInit, tplEngineNew, _typeof } from './tplEngine';
export { default as requireCwd } from './requireCwd';
export { isInGitRepository, tryGitInit } from './gitHandlers';
export { default as updateNotifier } from './updateNotifier';

export type { BUILD, PKJ_TOOL, PLUGIN_STAGE, PROJECT_TYPE, STRATEGY, STYLE, LAYOUT, LOGLEVEL, MARKDOWN, SPA_SERVER, COMPONENT_SERVER, SSR_SERVER, TEST_FRAME, HASH } from './global.d';

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
  logCongrat,
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