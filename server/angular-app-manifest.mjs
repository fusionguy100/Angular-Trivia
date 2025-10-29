
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://fusionguy100.github.io/Angular-Trivia/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Angular-Trivia"
  },
  {
    "renderMode": 2,
    "route": "/Angular-Trivia/settings"
  },
  {
    "renderMode": 2,
    "route": "/Angular-Trivia/leaderboard"
  },
  {
    "renderMode": 2,
    "route": "/Angular-Trivia/quiz"
  },
  {
    "renderMode": 2,
    "route": "/Angular-Trivia/results"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 542, hash: 'afc09e28e9dca0f7593be894fb044533c896f060e9c9fdd53af3203240887070', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1055, hash: 'f3d47fc0ca3bf1693fae4bc0164daf907e37e71e8b0abecc338eab439d557dcd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'leaderboard/index.html': {size: 3315, hash: 'ce433308a4024cb4df43ed4dc84e4c11ec918e5e640f0e8ae359cf566dcad10f', text: () => import('./assets-chunks/leaderboard_index_html.mjs').then(m => m.default)},
    'index.html': {size: 3525, hash: '703c237d7ade810ed5697d972b71b9543829dee84a469e00f36530a28e7addb8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'settings/index.html': {size: 5575, hash: 'c38a24b090e31b8c572c6c795919296d8ed50730961fd6e627cb3c12d936de06', text: () => import('./assets-chunks/settings_index_html.mjs').then(m => m.default)},
    'results/index.html': {size: 4140, hash: 'f9fe2a74580cb56571a1adefbfae50db87571dff15e38b3ad2388d39c40e5737', text: () => import('./assets-chunks/results_index_html.mjs').then(m => m.default)},
    'quiz/index.html': {size: 5379, hash: '8cc2ea90e6a8ecf3b8732c2a9934337b18e370f6592ff239b7efb8110f9a6668', text: () => import('./assets-chunks/quiz_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
