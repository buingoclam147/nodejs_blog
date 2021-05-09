const Course = require('../models/course')
const { mongooseToObject } = require('../../util/mongoose')
const course = require('../models/course')
const { findById } = require('../models/course')
class CourseController {
    //[GET] /:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', { course: mongooseToObject(course) })
            })
            .catch(next)
    }

    //[GET] /create
    create(req, res, next) {
        res.render('courses/create')
    }
    //[POST] /store
    store(req, res, next) {
        // res.json(req.body)
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        course.save()
            .then(() => res.redirect('/'))
            .catch(error => {

            })
    }
    //[GET] :id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => res.render('courses/edit', {
                course: mongooseToObject(course)
            }))
            .catch(next)

    }
    //[PUT] courses/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body) 
            .then(() => res.redirect('/'))
            .catch(error => {

            })
    }
}
module.exports = new CourseController;