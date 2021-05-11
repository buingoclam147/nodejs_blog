const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const slug = require('mongoose-slug-generator');

const mongoose_delete = require('mongoose-delete');

const Course = new Schema({
  name: { type: String, maxLength: 255, required: true },
  description: { type: String, maxLength: 600 },
  image: { type: String, maxLength: 255 },
  slug: { type: String, slug: 'name' },
  videoId: { type: String, maxLength: 255, required: true },
  level: { type: String, maxLength: 255, unique: true },
}, {
  timestamps: true,
});

// add plugins
mongoose.plugin(slug);
Course.plugin((mongoose_delete), {
  overrideMethods: 'all'
  , deletedAt: true
});
module.exports = mongoose.model('Course', Course);