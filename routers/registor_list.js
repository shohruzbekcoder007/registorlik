const express = require('express');
const router = express.Router();
const { cookieJwtAuth } = require('./../middleware/cookieJwtAuth')

const { RegistorList } = require('./../models/registor_list')

router.post('/addreport', cookieJwtAuth, async (req, res) => {
    try{
        let report = new RegistorList(req.body)
        let new_report = await report.save()
        return res.send(new_report);
    }catch(err){
        return res.send(err);
    }
})

router.post('/addreportmany', cookieJwtAuth, async (req, res) => {
    try{
        req.body.forEach(async elem => {
            let report = new RegistorList(elem)
            await report.save()
        })
        // let report = new RegistorList(req.body)
        // let new_report = await report.save()
        return res.send(true);
    }catch(err){
        return res.send(false);
    }
    // return res.send(req.body)
})

module.exports = router;