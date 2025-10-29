
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://fusionguy100.github.io/triviaproject/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/triviaproject"
  },
  {
    "renderMode": 2,
    "route": "/triviaproject/settings"
  },
  {
    "renderMode": 2,
    "route": "/triviaproject/leaderboard"
  },
  {
    "renderMode": 2,
    "route": "/triviaproject/quiz"
  },
  {
    "renderMode": 2,
    "route": "/triviaproject/results"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 541, hash: '31219416cfdeff13d26a6756b6159898c0683c93e3fe19de5158253b4905933b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1054, hash: '520af25eed52eb0eb7d5ffa0dc5ed23e6619fcedddfbf178aae93418b920ca15', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3524, hash: '5bf7eb3efd6f1d4a52400a8c4d31bdf6caed53b196ad2e0a2b8f4a0a0c55504e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'settings/index.html': {size: 5574, hash: 'a44876d55d5eccd9efb741a3dd5714ca8afc8ce8baf70df813d937e210865480', text: () => import('./assets-chunks/settings_index_html.mjs').then(m => m.default)},
    'leaderboard/index.html': {size: 3314, hash: '40d2779a9fdde690db92ff38efd7c248cd067d77fced9ebca3dd14687fddff24', text: () => import('./assets-chunks/leaderboard_index_html.mjs').then(m => m.default)},
    'results/index.html': {size: 4139, hash: 'd12c5d5585f5a59c42657acb549b4d7b64f92f7cddad9baed9cf8531a698a5ea', text: () => import('./assets-chunks/results_index_html.mjs').then(m => m.default)},
    'quiz/index.html': {size: 5378, hash: '3a877261654c9f022b7001d08aebb598e5e06c34060a763a9a49d6f8defc7f5a', text: () => import('./assets-chunks/quiz_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
