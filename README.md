# 🐸 @omni-door/tpl-utils
The Utils for @omni-door/cli and other templates project.

## Install
* Clone the repo: `git clone git@github.com:omni-door/tpl-utils.git`

* Install with [npm](https://www.npmjs.com/package/@omni-door/tpl-utils): `npm install @omni-door/tpl-utils`

* Install with [Yarn](https://yarnpkg.com/en/package/@omni-door/tpl-utils): `yarn add @omni-door/tpl-utils`

## Methods
- exec
  ```js
  import { exec } from '@omni-door/tpl-utils';

  exec(
    ['npm test', 'ls && pwd', 'npm run build'],
    () => console.info('成功！'),
    () => console.error('失败！')
  );
  ```

- logPrefix
  ```js
  import { logPrefix } from '@omni-door/tpl-utils';

  logPrefix(); // 🐸  [OMNI-DOOR]:
  ```

- setLogo
  ```js
  import { setLogo } from '@omni-door/tpl-utils';

  setLogo('🗡  ');
  ```

- setBrand
  ```js
  import { setBrand } from '@omni-door/tpl-utils';

  setBrand('ODYSSEY');
  ```

- getLogo
  ```js
  import { getLogo } from '@omni-door/tpl-utils';

  getLogo(); // 🗡  
  ```

- getBrand
  ```js
  import { getBrand } from '@omni-door/tpl-utils';

  getBrand(); // ODYSSEY
  ```

- logDetail
  ```js
  import { logDetail } from '@omni-door/tpl-utils';

  logDetail('this is a message!'); // 🗡  [ODYSSEY]: this is a message! (gray)
  ```

- logEmph
  ```js
  import { logEmph } from '@omni-door/tpl-utils';

  logEmph('this is a message!'); // 🗡  [ODYSSEY]: this is a message! (cyan)
  ```

- logErr
  ```js
  import { logErr } from '@omni-door/tpl-utils';

  logErr('this is a message!'); // 🗡  [ODYSSEY]: this is a message! (red)
  ```

- logInfo
  ```js
  import { logInfo } from '@omni-door/tpl-utils';

  logInfo('this is a message!'); // 🗡  [ODYSSEY]: this is a message! (white)
  ```

- logSuc
  ```js
  import { logSuc } from '@omni-door/tpl-utils';

  logSuc('this is a message!'); // 🗡  [ODYSSEY]: this is a message! (green)
  ```

- logWarn
  ```js
  import { logWarn } from '@omni-door/tpl-utils';

  logWarn('this is a message!'); // 🗡  [ODYSSEY]: this is a message! (yellow)
  ```

- underline
  ```js
  import { underline } from '@omni-door/tpl-utils';

  logWarn(underline('this is a message!')); // 🗡  [ODYSSEY]: this is a message! (has underline)
  ```

- italic
  ```js
  import { italic } from '@omni-door/tpl-utils';

  logDetail(italic('this is a message!')); // 🗡  [ODYSSEY]: this is a message! (italic font)
  ```

- node_version
  ```sh
  node -v # v10.13.0
  ```
  ```js
  import { node_version } from '@omni-door/tpl-utils';

  (async function () {
    const res1 = await node_version('10'); // require node version >= 10
    const res2 = await node_version('10.14'); // require node version >= 9.2
    const res3 = await node_version('10.13.5'); // require node version >= 10.18.0
    res1; // true
    res2; // false
    res1; // false
  })()
  ```

- output_file
  ```js
  import { output_file } from '@omni-door/tpl-utils';

  output_file({
    file_path: file_path('src/test.txt'),
    file_content: 'I am a test content!'
  });
  ```

  - getDependency
  ```js
  import { getDependency } from '@omni-door/tpl-utils';

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
  import { arr2str } from '@omni-door/tpl-utils';

  arr2str([1, 2, 3]); // "1 2 3"
  ```

- intersection
  ```js
  import { intersection } from '@omni-door/tpl-utils';

  depArr = [ ...intersection(depArr, depArr.filter(v => v !== 1)) ]
  ```

- spinner
  ```js
  import { spinner } from '@omni-door/tpl-utils';

  spinner.state('start', 'begin!');
  spinner.text('new text');
  spinner.color('red');
  spinner.prefix('dot8');
  spinner.state('succeed', 'succeed!');
  ```