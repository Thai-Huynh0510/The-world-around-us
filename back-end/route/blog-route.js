const express = require('express')
const blogRouter = express.Routers()
const{fetchAllBlogs,
    addNewBlog,
    editBlog,
    deleteBlog} = require('../controller/blog-controller')


blogRouter.get('/', fetchAllBlogs)
blogRouter.post('/add', addNewBlog)
blogRouter.put('/edit/:id', editBlog)
blogRouter.delete('delete/:id', deleteBlog)

module.exports = blogRouter