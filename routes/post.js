const router = require('express').Router();

const mongoose = require('mongoose');


const Post = mongoose.model('Post');

router.get('/', async (req, res) => {
    try {
        const post = await Post.find({});
        res.send(post);
    } catch (error) {
        res.status(500);
    }

})

router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findOne({ _id: req.params.id })
        res.send(post);
    } catch (e) {
        res.status(500)
    }

})



router.post("/postdata", async (req, res) => {

    try {
        const post = new Post();
        post.title = req.body.title;
        post.content = req.body.content;
        await post.save();
        res.send(post);
    } catch (error) {
        res.status(500);
    }

})


router.put('/putdata/:id', async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate({

            _id: req.params.id
        }, req.body, {
            new: true,
            runValidators: true
        })
        res.send(post);
    } catch (e) {
        res.status(500)
    }

})


router.delete('/delete/:id', async (req, res) => {
    try {
        const post = await Post.findByIdAndRemove({

            _id: req.params.id
        });

        res.send(post);
    } catch (e) {
        res.status(500)
    }

})

module.exports = router;