const express = require('express');
const router = express.Router();
const mongoXlsx = require('mongo-xlsx');
const path = require('path');
const mime = require('mime');
const fs = require('fs');

const { RegistorList } = require('./../models/registor_list')


var modelOrg = [
    { displayName: 'soato', access: 'soato', type: 'string' },
    { displayName: 'Регистраторлик участкаси рақами', access: 'regnubmer', type: 'number' },
    { displayName: 'Ҳудуд', access: 'col0', type: 'string' },
    { displayName: 'Шаҳар ва туман', access: 'col00', type: 'string' },
    { displayName: 'Аҳоли пункти', access: 'col000', type: 'string' },
    { displayName: 'Маҳалла', access: 'col0000', type: 'string' },
    { displayName: 'Кўча', access: 'street', type: 'string' },
    { displayName: 'Т/Р', access: 'colA', type: 'number' },
    { displayName: 'Манзили', access: 'col1', type: 'string' },
    { displayName: 'Кўп қаватли уй ёки ҳовли рақами', access: 'col2', type: 'string' },
    { displayName: 'Хонадон ёки нoтурар жой сони (бирлик)', access: 'col3', type: 'number' },
    { displayName: 'Жами яшoвчилар сони (киши)', access: 'col4', type: 'number' },
    { displayName: 'Йирик шоxли қорамоллар сони (бош', access: 'col5', type: 'number' },
    { displayName: 'Шундан: сигирлар сони (бош)', access: 'col6', type: 'number' },
    { displayName: 'Қўй ва эчкилар сони (бош)', access: 'col7', type: 'number' },
    { displayName: 'Отлар сони (бош)', access: 'col8', type: 'number' },
    { displayName: 'Жами паррандалар сони (бош), ', access: 'col9', type: 'number' },
    { displayName: 'Изоҳ', access: 'col10', type: 'string' },
    { displayName: 'Сана', access: 'dateTime', type: 'string' },
]


router.get('/all', async (req, res) => {
    // try {
    //     let data2 = await RegistorList.find()

    //     var model = mongoXlsx.buildDynamicModel(data2);
        
    //     var options = {
    //         save: true,
    //         sheetName: [],
    //         fileName: "Natijalar" + "-" + new Date().getTime() + ".xlsx",
    //         // path: "./dataXLSX",
    //         defaultSheetName: "Ro'yxatga olish natijalari"
    //     }
    //     /* Generate Excel */
    //     mongoXlsx.mongoData2Xlsx(data2, modelOrg, options, function (err, data2) {
    //         console.log('File saved at:', data2.fullPath);
    //         //////////////////////////////////////////////////
    //         var filename = path.basename(data2.fullPath);
    //         // var mimetype = mime.lookup(data2.fullPath);

    //         res.setHeader('Content-disposition', 'attachment; filename=' + filename);
    //         // res.setHeader('Content-type', mimetype);

    //         var filestream = fs.createReadStream(data2.fullPath);
    //         filestream.pipe(res);
    //         //////////////////////////////////////////////////
    //     });
    // } catch (err) {
    //     res.status(404).send("Tizimda xatolik")
    // }
});

router.post('/tuman', async (req, res) => {

    let selector = {}
    if (req.body.mfy) {
        selector.col0000 = req.body.mfy
    }
    if (req.body.punkt) {
        selector.col000 = req.body.punkt
    }
    if (req.body.district) {
        selector.col00 = req.body.district
    }
    if (req.body.province) {
        selector.col0 = req.body.province
    }
    // return res.send(selector)
    let soato = selector.col0000 || selector.col000 || selector.col00 || selector.col0

    try {
        let data2 = await RegistorList.find({ soato: { $regex: soato } })

        var model = mongoXlsx.buildDynamicModel(data2);
        var options = {
            save: true,
            sheetName: [],
            fileName: "Natijalar" + "-" + new Date().getTime() + ".xlsx",
            path: "./dataXLSX",
            defaultSheetName: "Ro'yxatga olish natijalari"
        }
        /* Generate Excel */
        mongoXlsx.mongoData2Xlsx(data2, modelOrg, options, function (err, data2) {
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
    } catch (err) {
        res.status(404).send("Tizimda xatolik")
    }
});

module.exports = router;