var express = require('express');
var router = express.Router();
var faker = require('faker');
var { paragraph, words } = faker.lorem;
var { url } = faker.internet;
var { companyName } = faker.company;

var posts = [
  { id: 1, title: words(), description: paragraph() },
  { id: 2, title: words(), description: paragraph() },
  { id: 3, title: words(), description: paragraph() },
  { id: 4, title: words(), description: paragraph() },
  { id: 5, title: words(), description: paragraph() }
]

var bookmarks = [
  { id: 1, name: companyName(), url: url() },
  { id: 2, name: companyName(), url: url() },
  { id: 3, name: companyName(), url: url() },
  { id: 4, name: companyName(), url: url() },
  { id: 5, name: companyName(), url: url() }
]

var feeds = [
  { id:1, title: 'Clouds', url: 'https://i.ibb.co/Wp1K2Sw/Clouds.jpg', type: 'image', size: 37000 },
  { id:2, title: 'Land', url: 'https://i.ibb.co/LYvNNsK/Land.jpg', type: 'image', size: 17000 },
  { id:3, title: 'JavaScript Programming - Full Course', url: 'https://www.youtube.com/embed/jS4aFq5-91M', type: 'video', length: 465 },
  { id:4, title: 'Asynchronous JavaScript Course (Async/Await, Promises, Callbacks)', url: 'https://www.youtube.com/embed/ZYb_ZU8LNxs', type: 'video', length: 97 },
  { id:5, title: 'Moon', url: 'https://i.ibb.co/7nfyxv6/Moon.jpg', type: 'image', size: 6000 },
  { id:6, title: 'Sea', url: 'https://i.ibb.co/kSvspQr/Sea.jpg', type: 'image', size: 21000 },
  { id:7, title: 'Trees', url: 'https://i.ibb.co/XXMZ67q/Trees.jpg', type: 'image', size: 5000 },
  { id:8, title: 'Async/Await - JavaScript Tutorial', url: 'https://www.youtube.com/embed/jAAmI5gMlVo', type: 'video', length: 47 },
  { id:9, title: 'Learn Regular Expressions (Regex) - Crash Course for Beginners', url: 'https://www.youtube.com/embed/ZfQFUJhPqMM', type: 'video', length: 45 },
  { id:10, title: 'Web Development Tutorial - JavaScript, HTML, CSS', url: 'https://www.youtube.com/embed/jaVNP3nIAv0', type: 'video', length: 87 }
];

var feedsData = [
  { id: 1, type: 'image' },
  { id: 2, type: 'image' },
  { id: 3, type: 'video' },
  { id: 4, type: 'video' },
  { id: 5, type: 'image' },
  { id: 6, type: 'image' },
  { id: 7, type: 'image' },
  { id: 8, type: 'video' },
  { id: 9, type: 'video' },
  { id: 10, type: 'video' }
];

router.get('/users/1', function(req, res, next) {
  res.json({ 
    user: { 
      id: 1, 
      name: 'User 1', 
      posts,
      bookmarks: [1, 2, 3, 4, 5]
    },
  });
});

router.get('/users/2', function(req, res, next) {
  res.json({ 
    user: { 
      id: 1, 
      name: 'User 2',
      feeds,
      // feeds: feedsData
    },
  });
});

router.get('/feeds/:feed_id', function(req, res, next) {
  res.json({ feed: feeds.find(feed => feed.id === +req.params.feed_id) });
});

router.get('/images/:image_id', function(req, res, next) {
  res.json({ image: feeds.find(feed => feed.id === +req.params.image_id) });
});

router.get('/videos/:video_id', function(req, res, next) {
  res.json({ video: feeds.find(feed => feed.id === +req.params.video_id) });
});

router.get('/bookmarks/:bookmark_id', function(req, res, next) {
  res.json({ bookmarks: bookmarks.find(bookmark => bookmark.id === +req.params.bookmark_id) });
});

module.exports = router;
