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

- node_version
  ```sh
  node -v # v10.13.0
  ```

  ```js
  import { node_version } from '@omni-door/utils';

  // pass
  (async function () {
    // require node version >= 10
    await node_version('10');
  })()

  // can't through the check and will be exit with warn log
  (async function () {
    // require node version >= 10.14
    await node_version('10.14');
  })()

  // can't through the check and will be exit with warn log
  (async function () {
    // require node version >= 10.13.1
    await node_version('10.13.1');
  })()
  ```

- output_file
  ```js
  import path from 'path';
  import { output_file } from '@omni-door/utils';

  output_file({
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

  const dependency_stable = getDependency('stable', {
    'core-js': '3.6.4',
    'react': '16.12.0',
    'react-dom': '16.12.0',
    'regenerator-runtime': '0.13.3'
  });

  dependency('react'); // 'react@latest'
  dependency_stable('react'); // 'react@16.12.0'
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

- require_cwd
  ```js
  import { require_cwd } from '@omni-door/utils';

  const errSilent = true;
  const Koa = require_cwd('koa', errSilent);
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

- tpl_engine_init
  ```js
  import { tpl_engine_init } from '@omni-door/utils';

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
  const output_tpl = tpl_engine_init(tpls, 'tplA');
  const tpl = output_tpl(envs);
  ```

- tpl_engine_new
  ```js
  import { tpl_engine_new } from '@omni-door/utils';

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
  const output_tpl = tpl_engine_new(tpls, 'tplA');
  const tpl = output_tpl(envs);
  ```