# 🐸 @omni-door/utils
The Utils for omni-door's projects.

[![NPM downloads](http://img.shields.io/npm/dm/%40omni-door%2Futils.svg?style=flat-square)](https://www.npmjs.com/package/@omni-door/utils)
[![npm version](https://badge.fury.io/js/%40omni-door%2Futils.svg)](https://badge.fury.io/js/%40omni-door%2Futils)
[![Build Status](https://travis-ci.com/omni-door/utils.svg?branch=master)](https://travis-ci.com/omni-door/utils)
[![codecov](https://codecov.io/gh/omni-door/utils/branch/master/graph/badge.svg)](https://codecov.io/gh/omni-door/utils)
[![install size](https://packagephobia.now.sh/badge?p=%40omni-door%2Futils)](https://packagephobia.now.sh/result?p=%40omni-door%2Futils)
[![license](http://img.shields.io/npm/l/%40omni-door%2Futils.svg)](https://github.com/omni-door/utils/blob/master/LICENSE)

## Install
* Clone the repo: `git clone git@github.com:omni-door/utils.git`

* Install with [Npm](https://www.npmjs.com/package/@omni-door/utils): `npm install @omni-door/utils`

* Install with [Yarn](https://yarnpkg.com/en/package/@omni-door/utils): `yarn add @omni-door/utils`

## Methods
- exec
  ```js
  import { exec } from '@omni-door/utils';

  exec(
    ['npm test', 'ls && pwd', 'npm run build'],
    () => console.info('成功！'),
    () => console.error('失败！')
  );
  ```

- logPrefix
  ```js
  import { logPrefix } from '@omni-door/utils';

  logPrefix(); // 😊  [OMNI-DOOR]:
  ```

- setLogo
  ```js
  import { setLogo } from '@omni-door/utils';

  setLogo('❤️️️️  ');
  ```

- setBrand
  ```js
  import { setBrand } from '@omni-door/utils';

  setBrand('ODYSSEY');
  ```

- getLogo
  ```js
  import { getLogo } from '@omni-door/utils';

  getLogo(); // ❤️️  
  ```

- getBrand
  ```js
  import { getBrand } from '@omni-door/utils';

  getBrand(); // ODYSSEY
  ```

- logDetail
  ```js
  import { logDetail } from '@omni-door/utils';

  logDetail('this is a message!'); // ❤️️  [ODYSSEY]: this is a message! (gray)
  ```

- logEmph
  ```js
  import { logEmph } from '@omni-door/utils';

  logEmph('this is a message!'); // ❤️️  [ODYSSEY]: this is a message! (cyan)
  ```

- logErr
  ```js
  import { logErr } from '@omni-door/utils';

  logErr('this is a message!'); // ❤️️  [ODYSSEY]: this is a message! (red)
  ```

- logInfo
  ```js
  import { logInfo } from '@omni-door/utils';

  logInfo('this is a message!'); // ❤️️  [ODYSSEY]: this is a message! (white)
  ```

- logSuc
  ```js
  import { logSuc } from '@omni-door/utils';

  logSuc('this is a message!'); // ❤️️  [ODYSSEY]: this is a message! (green)
  ```

- logWarn
  ```js
  import { logWarn } from '@omni-door/utils';

  logWarn('this is a message!'); // ❤️️  [ODYSSEY]: this is a message! (yellow)
  ```

- underline
  ```js
  import { underline } from '@omni-door/utils';

  logWarn(underline('this is a message!')); // ❤️️  [ODYSSEY]: this is a message! (has underline)
  ```

- italic
  ```js
  import { italic } from '@omni-door/utils';

  logDetail(italic('this is a message!')); // ❤️️  [ODYSSEY]: this is a message! (italic font)
  ```

- nodeVersionCheck
  ```sh
  node -v # v10.13.0
  ```

  ```js
  import { nodeVersionCheck } from '@omni-door/utils';

  // pass
  (async function () {
    // require node version >= 10
    await nodeVersionCheck('10');
  })()

  // can't through the check and will be exit with warn log
  (async function () {
    // require node version >= 10.14
    await nodeVersionCheck('10.14');
  })()

  // can't through the check and will be exit with warn log
  (async function () {
    // require node version >= 10.13.1
    await nodeVersionCheck('10.13.1');
  })()
  ```

- npmVersionCheck
  ```js
  import { npmVersionCheck } from '@omni-door/utils';

  // the npm-package current version whether equal the latest version
  // if not, will print some info
  npmVersionCheck('@omni-door/cli', '2.2.10');
  ```

- updateNotifier
  ```js
  import { updateNotifier } from '@omni-door/utils';
  import pkg from '../package.json'

  // update pkg notifier
  updateNotifier(pkg);
  ```

- getNpmVersion
  ```js
  import { getNpmVersion } from '@omni-door/utils';

  // get the npm-package latest version
  getNpmVersion('@omni-door/cli'); // 2.2.14
  ```

- getNpmVersions
  ```js
  import { getNpmVersions } from '@omni-door/utils';

  // get the npm-package latest version
  getNpmVersions('@omni-door/cli'); // [..., 2.2.14, 2.2.15, ....]
  ```

- pkgNameCheck
  ```js
  import { pkgNameCheck } from '@omni-door/utils';

  // check the project name whether or not meet the npm-package-name rule
  pkgNameCheck('yourProjectName');
  ```

- outputFile
  ```js
  import path from 'path';
  import { outputFile } from '@omni-door/utils';

  outputFile({
    file_path: path.resolve(__dirname, 'src/test.txt'),
    file_content: 'I am a test content!'
  });
  ```

- getDependency
  ```js
  import { getDependency } from '@omni-door/utils';

  const dependency = getDependency('latest', {
    'core-js': '3.6.4',
    'react': '16.12.0',
    'react-dom': '16.12.0',
    'regenerator-runtime': '0.13.3'
  });

  const dependencyStable = getDependency('stable', {
    'core-js': '3.6.4',
    'react': '16.12.0',
    'react-dom': '16.12.0',
    'regenerator-runtime': '0.13.3'
  });

  dependency('react'); // 'react@latest'
  dependencyStable('react'); // 'react@16.12.0'
  ```

- arr2str
  ```js
  import { arr2str } from '@omni-door/utils';

  arr2str([1, 2, 3]); // "1 2 3"
  ```

- intersection
  ```js
  import { intersection } from '@omni-door/utils';

  depArr = [ ...intersection(depArr, depArr.filter(v => v !== 1)) ]
  ```

- requireCwd
  ```js
  import { requireCwd } from '@omni-door/utils';

  const errSilent = true;
  const Koa = requireCwd('koa', errSilent);
  const app = new Koa();
  // ...
  ```

- spinner
  ```js
  import { spinner } from '@omni-door/utils';

  spinner.state('start', 'begin!');
  spinner.text('new text');
  spinner.color('red');
  spinner.prefix('dot8');
  spinner.state('succeed', 'succeed!');
  ```

- tplEngineInit
  ```js
  import { tplEngineInit } from '@omni-door/utils';

  const tpls = {
    tplA: '`hello, ${include("tplB")}`',
    tplB: '`world`'
  };
  const envs = {
    ts: false,
    project_name: 'myProject',
    project_type: 'toolkit',
    style: 'css',
    strategy: 'stable',
    test: true,
    eslint: true,
    prettier: true,
    commitlint: true,
    stylelint: true,
    configFileName: 'omni.config.js'
  };
  const outputTpl = tplEngineInit(tpls, 'tplA');
  const tpl = outputTpl(envs);
  ```

- tplEngineNew
  ```js
  import { tplEngineNew } from '@omni-door/utils';

  const tpls = {
    tplA: '`hello, ${include("tplB")}`',
    tplB: '`world`'
  };
  const envs = {
    ts: false,
    project_type: 'spa-react' as 'spa-react',
    componentName: 'omni-spa',
    style: 'scss' as 'scss',
    test: true,
    md: 'md' as 'md'
  };
  const outputTpl = tplEngineNew(tpls, 'tplA');
  const tpl = outputTpl(envs);
  ```

- _typeof
  ```js
  import { _typeof } from '@omni-door/utils';

  _typeof(null); // "null"
  _typeof(undefined); // "undefined"
  _typeof([]); // "array"
  _typeof({}); // "object"
  _typeof(Symbol('symbol')); // "symbol"
  _typeof(''); // "string"
  _typeof(0); // "number"
  ```

- isInGitRepository
  ```js
  import { isInGitRepository } from '@omni-door/utils';

  isInGitRepository(); // return boolean
  ```

- tryGitInit
  ```js
  import { tryGitInit } from '@omni-door/utils';

  tryGitInit(); // try to init git repo
  ```