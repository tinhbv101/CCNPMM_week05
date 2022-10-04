var posts = require('../models/models.posts')

function getAllPosts(req, res){
    res.render('index', {
        posts: posts
    })
}

function getById(req, res){
    const post = posts.find((item)=>{
        return item['id'] === Number.parseInt(req.params['id'])
    })
    res.render('post', {
        post: post
    })
}

function newPost(req, res){
    const newPost = req.body
    console.log(req.body)
    newPost['id'] = posts[posts.length-1]['id']+1
    newPost['comments'] = []
    posts.push(newPost)
    res.render('index', {
        posts: posts
    })
}

function deleteById(req, res){
    posts = posts.filter((item)=>{
        return item['id'] !== Number.parseInt(req.params['id'])
    })
    res.render('index', {
        posts: posts
    })
}

function editById(req, res){
    console.log(req.body)
    const post = posts.find((item)=>{
        return item['id'] === Number.parseInt(req.params['id'])
    })
    if(!post)
        return res.end('Post not found')
    if(req.body['title'])
        post['title'] = req.body['title']
    if(req.body['content'])
        post['content'] = req.body['content']
    res.render('post', {
        post: post
    })
}

function goToEdit(req, res){
    res.render('createOrEdit', {
        post: posts.find((item)=>{
            return item['id'] === Number.parseInt(req.params['id'])
        })
    })
}

function goToCreate(req, res){
    res.render('createOrEdit', {
        post: null
    })
}

function goToComment(req, res){
    const postId = Number.parseInt(req.params['id'])
    res.render('comment', {
        postId: postId
    })
}

module.exports = {
    getAllPosts,
    getById,
    newPost,
    deleteById,
    editById,
    goToEdit,
    goToCreate,
    goToComment
}