const newsRouter = require('./news')
const siteRouter = require('./site')
const route = (app) => {
    app.use('/news', newsRouter)
    app.use('/', siteRouter)
    // app.get('/', (req, res) => {
    //     res.render('home');
    // })
    //   app.get('/news', (req, res) => {
    //     console.log(req.query.q)
    //     res.render('news');
    //   })
     

    // app.get('/search', (req, res) => {
    //     res.render('search');
    // })
   
}
module.exports = route;