const mongoose = require('mongoose')
const Blog = require('../model/blog')
const {StatusCodes} = require('http-status-codes')

//get all blogs
const fetchAllBlogs = async(req, res) => {
    let blogList
    try {
        blogList = await Blog.find
    } catch (error) {
        console.log(error)
    }
    res.status(StatusCodes.OK).json({blogList})

}
//Add new blog
const addNewBlog = async(req,res) => {
    const{title, comment } = req.body
    new currentDate = new Date()
    const newBlog = new Blog({
        title,
        comment,
        date: currentDate
    })
    try {
        await newBlog.create(req.body)
    } catch (error) {
        console.log(error)
    }
    res.status(StatusCodes.CREATED).json({newBlog})
}
// edit blog
const editBlog = async(req, res) =>{
    const id = req.params.id
    const {title, comment} = req.body
    const blogId = id
    let currentBlog
    try{
        currentBlog = await Blog.findByIdAndUpdate({
            title,
            comment
        })
    }catch(error){
        console.log(error)
        res.status(StatusCodes.BAD_REQUEST).json({ msg: "something went wrong"})
    }
    if (!currentBlog){
        return res.status(StatusCodes.NOT_FOUND).json({msg: `No blog found with id ${blogId}`})
    }
    res.status(StatusCodes.OK).json({currentBlog})
}
// delete blog
const deleteBlog = async(req, res) => {
    const id = req.params.id
    const blogId = id 
    try{
        const findCurrentBlog = await Blog.findByIdAndDelete(id)
        if(!findCurrentBlog){
            res.status(StatusCodes.NOT_FOUND).json({msg: `No job found by this ${blogId}`})
        }
        res.status(StatusCodes.OK).send()
    }catch(error){
        console.log(error)
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg: "unable to delete"})
    }
}

module.exports = {
    fetchAllBlogs,
    addNewBlog,
    editBlog,
    deleteBlog
}