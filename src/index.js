const routes = require('./Route/routes')

const initializeEndpoints = (app) => {
    app.use('/api/', routes)
}

module.exports = initializeEndpoints