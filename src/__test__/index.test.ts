import fs from 'fs';
import path from 'path';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import exec from '../exec';
import { stateMap2Emoji } from '../emoji';
import logPrefix, { setLogo, getLogo, setBrand, getBrand } from '../log_prefix';
import { logDetail, logEmph, logInfo, logErr, logWarn, logSuc, underline, italic } from '../logger';
import {
  getDependency,
  arr2str,
  intersection
} from '../dependencies';
import node_version from '../node_version';
import output_file from '../output_file';
import spinner from '../spinner';
import { tpl_engine_init, tpl_engine_new } from '../tpl_engine';

describe('exec test', function () {
  it('type checking', function () {
    expect(exec).to.be.a('function');
  });

  it('exec nonexist commands', function (done) {
    exec([
      'nonexist_command',
      'ls -la'
    ], () => {}, function (err) {
      expect(err).to.be.a('string');
      done();
    }, true)
  });

  it('exec correct commands', function (done) {
    exec([
      'pwd',
      'ls'
    ], function (res) {
      expect(res).to.be.an('array');
      expect(res).to.have.lengthOf(2);
      expect(res[0]).to.be.a('string');
      done();
    }, () => {}, true)
  });
});

describe('stateMap2Emoji test', function () {
  it('type checking', function () {
    expect(stateMap2Emoji).to.be.an('object');
    expect(stateMap2Emoji.emphasis).to.be.a('string');
    expect(stateMap2Emoji.fail).to.be.a('string');
    expect(stateMap2Emoji.info).to.be.a('string');
    expect(stateMap2Emoji.start).to.be.a('string');
    expect(stateMap2Emoji.stop).to.be.a('string');
    expect(stateMap2Emoji.succeed).to.be.a('string');
    expect(stateMap2Emoji.warn).to.be.a('string');
  });
});

describe('log_prefix test', function () {
  it('type checking', function () {
    expect(logPrefix).to.be.a('function');
    expect(setLogo).to.be.a('function');
    expect(getLogo).to.be.a('function');
    expect(setBrand).to.be.a('function');
    expect(getBrand).to.be.a('function');
  });

  it('call logPrefix', function () {
    const prefix = logPrefix();
    expect(prefix).to.be.a('string');
    expect(prefix).to.be.equal('🐸  \u001b[4m[OMNI-DOOR]:\u001b[24m');
  });

  it('call getLogo', function () {
    const logo = getLogo();
    expect(logo).to.be.a('string');
    expect(logo).to.be.equal('🐸');
  });

  it('call getBrand', function () {
    const brand = getBrand();
    expect(brand).to.be.a('string');
    expect(brand).to.be.equal('OMNI-DOOR');
  });

  it('call setLogo', function () {
    setLogo('🏀');
    const logo = getLogo();
    expect(logo).to.be.equal('🏀');
  });

  it('call setBrand', function () {
    setBrand('CUSTOM-PREFIX');
    const brand = getBrand();
    expect(brand).to.be.equal('CUSTOM-PREFIX');
  });
});

describe('logger test', function () {
  it('type checking', function () {
    expect(logDetail).to.be.a('function');
    expect(logEmph).to.be.a('function');
    expect(logInfo).to.be.a('function');
    expect(logErr).to.be.a('function');
    expect(logWarn).to.be.a('function');
    expect(logSuc).to.be.a('function');
    expect(underline).to.be.a('function');
    expect(italic).to.be.a('function');
  });

  it('call logDetail', function () {
    logDetail('log detail');
  });

  it('call logEmph', function () {
    logEmph('log emphasis');
  });

  it('call logInfo', function () {
    logInfo('log info');
  });

  it('call logErr', function () {
    logErr('log error');
  });

  it('call logWarn', function () {
    logWarn('log warn');
  });

  it('call logSuc', function () {
    logSuc('log success');
  });

  it('call underline', function () {
    const msg = underline('underline message');
    expect(msg).to.be.a('string');
    expect(msg).to.be.equal('\u001b[1m\u001b[4munderline message\u001b[24m\u001b[22m');
  });

  it('call italic', function () {
    const msg = italic('italic message');
    expect(msg).to.be.a('string');
    expect(msg).to.be.equal('\u001b[1m\u001b[3mitalic message\u001b[23m\u001b[22m');
  });
});

describe('node_version test', function () {
  it('type checking', function () {
    expect(node_version).to.be.a('function');
  });

  it('call node_version', function (done) {
    node_version('8.17.0').then(res => {
      expect(res).to.be.true;
      done();
    });
  });
});

describe('output_file test', function () {
  it('type checking', function () {
    expect(output_file).to.be.a('function');
  });

  it('call output_file', function () {
    const file_path = path.resolve(__dirname, '../../test.js');
    const content = `const a = ${(Math.random() * 100).toFixed(5)};`;
    output_file({
      file_path: file_path,
      file_content: content,
      mode: 0o775
    });
    const ctx = fs.readFileSync(file_path, {
      encoding: 'utf-8'
    })
    expect(ctx === content).to.be.true;

    output_file({
      file_path: '',
      file_content: ''
    });
  })
});

describe('getDependency test', function () {
  it('type checking', function () {
    expect(getDependency).to.be.a('function');
  });

  it('call getDependency', function () {
    const dependecies_stable = getDependency('stable', {
      'react': '16.13.0',
      'react-dom': '16.12.0'
    });

    const dependecies_latest = getDependency('latest', {
      'react': '16.13.0',
      'react-dom': '16.12.0'
    });

    expect(dependecies_stable).to.be.a('function');
    expect(dependecies_latest).to.be.a('function');

    expect(dependecies_stable('react')).to.be.a('string');
    expect(dependecies_stable('react')).to.be.equal('react@16.13.0');
    expect(dependecies_latest('react-dom')).to.be.a('string');
    expect(dependecies_latest('react-dom')).to.be.equal('react-dom@latest');
  });
});

describe('arr2str test', function () {
  it('type checking', function () {
    expect(arr2str).to.be.a('function');
  });

  it('call arr2str', function () {
    const str = arr2str(['test', 'message']);
    expect(str).to.be.a('string');
    expect(str).to.be.equal('test message')
  });
});

describe('intersection test', function () {
  it('type checking', function () {
    expect(intersection).to.be.a('function');
  });

  it('call intersection', function () {
    const arr1 = [1, 22, 55, 123, 32];
    const arr2 = [2, 32, 55, 23, 3];
    const arr = intersection(arr1, arr2);
    expect(arr).to.be.a('array');
    expect(arr).to.have.lengthOf(2);
    expect(arr.includes(55)).to.be.true;
    expect(arr.includes(32)).to.be.true;
  });
});

describe('spinner test', function () {
  it('type checking', function () {
    expect(spinner).to.be.an('object');
    expect(spinner.state).to.be.a('function');
    expect(spinner.text).to.be.a('function');
    expect(spinner.color).to.be.a('function');
    expect(spinner.prefix).to.be.a('function');
  });

  it('call spinner\'s function', function (done) {
    spinner.state('start', 'start message');
    setTimeout(() => {
      spinner.color('magenta');
      spinner.prefix('dots12');
      spinner.text('custom text');

      setTimeout(() => {
        spinner.state('warn', 'warn message');
        spinner.state('fail', 'fail message');
        spinner.state('succeed', 'succeed message');
        spinner.state('info', 'info message');
        spinner.state('stop', 'stop message');
        spinner.state('warn', 'warn message');
        done();
      }, 600);
    }, 600);
  });
});

describe('tpl_engine_init test', function () {
  const tpls = {
    tplA: '`hello, ${include("tplB")}`',
    tplB: '`world`'
  };
  const envs = {
    ts: false,
    project_name: 'test_project',
    project_type: 'toolkit' as 'toolkit',
    style: 'css' as 'css',
    strategy: 'stable' as 'stable',
    test: true,
    eslint: true,
    prettier: true,
    commitlint: true,
    stylelint: true,
    configFileName: 'test.config.js'
  };
  const output_tpl = tpl_engine_init(tpls, 'tplA');
  const tpl = output_tpl(envs);

  it('type checking', function () {
    expect(tpl_engine_init).to.be.a('function');
    expect(output_tpl).to.be.a('function');
    expect(tpl).to.be.a('string');
    expect(tpl).to.be.equal('hello, world');
  });
});

describe('tpl_engine_new test', function () {
  const tpls = {
    tplA: '`hello, ${include("tplB")}`',
    tplB: '`world`'
  };
  const envs = {
    ts: false,
    project_type: 'spa-react' as 'spa-react',
    componentName: 'omni-spa',
    stylesheet: 'css' as 'css',
    test: true,
    md: 'md' as 'md',
    newPath: '../../'
  };
  const output_tpl = tpl_engine_new(tpls, 'tplA');
  const tpl = output_tpl(envs);

  it('type checking', function () {
    expect(tpl_engine_new).to.be.a('function');
    expect(output_tpl).to.be.a('function');
    expect(tpl).to.be.a('string');
    expect(tpl).to.be.equal('hello, world');
  });
});