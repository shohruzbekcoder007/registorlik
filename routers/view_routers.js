const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const bcrypt = require('bcryptjs')
const { cookieJwtAuth } = require('./../middleware/cookieJwtAuth')
const {RegistorList} = require('./../models/registor_list');

const { User } = require('./../models/user');

router.get('/', cookieJwtAuth, async (req, res, next) => {
    let = user = req.user
    if (user.soato == 17) {
        return res.render('adminworker', {
            soato_viloyat: 1726,
            admin: true,
        });
    } else {
        const countData = await RegistorList.find({countSoato: user.soato}) || 0;
        return res.render('main', {
            soato_viloyat: user.soato.slice(0, 4),
            soato_tuman: user.soato,
            admin: false,
            count: Array.isArray(countData) && countData.length,
        });
    }
})

router.post('/login', async (req, res) => {
    let user = await User.findOne({ name: req.body.name });
    if (!user)
        return res.render('login', {
            message: 'Email yoki parol noto\'g\'ri'
        })

    const isValidPassword = await bcrypt.compare(req.body.password, user.password);
    if (!isValidPassword)
        return res.render('login', {
            message: 'Email yoki parol noto\'g\'ri'
        })

    const token = user.generateAuthToken();
    res.cookie("token", token, {
        httpOnly: true,
        // secure: true,
        // maxAge: 1000000,
        // signed: true
    })
    // return res.send(user);
    if (user.soato == 17) {
        return res.render('adminworker', {
            soato_viloyat: 1726,
            // soato_tuman: 1726269,
            admin: true,
        });
    } else {
        const countData = await RegistorList.find({countSoato: user.soato}) || 0;
        return res.render('main', {
            soato_viloyat: user.soato.slice(0, 4),
            soato_tuman: user.soato,
            admin: false,
            count: Array.isArray(countData) && countData.length
        });
    }

})

router.get('/refresh', cookieJwtAuth, async (req, res) => {
    let = user = req.user
    // return res.send(user);
    if (user.soato == 17) {
        return res.render('adminworker', {
            soato_viloyat: 1726,
            // soato_tuman: 1726269,
            admin: true,
        });
    } else {
        const countData = await RegistorList.find({countSoato: user.soato}) || 0;
        return res.render('main', {
            soato_viloyat: user.soato.slice(0, 4),
            soato_tuman: user.soato,
            admin: false,
            count: Array.isArray(countData) && countData.length,
        });
    }

})

router.get('/exit', (req, res) => {
    res.clearCookie("token")
    return res.render('login', {

    });
})

router.post('/createreport', cookieJwtAuth, async (req, res) => {
    return res.send("salom");
})
// createreport

router.get('/tuman', cookieJwtAuth, async (req, res) => {
    let = user = req.user
    if (user.soato == 17) {
        return res.render('adminworker', {
            soato_viloyat: 1726,
            // soato_tuman: 1726269,
            admin: true,
        });
    }
})


module.exports = router;