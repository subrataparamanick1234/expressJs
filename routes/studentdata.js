const router = require('express').Router();

const mongoose = require('mongoose');


const Studentdata = mongoose.model('studentdata');

router.get('/', async (req, res) => {
    try {
        const studentdata = await Studentdata.find({});
        res.send(studentdata);
    } catch (error) {
        res.status(500);
    }

})

router.get('/:stuid', async (req, res) => {
    try {
        const studentdata = await Studentdata.findOne({ _id: req.params.stuid })
        res.send(studentdata);
    } catch (e) {
        res.status(500)
    }

})



router.post("/postdata", async (req, res) => {

    try {
        const studentdata = new Studentdata();
        studentdata.name = req.body.name;
        studentdata.lastName = req.body.lastName;
        studentdata.email = req.body.email;
        studentdata.phone = req.body.phone;
        studentdata.addressInfo = req.body.addressInfo;
        studentdata.comments = req.body.comments;
        await studentdata.save();
        res.send(studentdata);
    } catch (error) {
        res.status(500);
    }

})

router.put('/putdata/:stuid', async (req, res) => {
    try {
        const studentdata = await Studentdata.findByIdAndUpdate({

            _id: req.params.stuid
        }, req.body, {
            new: true,
            runValidators: true
        })
        res.send(studentdata);
    } catch (e) {
        res.status(500)
    }

})


router.delete('/delete/:stuid', async (req, res) => {
    try {
        const studentdata = await Studentdata.findByIdAndRemove({

            _id: req.params.stuid
        });

        res.send(studentdata);
    } catch (e) {
        res.status(500)
    }

})

module.exports = router;