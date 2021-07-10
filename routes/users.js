var express = require('express');
var router = express.Router();

var feeds = [
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

router.get('/:id', function(req, res, next) {
  res.json({ user: { id: 1, name: 'User 1' }, feeds });
});

module.exports = router;
