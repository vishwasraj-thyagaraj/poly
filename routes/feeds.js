var express = require('express');
var router = express.Router();
var faker = require('faker');
var { paragraph } = faker.lorem;

var feeds = [
  { id:1, title: 'Clouds', url: 'https://i.ibb.co/Wp1K2Sw/Clouds.jpg', type: 'image', size: 37000, comments: [1, 2] },
  { id:2, title: 'Land', url: 'https://i.ibb.co/LYvNNsK/Land.jpg', type: 'image', size: 17000, comments: [2, 3] },
  { id:3, title: 'JavaScript Programming - Full Course', url: 'https://www.youtube.com/watch?v=jS4aFq5-91M', type: 'video', length: 465, comments: [5, 6] },
  { id:4, title: 'Asynchronous JavaScript Course (Async/Await, Promises, Callbacks)', url: 'https://www.youtube.com/watch?v=ZYb_ZU8LNxs', type: 'video', length: 97, comments: [] },
  { id:5, title: 'Moon', url: 'https://i.ibb.co/7nfyxv6/Moon.jpg', type: 'image', size: 6000, comments: [] },
  { id:6, title: 'Sea', url: 'https://i.ibb.co/kSvspQr/Sea.jpg', type: 'image', size: 21000, comments: [] },
  { id:7, title: 'Trees', url: 'https://i.ibb.co/XXMZ67q/Trees.jpg', type: 'image', size: 5000, comments: [] },
  { id:8, title: 'Async/Await - JavaScript Tutorial', url: 'https://www.youtube.com/watch?v=jAAmI5gMlVo', type: 'video', length: 47, comments: [] },
  { id:9, title: 'Learn Regular Expressions (Regex) - Crash Course for Beginners', url: 'https://www.youtube.com/watch?v=ZfQFUJhPqMM', type: 'video', length: 45, comments: [] },
  { id:10, title: 'Web Development Tutorial - JavaScript, HTML, CSS', url: 'https://www.youtube.com/watch?v=jaVNP3nIAv0', type: 'video', length: 87, comments: [] }
];

var comments = [
  { id: 1, body: paragraph(), feed_id: 1 },
  { id: 2, body: paragraph(), feed_id: 1 },
  { id: 3, body: paragraph(), feed_id: 2 },
  { id: 4, body: paragraph(), feed_id: 2 },
  { id: 5, body: paragraph(), feed_id: 3 },
  { id: 6, body: paragraph(), feed_id: 3 }
];

router.get('/', function(req, res, next) {
  res.json({ feeds });
});

// get comments for feed
router.get('/:feed_id', function(req, res, next) {
  res.json({ feed: feeds.find(feed => feed.id === +req.params.feed_id) });
});

// get comments for feed
router.get('/:feed_id/comments', function(req, res, next) {
  res.json({ comments: comments.filter(comment => comment.feed_id === +req.params.feed_id) });
});

module.exports = router;
