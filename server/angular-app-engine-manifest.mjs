
export default {
  basePath: 'https://fusionguy100.github.io/Angular-Trivia',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
