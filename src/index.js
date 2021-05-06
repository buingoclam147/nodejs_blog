const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');

const route = require('./routes');
const db = require('./config/db');

//connect db
db.connect();

const app = express();
const port = 3000;



app.use(express.static(path.join(__dirname, 'public')));
//middleware dùng cho clien và thư viện
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//http logger
app.use(morgan('combined'));
//template engine
app.engine('hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
// console.log('PATH:', path.join(__dirname, 'resources/views'))
//routes init
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
