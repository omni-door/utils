import vm from 'vm';
import { STRATEGY, PROJECT_TYPE, STYLE } from './global.d';

type TplFn = () => string;
type ENV = {
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
};
type AlterEnv = Exclude<keyof ENV, 'project_name' | 'project_type' | 'style' | 'strategy'>;

export default function (
  tpls: { [tplName: string]: string },
  tplName: string,
  params?: { [param: string]: string }
) {
  return function (envs: ENV) {
    const context = {
      ...(envs || {}),
      use_strict: `'use strict';`,
      include: function (name: string) {
        if (!name) return '';
        const tplFn: TplFn | undefined = tpls[name] as any;
        return tplFn ? tplFn() : '';
      },
      alter: function (env: AlterEnv, tplName: string, value?: boolean) {
        if (!env || !tplName) return '';
        let alter = envs[env];

        if (typeof value === 'boolean') {
          if (alter !== value) return '';
        } else if (!alter) return '';

        const tplFn: TplFn | undefined = tpls[tplName] as any;
        return tplFn ? tplFn() : '';
      },
      alter_project_type: function (type: PROJECT_TYPE, tplNames: {
        'spa-react': string;
        'component-library-react': string;
        'toolkit': string;
      }) {
        if (!type || !tplNames) return '';
        const realType = envs['project_type'];
        if (!realType) return '';
        const tplName = tplNames[realType];
        const tplFn: TplFn | undefined = tpls[tplName] as any;
        return tplFn ? tplFn() : '';
      },
      alter_style: function (style: STYLE, tplNames: {
        css: string;
        less: string;
        scss: string;
        all: string
      }) {
        if (!style || !tplNames) return '';
        const realStyle = envs['style'];
        if (!realStyle) return '';
        const tplName = tplNames[realStyle];
        const tplFn: TplFn | undefined = tpls[tplName] as any;
        return tplFn ? tplFn() : '';
      },
      alter_strategy: function (strategy: STRATEGY, tplNames: {
        'stable': string;
        'latest': string;
      }) {
        if (!strategy || !tplNames) return '';
        const realStrategy = envs['strategy'];
        if (!realStrategy) return '';
        const tplName = tplNames[realStrategy];
        const tplFn: TplFn | undefined = tpls[tplName] as any;
        return tplFn ? tplFn() : '';
      },
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