const router = require('express').Router();

const User = require('../models/User.model');
const Post = require('../models/Post.model');

// ****************************************************************************************
// GET route to display the form to create a new post
// ****************************************************************************************

// localhost:3000/post-create
router.get('/post-create', (req, res) => {
  User.find()
    .then((dbUsers) => {
      res.render('posts/create', { dbUsers });
    })
    .catch((err) => console.log(`Err while displaying post input page: ${err}`));
});

// ****************************************************************************************
// POST route to submit the form to create a post
// ****************************************************************************************

// <form action="/post-create" method="POST">

router.post('/post-create', (req, res, next) => {
  const { title, content, author } = req.body;

  Post.create({ title, content, author })
    .then((createdPost) => {
      return User.findByIdAndUpdate(author, { $push: { posts: createdPost._id } });
    })
    .then(() => res.redirect('/posts'))
    .catch((err) => next(err));
});

// ****************************************************************************************
// GET route to display all the posts
// ****************************************************************************************

router.get('/posts', (req, res, next) => {
  Post.find()
    .populate('author')
    .then((posts) => {
      console.log(posts);
      res.render('posts/list', { posts });
    })
    .catch((err) => next(err));
});

// ****************************************************************************************
// GET route for displaying the post details page
// shows how to deep populate (populate the populated field)
// ****************************************************************************************

router.get('/posts/:id', (req, res, next) => {
  const { id } = req.params;

  Post.findById(id)
    .populate('author comments')
    //At this stage we already have the post with the user info and comments
    //This next one is to populate the cooments about the posts
    .populate({
      path: 'comments',
      populate: {
        path: 'author',
        model: 'User',
      },
    })
    .then((post) => {
      console.log(post);
      res.render('posts/details', post);
    })
    .catch((err) => next(err));
});

module.exports = router;
