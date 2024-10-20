const {series, parallel}  = require('gulp')
const gulp = require('gulp')

const {
    servidor,
    monitorarArquivos
} = require('./gulpTasks/servidor')

const {
    depsCSS,
    depsFonts
} = require('./gulpTasks/deps')

const {
    appHTML,
    appCSS,
    appIMG,
    appJS
} = require('./gulpTasks/app')

module.exports.default = series(
    parallel(
        series(appHTML, appCSS, appJS, appIMG),
        series(depsCSS, depsFonts)
    ),
    servidor,
    monitorarArquivos
)