const path = require('path')
// add page route here
module.exports = [
  {
    path: '/',
    component: path.resolve('src/pages/index.js')
  },
  // PROJECT
  {
    path: '/il-progetto',
    component: path.resolve('src/pages/project.js')
  },
  {
    path: '/the-project',
    component: path.resolve('src/pages/project.js')
  },
  // INNOVATION
  {
    path: '/innovazione',
    component: path.resolve('src/pages/innovation.js')
  },
  {
    path: '/innovation',
    component: path.resolve('src/pages/innovation.js')
  },
  // TEAM
  {
    path: '/team',
    component: path.resolve('src/pages/team.js')
  },
  {
    path: '/team',
    component: path.resolve('src/pages/team.js')
  }
]
