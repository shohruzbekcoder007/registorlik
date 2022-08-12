const express = require('express');
const router = express.Router();
const { cookieJwtAuth } = require('./../middleware/cookieJwtAuth')

const { Qap } = require('./../models/qap')

router.get('/qaplist', cookieJwtAuth, async (req,res) => {
    console.log(req.query.tuman)
    let qaps = await Qap.find({tuman: req.query.tuman})
    return res.send(qaps);
})
// createreport



module.exports = router;