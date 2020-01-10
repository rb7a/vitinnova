const path = require('path')
// add page route here
module.exports = [
  {
    path: '/',
    component: path.resolve('src/pages/index.js')
  },
  // PROGETTO
  {
    path: '/il-progetto',
    component: path.resolve('src/pages/project.js')
  },
  {
    path: '/the-project',
    component: path.resolve('src/pages/project.js')
  }
]
