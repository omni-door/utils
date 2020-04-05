import vm from 'vm';
import { STRATEGY, PROJECT_TYPE, STYLE, MARKDOWN } from './global.d';

type TplFn = () => string;

type ENV_NEW = {
  componentName: string;
  style: STYLE;
  ts: boolean;
  test: boolean;
  md: MARKDOWN;
};
type AlterEnv_NEW = Exclude<keyof ENV_NEW, 'componentName' | 'style' | 'md' | 'newPath'>;

function type_of (ele: any) {
  if (typeof ele !== 'object') return typeof ele;
  if (!ele) return 'null'; // fix typeof null === 'object' problem
  const len = Object.prototype.toString.call(ele).length - 1;
  return Object.prototype.toString.call(ele).slice(8, len).toLowerCase();
}

export function tpl_engine_new (
  tpls: { [tplName: string]: string },
  tplName: string,
  params?: { [param: string]: string }
) {
  return function (envs: ENV_NEW) {
    const context = {
      ...(envs || {}),
      use_strict: `'use strict';`,
      include: function (name: string) {
        if (!name) return '';
        const tplFn: TplFn | undefined = tpls[name] as any;
        return tplFn ? tplFn() : '';
      },
      alter: function (env: AlterEnv_NEW, tplName: string, value?: boolean) {
        if (!env || !tplName) return '';
        let alter = envs[env];

        if (typeof value === 'boolean') {
          if (alter !== value) return '';
        } else if (!alter) return '';

        const tplFn: TplFn | undefined = tpls[tplName] as any;
        return tplFn ? tplFn() : '';
      },
      alter_style: function (tplNames: {
        css?: string;
        less?: string;
        scss?: string;
        all?: string
      }) {
        if (type_of(tplNames) !== 'object') return '';
        const realStyle = envs['style'];
        if (!realStyle) return '';
        const tplName = tplNames[realStyle];
        if (!tplName) return '';
        const tplFn: TplFn | undefined = tpls[tplName] as any;
        return tplFn ? tplFn() : '';
      },
      type_of,
      ...(params || {})
    };
  
    Object.keys(tpls).forEach(tplName => {
      const tpl = tpls[tplName];
      tpls[tplName] = vm.runInNewContext(`
        (function () {
          return ${tpl};
        })
      `, context);
    });
  
    const tplFn: TplFn = tpls[tplName] as any;
    return tplFn();
  }
}

type ENV_INIT = {
  project_name: string;
  project_type: PROJECT_TYPE;
  style: STYLE;
  strategy: STRATEGY;
  ts: boolean;
  test: boolean;
  eslint: boolean;
  prettier: boolean;
  commitlint: boolean;
  stylelint: boolean;
  configFileName: string;
};
type AlterEnv_INIT = Exclude<keyof ENV_INIT, 'project_name' | 'project_type' | 'style' | 'strategy'>;

export function tpl_engine_init (
  tpls: { [tplName: string]: string },
  tplName: string,
  params?: { [param: string]: string }
) {
  return function (envs: ENV_INIT) {
    const context = {
      ...(envs || {}),
      use_strict: `'use strict';`,
      include: function (name: string) {
        if (!name) return '';
        const tplFn: TplFn | undefined = tpls[name] as any;
        return tplFn ? tplFn() : '';
      },
      alter: function (env: AlterEnv_INIT, tplName: string, value?: boolean) {
        if (!env || !tplName) return '';
        let alter = envs[env];

        if (typeof value === 'boolean') {
          if (alter !== value) return '';
        } else if (!alter) return '';

        const tplFn: TplFn | undefined = tpls[tplName] as any;
        return tplFn ? tplFn() : '';
      },
      alter_project_type: function (tplNames: {
        'spa-react'?: string;
        'component-library-react'?: string;
        'toolkit'?: string;
      }) {
        if (type_of(tplNames) !== 'object') return '';
        const realType = envs['project_type'];
        if (!realType) return '';
        const tplName = tplNames[realType];
        if (!tplName) return '';
        const tplFn: TplFn | undefined = tpls[tplName] as any;
        return tplFn ? tplFn() : '';
      },
      alter_style: function (tplNames: {
        css?: string;
        less?: string;
        scss?: string;
        all?: string
      }) {
        if (type_of(tplNames) !== 'object') return '';
        const realStyle = envs['style'];
        if (!realStyle) return '';
        const tplName = tplNames[realStyle];
        if (!tplName) return '';
        const tplFn: TplFn | undefined = tpls[tplName] as any;
        return tplFn ? tplFn() : '';
      },
      alter_strategy: function (tplNames: {
        stable?: string;
        latest?: string;
      }) {
        if (type_of(tplNames) !== 'object') return '';
        const realStrategy = envs['strategy'];
        if (!realStrategy) return '';
        const tplName = tplNames[realStrategy];
        if (!tplName) return '';
        const tplFn: TplFn | undefined = tpls[tplName] as any;
        return tplFn ? tplFn() : '';
      },
      type_of,
      ...(params || {})
    };
  
    Object.keys(tpls).forEach(tplName => {
      const tpl = tpls[tplName];
      tpls[tplName] = vm.runInNewContext(`
        (function () {
          return ${tpl};
        })
      `, context);
    });
  
    const tplFn: TplFn = tpls[tplName] as any;
    return tplFn();
  }
}