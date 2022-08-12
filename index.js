const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require("cookie-parser")
const view_routers = require('./routers/view_routers')
const qap = require('./routers/qap')
const registor_list = require('./routers/registor_list')

const app = express();

const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser('MY SECRET'));
app.use(cors({
  origin: '*',
  credentials: true,
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

app.use(express.static('./static'));
app.set("view engine", "pug");

mongoose.connect('mongodb://localhost:27017/registorlik', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDBga ulanish hosil qilindi...');
  })
  .catch((err) => {
    console.error('MongoDBga ulanish vaqtida xato ro\'y berdi...', err);
  });

// views
app.use('/', view_routers);
app.use('/qap', qap);
app.use('/report', registor_list)

// require('./bazaga_loginlar')
// require('./qap')

app.listen(port, ()=> {
  console.log(`Application is up and running under localhost:${port}`)
})