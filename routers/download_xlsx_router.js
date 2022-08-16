const express = require('express');
const router = express.Router();
const mongoXlsx = require('mongo-xlsx');
const path = require('path');
const mime = require('mime');
const fs = require('fs');

const { RegistorList } = require('./../models/registor_list')


router.get('/all', async(req, res) => {
    try{
        let data2 = await RegistorList.find()
 
        var model = mongoXlsx.buildDynamicModel(data2);
        var options =  {
            save: true,
            sheetName: [],
            fileName: "Natijalar" + "-" + new Date().getTime() + ".xlsx",
            path: "./static/xlsx",
            defaultSheetName: "Ro'yxatga olish natijalari"
          }
        /* Generate Excel */
        mongoXlsx.mongoData2Xlsx(data2, model, options, function(err, data2) {
            console.log('File saved at:', data2.fullPath); 
            //////////////////////////////////////////////////
            var filename = path.basename(data2.fullPath);
            // var mimetype = mime.lookup(data2.fullPath);

            res.setHeader('Content-disposition', 'attachment; filename=' + filename);
            // res.setHeader('Content-type', mimetype);

            var filestream = fs.createReadStream(data2.fullPath);
            filestream.pipe(res);
            //////////////////////////////////////////////////
        });
    } catch(err){
        res.status(404).send("Tizimda xatolik")
    }
});

router.post('/tuman', async(req, res) => {

    let selector = {}
    console.log(req.body.mfy, req.body.punkt, req.body.district, req.body.province)
    if(req.body.mfy){
        selector.col0000=req.body.mfy
    }
    if(req.body.punkt){
        selector.col000=req.body.punkt
    }
    if(req.body.district){
        selector.col00=req.body.district
    }
    if(req.body.province){
        selector.col0=req.body.province
    }
    // return res.send(selector)
    let soato = selector.col0000 || selector.col000 || selector.col00 || selector.col0

    try{
        let data2 = await RegistorList.find({soato:{$regex: soato}})
 
        var model = mongoXlsx.buildDynamicModel(data2);
        var options =  {
            save: true,
            sheetName: [],
            fileName: "Natijalar" + "-" + new Date().getTime() + ".xlsx",
            path: "./static/xlsx",
            defaultSheetName: "Ro'yxatga olish natijalari"
          }
        /* Generate Excel */
        mongoXlsx.mongoData2Xlsx(data2, model, options, function(err, data2) {
            console.log('File saved at:', data2.fullPath); 
            //////////////////////////////////////////////////
            var filename = path.basename(data2.fullPath);
            // var mimetype = mime.lookup(data2.fullPath);

            res.setHeader('Content-disposition', 'attachment; filename=' + filename);
            // res.setHeader('Content-type', mimetype);

            var filestream = fs.createReadStream(data2.fullPath);
            filestream.pipe(res);
            //////////////////////////////////////////////////
        });
    } catch(err){
        res.status(404).send("Tizimda xatolik")
    }
});

module.exports = router;