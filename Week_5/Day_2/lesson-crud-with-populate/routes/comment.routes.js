const router = require('express').Router();

const User = require('../models/User.model');
const Post = require('../models/Post.model');
const Comment = require('../models/Comment.model');

// ****************************************************************************************
// POST route - create a comment of a specific post
// ****************************************************************************************

router.post('/posts/:id/comments', (req, res, next) => {
  const { id } = req.params;
  const { author, content } = req.body;

  //Control variable to save the values inside the function scope
  let user;

  User.findOne({ username: author })
    .then((userDB) => {
      user = userDB;

      if (!userDB) {
        return User.create({ username: author });
      }
      //newUser will only exist if a User was actually created
    })
    .then((newUser) => {
      Post.findById(id)
        .then((post) => {
          let newComment;

          if (newUser) {
            newComment = new Comment({ author: newUser._id, content });
          } else {
            newComment = new Comment({ author: user._id, content });
          }

          newComment.save().then((savedComment) => {
            post.comments.push(savedComment._id);

            post.save().then((updatedPost) => res.redirect(`/posts/${updatedPost._id}`));
          });
        })
        .catch((err) => next(err));
    });
});

module.exports = router;

{
  let a;
  {
    let aplus = 2;
    a = aplus;
  }
  {
    console.log(a);
  }
}
