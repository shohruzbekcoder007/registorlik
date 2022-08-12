const jwt = require('jsonwebtoken')

const cookieJwtAuth = (req, res, next) => {

    const token = req.cookies.token
    try{
        const user = jwt.verify(token, "q1y1npar0l")
        req.user = user;
        next()
    }catch(ex){
        res.clearCookie("token")
        return res.render('login', {

        });
    }
}

module.exports.cookieJwtAuth = cookieJwtAuth
// 93 968 44 45 Salim aka 50 ming
// 91 968 44 45 
// 97 403 32 18 Salim aka
// 90 167 90 84 Akmal aka