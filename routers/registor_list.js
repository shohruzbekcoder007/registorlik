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

module.exports = router;