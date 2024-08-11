const mongoose = require('mongoose');
const schema = mongoose.Schema({
  EmpName: String,
  designation: String,
  empId: String,
  img_url: String,
});
const BlogModel = mongoose.model('Final', schema, 'final');

module.exports = BlogModel;

