// models/Blog.js

const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  },
  publicationDate: {
    type: Date,
    default: Date.now
  }
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
