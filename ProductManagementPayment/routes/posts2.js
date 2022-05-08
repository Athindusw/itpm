const express = require('express');
const Posts2 = require('../models/posts2');

const router = express.Router();

//save posts

router.post('/post2/save', (req, res) => {

    let newPost = new Posts2(req.body);

    newPost.save((err) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: "Posts saved successfully"
        });
    });
});

//get posts
router.get('/posts2', (req, res) => {
    Posts2.find().exec((err, posts2) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: true,
            existingPosts: posts2
        });
    });
});


//get a specific post
router.get("/post2/:id", (req, res) => {

    let postId = req.params.id;

    Posts2.findById(postId, (err, post2) => {
        if (err) {
            return res.status(400).json({ success: false, err });
        }

        return res.status(200).json({
            success: true,
            post2
        });
    });
});

//update posts
router.put('/post2/update/:id', (req, res) => {
    Posts2.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body
        },
        (err, post2) => {
            if (err) {
                return res.status(400).json({ error: err });
            }
            return res.status(200).json({
                success: "Updated Successfully"
            });
        }
    );
});

//delete post
router.delete('/post2/delete/:id', (req, res) => {
    Posts2.findOneAndRemove(req.params.id).exec((err, deletePost) => {
        if (err) return res.status(400).json({
            message: "Delete unsuccessful", err
        });
        return res.json({
            message: "Delete Successfull", deletePost
        });
    });
});

module.exports = router;