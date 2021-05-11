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
        req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(req.body);
        course.save()
            .then(() => res.redirect('/me/stored/courses'))
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
            .catch(next)
    }
    //[DELETE] courses/:id
    destroy(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }
    //[PATCH] courses/:id/restore
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }
    //[DELETE] courses/:id/force
    force(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }
}   
module.exports = new CourseController();