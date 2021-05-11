const Course = require('../models/course')
const { mutipleMongooseToObject } = require('../../util/mongoose')
class meController {


    //[GET] /me/stored/courses
    storedCourses(req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
        .then(([courses, deletedCount]) => {
            res.render('me/stored-courses', {
                deletedCount,
                courses: mutipleMongooseToObject(courses)
            })
            .catch(next);
        })


        // Course.countDocumentsDeleted()
        //     .then((deletedCount) => {
        //         console.log(deletedCount);
        //     })
        //     .catch(next);

        // Course.find({}).then((courses) => {
        //     res.render('me/stored-courses', {
        //         courses: mutipleMongooseToObject(courses)
        //     })
        // })
        //     .catch(next);

    }
    //[GET] /me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({}).then((courses) => {
            res.render('me/trash-courses', {
                courses: mutipleMongooseToObject(courses)
            })
        })
            .catch(next);

    }
}
module.exports = new meController;
