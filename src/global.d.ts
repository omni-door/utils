export type BUILD = 'webpack' | 'rollup' | 'gulp' | 'tsc' | 'next' | '';
export type PROJECT_TYPE = 'spa-react' | 'spa-vue' | 'ssr-react' | 'ssr-vue' | 'component-react' | 'component-vue' | 'toolkit';
export type PKJTOOL = 'yarn' | 'npm' | 'cnpm';
export type STYLE = 'less' | 'scss' | 'css' | 'all' | '';
export type SPASERVER = 'express-webpack' | '';
export type COMPONENTSERVER = 'docz' | 'storybook' | 'styleguidist' | 'bisheng' | '';
export type SSRSERVER = 'next' | 'koa-next' | 'nuxt' | 'koa-nuxt' | '';
export type STRATEGY = 'stable' | 'latest';
export type LOGLEVEL = 'debug' | 'info' | 'warn' | 'error' | 'silent';
export type PLUGINSTAGE = 'new' | 'build' | 'release';
export type MARKDOWN = 'mdx' | 'md';
export type TESTFRAME = 'mocha' | 'jest' | '';
export type SPINNER_STATE = 'start' | 'warn' | 'fail' | 'succeed' | 'info' | 'stop';
export type HASH = 'hash' | 'chunkhash' | 'contenthash';