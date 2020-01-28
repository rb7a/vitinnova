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
  },
  // SOCIETA COOPERATIVA
  {
    path: '/societa-cooperativa-agricola',
    component: path.resolve('src/pages/societaCooperativa.js')
  },
  // MONCARO
  {
    path: '/moncaro',
    component: path.resolve('src/pages/moncaro.js')
  },
  // BELISARIO
  {
    path: '/belisario',
    component: path.resolve('src/pages/belisario.js')
  },
  // UNIVPM
  {
    path: '/univpm',
    component: path.resolve('src/pages/univpm.js')
  },
  // CIA
  {
    path: '/cia',
    component: path.resolve('src/pages/cia.js')
  },
  // CONTACT
  {
    path: '/contatti',
    component: path.resolve('src/pages/contact.js')
  },
  {
    path: '/contact',
    component: path.resolve('src/pages/contact.js')
  }
]
