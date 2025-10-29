
export default {
  basePath: 'https://fusionguy100.github.io/triviaproject',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
