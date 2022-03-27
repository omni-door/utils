import vm from 'vm';
/* import types */
import type { STRATEGY, PROJECT_TYPE, STYLE, MARKDOWN } from './global';

type TplFn = () => string;

export interface ENV_NEW {
  componentName: string;
  style?: STYLE;
  ts?: boolean;
  test?: boolean;
  md?: MARKDOWN | boolean;
  [propsName: string]: string | boolean | number | void;
}
type AlterEnv_NEW = Exclude<keyof ENV_NEW, 'componentName' | 'style' | 'md' | 'newPath'>;

export function _typeof (ele: any) {
  if (typeof ele !== 'object') return typeof ele;
  if (!ele) return 'null'; // fix typeof null === 'object' problem
  const len = Object.prototype.toString.call(ele).length - 1;
  return Object.prototype.toString.call(ele).slice(8, len).toLowerCase();
}

export function tplEngineNew (
  tpls: { [tplName: string]: string },
  tplName: string,
  params?: { [param: string]: string | number | boolean }
) {
  return function (envs: ENV_NEW) {
    const newTpls: { [tplName: string]: string } = {};
    const context = {
      ...(envs || {}),
      use_strict: `'use strict';`,
      include: function (name: string) {
        if (!name) return '';
        const tplFn: TplFn | undefined = newTpls[name] as any;
        return tplFn ? tplFn() : '';
      },
      alter: function (env: AlterEnv_NEW, tplName: string, value?: boolean) {
        if (!env || !tplName) return '';
        const alter = envs[env];

        if (typeof value === 'boolean') {
          if (alter !== value) return '';
        } else if (!alter) return '';

        const tplFn: TplFn | undefined = newTpls[tplName] as any;
        return tplFn ? tplFn() : '';
      },
      alter_style: function (tplNames: {
        css?: string;
        less?: string;
        scss?: string;
        all?: string
      }) {
        if (_typeof(tplNames) !== 'object') return '';
        const realStyle = envs['style'];
        if (!realStyle) return '';
        const tplName = tplNames[realStyle];
        if (!tplName) return '';
        const tplFn: TplFn | undefined = newTpls[tplName] as any;
        return tplFn ? tplFn() : '';
      },
      _typeof,
      ...(params || {})
    };
  
    Object.keys(tpls).forEach(tplName => {
      const tpl = tpls[tplName];
      newTpls[tplName] = vm.runInNewContext(`
        (function () {
          return ${tpl};
        })
      `, context);
    });
  
    const tplFn: TplFn = newTpls[tplName] as any;
    return tplFn();
  };
}

export interface ENV_INIT {
  project_name: string;
  project_type?: PROJECT_TYPE;
  style?: STYLE;
  strategy?: STRATEGY;
  ts?: boolean;
  test?: boolean;
  eslint?: boolean;
  prettier?: boolean;
  commitlint?: boolean;
  stylelint?: boolean;
  configFileName?: string;
  [propsName: string]: string | boolean | number | void;
}
type AlterEnv_INIT = Exclude<keyof ENV_INIT, 'project_name' | 'project_type' | 'style' | 'strategy'>;

export function tplEngineInit (
  tpls: { [tplName: string]: string },
  tplName: string,
  params?: { [param: string]: string | number | boolean }
) {
  return function (envs: ENV_INIT) {
    const newTpls: { [tplName: string]: string } = {};
    const context = {
      ...(envs || {}),
      use_strict: `'use strict';`,
      include: function (name: string) {
        if (!name) return '';
        const tplFn: TplFn | undefined = newTpls[name] as any;
        return tplFn ? tplFn() : '';
      },
      alter: function (env: AlterEnv_INIT, tplName: string, value?: boolean) {
        if (!env || !tplName) return '';
        const alter = envs[env];

        if (typeof value === 'boolean') {
          if (alter !== value) return '';
        } else if (!alter) return '';

        const tplFn: TplFn | undefined = newTpls[tplName] as any;
        return tplFn ? tplFn() : '';
      },
      alter_project_type: function (tplNames: {
        'spa-react'?: string;
        'spa-react-pc'?: string;
        'spa-vue'?: string;
        'ssr-react'?: string;
        'ssr-vue'?: string;
        'component-react'?: string;
        'component-vue'?: string;
        'toolkit'?: string;
      }) {
        if (_typeof(tplNames) !== 'object') return '';
        const realType = envs['project_type'];
        if (!realType) return '';
        const tplName = tplNames[realType];
        if (!tplName) return '';
        const tplFn: TplFn | undefined = newTpls[tplName] as any;
        return tplFn ? tplFn() : '';
      },
      alter_style: function (tplNames: {
        css?: string;
        less?: string;
        scss?: string;
        all?: string
      }) {
        if (_typeof(tplNames) !== 'object') return '';
        const realStyle = envs['style'];
        if (!realStyle) return '';
        const tplName = tplNames[realStyle];
        if (!tplName) return '';
        const tplFn: TplFn | undefined = newTpls[tplName] as any;
        return tplFn ? tplFn() : '';
      },
      alter_strategy: function (tplNames: {
        stable?: string;
        latest?: string;
      }) {
        if (_typeof(tplNames) !== 'object') return '';
        const realStrategy = envs['strategy'];
        if (!realStrategy) return '';
        const tplName = tplNames[realStrategy];
        if (!tplName) return '';
        const tplFn: TplFn | undefined = newTpls[tplName] as any;
        return tplFn ? tplFn() : '';
      },
      _typeof,
      ...(params || {})
    };
  

    Object.keys(tpls).forEach(tplName => {
      const tpl = tpls[tplName];
      newTpls[tplName] = vm.runInNewContext(`
        (function () {
          return ${tpl};
        })
      `, context);
    });
  
    const tplFn: TplFn = newTpls[tplName] as any;
    return tplFn();
  };
}