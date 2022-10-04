var posts = require('../models/models.posts')

function addNewComment(req, res){
    const post = posts.find(item => item['id']===req.body['postId'])
    if(!post)
        return res.end('Post not found')
    post.comments.push(req.body['comment'])
    res.render('post', {
        post: post
    })
}


module.exports = {
    addNewComment,
}