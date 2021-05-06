const mongoose = require('mongoose');
 connect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });
    console.log('connect successfully!!!!')
    } catch (error) {
        console.log('connect faile!!!!')
    }
}

module.exports = { connect };