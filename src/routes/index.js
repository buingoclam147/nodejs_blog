const newsRouter = require('./news');
const meRouter = require('./me');
const methodOverride = require('method-override')
const siteRouter = require('./site');
const coursesRouter = require('./course');
const route = (app) => {
    app.use('/me', meRouter);
    app.use('/news', newsRouter);
    app.use('/courses', coursesRouter);
    app.use('/', siteRouter);

};
module.exports = route;
