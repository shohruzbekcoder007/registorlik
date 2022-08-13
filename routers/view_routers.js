const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { cookieJwtAuth } = require('./../middleware/cookieJwtAuth')

const { User } = require('./../models/user');
const e = require('express');

router.get('/', async (req,res) => {
    return res.render('login',{

    });
})

router.post('/login', async (req,res) => {
    let user = await User.findOne({ name: req.body.name });
    if (!user)
        return res.status(400).send('Email yoki parol noto\'g\'ri');
    
    const isValidPassword = await bcrypt.compare(req.body.password, user.password);
    if (!isValidPassword)
        return res.status(400).send('Email yoki parol noto\'g\'ri');

    const token = user.generateAuthToken();
    res.cookie("token", token, {
        httpOnly: true,
        // secure: true,
        // maxAge: 1000000,
        // signed: true
    })
    // return res.send(user);
    if(user.soato == 17){
        return res.render('main',{
            soato_viloyat: 1726,
            soato_tuman: 1726269,
            admin: true,
        });
    }else{
        return res.render('main',{
            soato_viloyat: user.soato.slice(0, 4),
            soato_tuman: user.soato,
            admin: false,
        });
    }
    
})

router.get('/refresh', cookieJwtAuth, async (req,res) => {
    let = user = req.user
    // return res.send(user);
    if(user.soato == 17){
        return res.render('main',{
            soato_viloyat: 1726,
            soato_tuman: 1726269,
            admin: true,
        });
    }else{
        return res.render('main',{
            soato_viloyat: user.soato.slice(0, 4),
            soato_tuman: user.soato,
            admin: false,
        });
    }
    
})

router.post('/createreport', cookieJwtAuth, async (req,res) => {
    console.log(req.body, req.user)
    return res.send("salom");
})
// createreport



module.exports = router;