const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Course = new Schema({
    name: { type: String, maxLength: 255, required:true},
    description: { type: String, maxLength: 600},
    image: {type:String, maxLength:255},
    slug: { type: String, slug: 'name' },
    videoId: {type:String, maxLength:255, required:true},
    level: {type:String, maxLength:255, unique: true},
  },{
    timestamps:true,
  });

module.exports = mongoose.model('Course', Course);