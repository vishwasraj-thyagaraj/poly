var express = require('express');
var router = express.Router();
var faker = require('faker');
var { words, paragraph, text } = faker.lorem;

var posts = [
  { id: 1, title: words(), description: paragraph() },
  { id: 2, title: words(), description: paragraph() },
  { id: 3, title: words(), description: paragraph() },
  { id: 4, title: words(), description: paragraph() }
]

var comments = [
  { id: 1, body: paragraph(), post_id: 1 },
  { id: 2, body: paragraph(), post_id: 1 },
  { id: 3, body: paragraph(), post_id: 1 },
  { id: 4, body: paragraph(), post_id: 2 },
  { id: 5, body: paragraph(), post_id: 2 },
  { id: 6, body: paragraph(), post_id: 3 }
];

// get posts
router.get('/', function(req, res, next) {
  res.json({ posts });
});

// get post
router.get('/:post_id', function(req, res, next) {
  res.json({ post: posts.find(post => post.id === +req.params.post_id) });
});

// create post
router.post('/', function(req, res, next) {
  let post = req.body.post;

  let newPost = {
    id: posts.length + 1,
    title: post.title,
    description: post.description,
    comments: []
  };
  res.json({ post: newPost });
});

// get comments
router.get('/:post_id/comments', function(req, res, next) {
  res.json({ comments: comments.filter(comment => comment.post_id === +req.params.post_id) });
});

// get comment
router.get('/:post_id/comments/:comment_id', function(req, res, next) {
  let comment = comments.find((comment) => {
    let comment_id = +req.params.comment_id;
    let post_id = +req.params.post_id;
    if(comment.id === comment_id && comment.post_id === post_id) {
      return comment;
    }
  });

  res.json({ comment });
});

// create comment
router.post('/:post_id/comments', function(req, res, next) {
  let comment = req.body.comment;

  let newComment = {
    id: comments.length + 1,
    content: comment.content,
    post_id: +comment.post_id
  };

  comments.push(newComment);

  let post = posts.find(post => post.id === +comment.post_id);
  post.comments.push(newComment.id);

  res.json({ comment: newComment });
});

module.exports = router;
