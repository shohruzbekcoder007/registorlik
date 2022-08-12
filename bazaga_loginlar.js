// const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const { User } = require('./models/user')

// mongoose.connect('mongodb://localhost:27017/registorlik', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('MongoDBga ulanish hosil qilindi...');
//   })
//   .catch((err) => {
//     console.error('MongoDBga ulanish vaqtida xato ro\'y berdi...', err);
//   });

let tumanlar = [
        {
            "name": "Nukus shahri",
            "soato": "1735401"
        },
        {
            "name": "Amudaryo tumani",
            "soato": "1735204"
        },
        {
            "name": "Beruniy tumani",
            "soato": "1735207"
        },
        {
            "name": "Bo'zatov tumani",
            "soato": "1735209"
        },
        {
            "name": "Qorao'zak tumani",
            "soato": "1735211"
        },
        {
            "name": "Kegeyli tumani",
            "soato": "1735212"
        },
        {
            "name": "Qo'ng'irot tumani",
            "soato": "1735215"
        },
        {
            "name": "Qanliko'l tumani",
            "soato": "1735218"
        },
        {
            "name": "Mo'ynoq tumani",
            "soato": "1735222"
        },
        {
            "name": "Nukus tumani",
            "soato": "1735225"
        },
        {
            "name": "Taxiatosh tumani",
            "soato": "1735228"
        },
        {
            "name": "Taxtako'pir tumani",
            "soato": "1735230"
        },
        {
            "name": "To'rtko'l tumani",
            "soato": "1735233"
        },
        {
            "name": "Xo'jayli tumani",
            "soato": "1735236"
        },
        {
            "name": "Chimboy tumani",
            "soato": "1735240"
        },
        {
            "name": "Shumanay tumani",
            "soato": "1735243"
        },
        {
            "name": "Ellikkala tumani",
            "soato": "1735250"
        },
        {
            "name": "Andijon shahri",
            "soato": "1703401"
        },
        {
            "name": "Xonobod shahri",
            "soato": "1703408"
        },
        {
            "name": "Oltinko'l tumani",
            "soato": "1703202"
        },
        {
            "name": "Andijon tumani",
            "soato": "1703203"
        },
        {
            "name": "Baliqchi tumani",
            "soato": "1703206"
        },
        {
            "name": "Bo'z tumani",
            "soato": "1703209"
        },
        {
            "name": "Buloqboshi tumani",
            "soato": "1703210"
        },
        {
            "name": "Jalаquduq tumani",
            "soato": "1703211"
        },
        {
            "name": "Izboskan tumani",
            "soato": "1703214"
        },
        {
            "name": "Ulug'nor tumani",
            "soato": "1703217"
        },
        {
            "name": "Qo'rg'ontepa tumani",
            "soato": "1703220"
        },
        {
            "name": "Asaka tumani",
            "soato": "1703224"
        },
        {
            "name": "Marxamat tumani",
            "soato": "1703227"
        },
        {
            "name": "Shaxrixon tumani",
            "soato": "1703230"
        },
        {
            "name": "Paxtaobod tumani",
            "soato": "1703232"
        },
        {
            "name": "Xo'jaobod tumani",
            "soato": "1703236"
        },
        {
            "name": "Buxoro shahri",
            "soato": "1706401"
        },
        {
            "name": "Kogon shahri",
            "soato": "1706403"
        },
        {
            "name": "Olot tumani",
            "soato": "1706204"
        },
        {
            "name": "Buxoro tumani",
            "soato": "1706207"
        },
        {
            "name": "Vobkent tumani",
            "soato": "1706212"
        },
        {
            "name": "G'ijduvon tumani",
            "soato": "1706215"
        },
        {
            "name": "Kogon tumani",
            "soato": "1706219"
        },
        {
            "name": "Qorako'l tumani",
            "soato": "1706230"
        },
        {
            "name": "Qorovulbozor tumani",
            "soato": "1706232"
        },
        {
            "name": "Peshku tumani",
            "soato": "1706240"
        },
        {
            "name": "Romitan tumani",
            "soato": "1706242"
        },
        {
            "name": "Jondor tumani",
            "soato": "1706246"
        },
        {
            "name": "Shofirkon tumani",
            "soato": "1706258"
        },
        {
            "name": "Jizzax shahri",
            "soato": "1708401"
        },
        {
            "name": "Arnasoy tumani",
            "soato": "1708201"
        },
        {
            "name": "Baxmal tumani",
            "soato": "1708204"
        },
        {
            "name": "G'allaorol tumani",
            "soato": "1708209"
        },
        {
            "name": "Sharof Rashidov tumani",
            "soato": "1708212"
        },
        {
            "name": "Do'stlik tumani",
            "soato": "1708215"
        },
        {
            "name": "Zomin tumani",
            "soato": "1708218"
        },
        {
            "name": "Zarbdor tumani",
            "soato": "1708220"
        },
        {
            "name": "Mirzacho'l tumani",
            "soato": "1708223"
        },
        {
            "name": "Zafarobod tumani",
            "soato": "1708225"
        },
        {
            "name": "Paxtakor tumani",
            "soato": "1708228"
        },
        {
            "name": "Forish tumani",
            "soato": "1708235"
        },
        {
            "name": "Yangiobod tumani",
            "soato": "1708237"
        },
        {
            "name": "Qarshi shahri",
            "soato": "1710401"
        },
        {
            "name": "Shahrisabz shahri",
            "soato": "1710405"
        },
        {
            "name": "G'uzor tumani",
            "soato": "1710207"
        },
        {
            "name": "Dehqonobod tumani",
            "soato": "1710212"
        },
        {
            "name": "Qamashi tumani",
            "soato": "1710220"
        },
        {
            "name": "Qarshi tumani",
            "soato": "1710224"
        },
        {
            "name": "Koson tumani",
            "soato": "1710229"
        },
        {
            "name": "Kitob tumani",
            "soato": "1710232"
        },
        {
            "name": "Mirishkor tumani",
            "soato": "1710233"
        },
        {
            "name": "Muborak tumani",
            "soato": "1710234"
        },
        {
            "name": "Nishon tumani",
            "soato": "1710235"
        },
        {
            "name": "Kasbi tumani",
            "soato": "1710237"
        },
        {
            "name": "Ko'kdala tumani",
            "soato": "1710240"
        },
        {
            "name": "Chiroqchi tumani",
            "soato": "1710242"
        },
        {
            "name": "Shahrisabz tumani",
            "soato": "1710245"
        },
        {
            "name": "Yakkabog' tumani",
            "soato": "1710250"
        },
        {
            "name": "Navoiy shahri",
            "soato": "1712401"
        },
        {
            "name": "Zarafshon shahri",
            "soato": "1712408"
        },
        {
            "name": "G'ozg'on shahri",
            "soato": "1712412"
        },
        {
            "name": "Konimex tumani",
            "soato": "1712211"
        },
        {
            "name": "Qiziltepa tumani",
            "soato": "1712216"
        },
        {
            "name": "Navbahor tumani",
            "soato": "1712230"
        },
        {
            "name": "Karmana tumani",
            "soato": "1712234"
        },
        {
            "name": "Nurota tumani",
            "soato": "1712238"
        },
        {
            "name": "Tomdi tumani",
            "soato": "1712244"
        },
        {
            "name": "Uchquduq tumani",
            "soato": "1712248"
        },
        {
            "name": "Xatirchi tumani",
            "soato": "1712251"
        },
        {
            "name": "Namangan shahri",
            "soato": "1714401"
        },
        {
            "name": "Davlatobod",
            "soato": "1714401365"
        },
        {
            "name": "Yangi Namangan",
            "soato": "1714401367"
        },
        {
            "name": "Mingbuloq tumani",
            "soato": "1714204"
        },
        {
            "name": "Kosonsoy tumani",
            "soato": "1714207"
        },
        {
            "name": "Namangan tumani",
            "soato": "1714212"
        },
        {
            "name": "Norin tumani",
            "soato": "1714216"
        },
        {
            "name": "Pop tumani",
            "soato": "1714219"
        },
        {
            "name": "To'raqo'rg'on tumani",
            "soato": "1714224"
        },
        {
            "name": "Uychi tumani",
            "soato": "1714229"
        },
        {
            "name": "Uchqo'rg'on tumani",
            "soato": "1714234"
        },
        {
            "name": "Chortoq tumani",
            "soato": "1714236"
        },
        {
            "name": "Chust tumani",
            "soato": "1714237"
        },
        {
            "name": "Yangiqo'rg'on tumani",
            "soato": "1714242"
        },
        {
            "name": "Samarqand shahri",
            "soato": "1718401"
        },
        {
            "name": "Kattaqo'rg'on shahri",
            "soato": "1718406"
        },
        {
            "name": "Oqdaryo tumani",
            "soato": "1718203"
        },
        {
            "name": "Bulung'ur tumani",
            "soato": "1718206"
        },
        {
            "name": "Jomboy tumani",
            "soato": "1718209"
        },
        {
            "name": "Ishtixon tumani",
            "soato": "1718212"
        },
        {
            "name": "Kattaqo'rg'on tumani",
            "soato": "1718215"
        },
        {
            "name": "Qo'shrabot tumani",
            "soato": "1718216"
        },
        {
            "name": "Narpay tumani",
            "soato": "1718218"
        },
        {
            "name": "Payariq tumani",
            "soato": "1718224"
        },
        {
            "name": "Pastdarg'om tumani",
            "soato": "1718227"
        },
        {
            "name": "Paxtachi tumani",
            "soato": "1718230"
        },
        {
            "name": "Samarqand tumani",
            "soato": "1718233"
        },
        {
            "name": "Nurobod tumani",
            "soato": "1718235"
        },
        {
            "name": "Urgut tumani",
            "soato": "1718236"
        },
        {
            "name": "Tayloq tumani",
            "soato": "1718238"
        },
        {
            "name": "Termiz shahri",
            "soato": "1722401"
        },
        {
            "name": "Oltinsoy tumani",
            "soato": "1722201"
        },
        {
            "name": "Angor tumani",
            "soato": "1722202"
        },
        {
            "name": "Bandixon tumani",
            "soato": "1722203"
        },
        {
            "name": "Boysun tumani",
            "soato": "1722204"
        },
        {
            "name": "Muzrabot tumani",
            "soato": "1722207"
        },
        {
            "name": "Denov tumani",
            "soato": "1722210"
        },
        {
            "name": "Jarqo'rg'on tumani",
            "soato": "1722212"
        },
        {
            "name": "Qumqo'rg'on tumani",
            "soato": "1722214"
        },
        {
            "name": "Qiziriq tumani",
            "soato": "1722215"
        },
        {
            "name": "Sariosiyo tumani",
            "soato": "1722217"
        },
        {
            "name": "Termiz tumani",
            "soato": "1722220"
        },
        {
            "name": "Uzun tumani",
            "soato": "1722221"
        },
        {
            "name": "Sherobod tumani",
            "soato": "1722223"
        },
        {
            "name": "Sho'rchi tumani",
            "soato": "1722226"
        },
        {
            "name": "Guliston shahri",
            "soato": "1724401"
        },
        {
            "name": "Shirin shahri",
            "soato": "1724410"
        },
        {
            "name": "Yangiyer shahri",
            "soato": "1724413"
        },
        {
            "name": "Oqoltin tumani",
            "soato": "1724206"
        },
        {
            "name": "Boyovut tumani",
            "soato": "1724212"
        },
        {
            "name": "Sayxunobod tumani",
            "soato": "1724216"
        },
        {
            "name": "Guliston tumani",
            "soato": "1724220"
        },
        {
            "name": "Sardoba tumani",
            "soato": "1724226"
        },
        {
            "name": "Mirzaobod tumani",
            "soato": "1724228"
        },
        {
            "name": "Sirdaryo tumani",
            "soato": "1724231"
        },
        {
            "name": "Xavast tumani",
            "soato": "1724235"
        },
        {
            "name": "Nurafshon shahri",
            "soato": "1727401"
        },
        {
            "name": "Olmaliq shahri",
            "soato": "1727404"
        },
        {
            "name": "Angren shahri",
            "soato": "1727407"
        },
        {
            "name": "Bekobod shahri",
            "soato": "1727413"
        },
        {
            "name": "Chirchiq shahri",
            "soato": "1727419"
        },
        {
            "name": "Ohangaron shahri",
            "soato": "1727415"
        },
        {
            "name": " Yangiyo'l sh.",
            "soato": "1727424"
        },
        {
            "name": "Oqqo'rg'on tumani",
            "soato": "1727206"
        },
        {
            "name": "Ohangaron tumani",
            "soato": "1727212"
        },
        {
            "name": "Bekobod tumani",
            "soato": "1727220"
        },
        {
            "name": "Bo'stonliq tumani",
            "soato": "1727224"
        },
        {
            "name": "Bo'ka tumani",
            "soato": "1727228"
        },
        {
            "name": "Qiyichirchiq tumani",
            "soato": "1727233"
        },
        {
            "name": "Zangiota tumani",
            "soato": "1727237"
        },
        {
            "name": "Yuqorichirchiq tumani",
            "soato": "1727239"
        },
        {
            "name": "Qibray tumani",
            "soato": "1727248"
        },
        {
            "name": "Parkent tumani",
            "soato": "1727249"
        },
        {
            "name": "Pskent tumani",
            "soato": "1727250"
        },
        {
            "name": "O'rtachirchiq tumani",
            "soato": "1727253"
        },
        {
            "name": "Chinoz tumani",
            "soato": "1727256"
        },
        {
            "name": "Yangiyo'l tumani",
            "soato": "1727259"
        },
        {
            "name": " Toshkent tumani",
            "soato": "1727265"
        },
        {
            "name": "Farg'ona shahri",
            "soato": "1730401"
        },
        {
            "name": "Qo'qon shahri",
            "soato": "1730405"
        },
        {
            "name": "Quvasoy shahri",
            "soato": "1730408"
        },
        {
            "name": "Marg'ilon shahri",
            "soato": "1730412"
        },
        {
            "name": "Oltiariq tumani",
            "soato": "1730203"
        },
        {
            "name": "Qo'shtepa tumani",
            "soato": "1730206"
        },
        {
            "name": "Bog'dod tumani",
            "soato": "1730209"
        },
        {
            "name": "Buvayda tumani",
            "soato": "1730212"
        },
        {
            "name": "Beshariq tumani",
            "soato": "1730215"
        },
        {
            "name": "Quva tumani",
            "soato": "1730218"
        },
        {
            "name": "Uchko'prik tumani",
            "soato": "1730221"
        },
        {
            "name": "Rishton tumani",
            "soato": "1730224"
        },
        {
            "name": "So'x tumani",
            "soato": "1730226"
        },
        {
            "name": "Toshloq tumani",
            "soato": "1730227"
        },
        {
            "name": "O'zbekiston tumani",
            "soato": "1730230"
        },
        {
            "name": "Farg'ona tumani",
            "soato": "1730233"
        },
        {
            "name": "Dang'ara tumani",
            "soato": "1730236"
        },
        {
            "name": "Furqat tumani",
            "soato": "1730238"
        },
        {
            "name": "Yozyovon tumani",
            "soato": "1730242"
        },
        {
            "name": "Urganch shahri",
            "soato": "1733401"
        },
        {
            "name": "Xiva shahri",
            "soato": "1733406"
        },
        {
            "name": "Bog'ot tumani",
            "soato": "1733204"
        },
        {
            "name": "Gurlan tumani",
            "soato": "1733208"
        },
        {
            "name": "Qo'shko'pir tumani",
            "soato": "1733212"
        },
        {
            "name": "Urganch tumani",
            "soato": "1733217"
        },
        {
            "name": "Xazorasp tumani",
            "soato": "1733220"
        },
        {
            "name": "Tuproqqala",
            "soato": "1733221"
        },
        {
            "name": "Xonqa tumani",
            "soato": "1733223"
        },
        {
            "name": "Xiva tumani",
            "soato": "1733226"
        },
        {
            "name": "Shovot tumani",
            "soato": "1733230"
        },
        {
            "name": "Yangiariq tumani",
            "soato": "1733233"
        },
        {
            "name": "Yangibozor tumani",
            "soato": "1733236"
        },
        {
            "name": "Uchtepa tumani",
            "soato": "1726262"
        },
        {
            "name": "Bektemir tumani",
            "soato": "1726264"
        },
        {
            "name": "Yunusobod tumani",
            "soato": "1726266"
        },
        {
            "name": "Mirzo Ulug'bek tumani",
            "soato": "1726269"
        },
        {
            "name": "Mirobod tumani",
            "soato": "1726273"
        },
        {
            "name": "Shayxontoxur tumani",
            "soato": "1726277"
        },
        {
            "name": "Olmazor tumani",
            "soato": "1726280"
        },
        {
            "name": "Sirg'ali tumani",
            "soato": "1726283"
        },
        {
            "name": "Yakkasaroy tumani",
            "soato": "1726287"
        },
        {
            "name": "Yashnobod tumani",
            "soato": "1726290"
        },
        {
            "name": "Yangihayot tumani",
            "soato": "1726292"
        },
        {
            "name": "Chilonzor tumani",
            "soato": "1726294"
        }
    ]

let writetodb1 = async () => {
    tumanlar.forEach(async elem => {
        const salt = await bcrypt.genSalt();
        password = await bcrypt.hash(`${elem.soato}bir`, salt);
        const user = new User({
            name: elem.name,
            soato: elem.soato,
            password: password
        })
        let new_user = await user.save()
        console.log(new_user)
    })
}

let writetodb2 = async () => {
    tumanlar.forEach(async elem => {
        const salt = await bcrypt.genSalt();
        password = await bcrypt.hash(`${elem.soato}ikki`, salt);
        const user = new User({
            name: elem.name,
            soato: elem.soato,
            password: password
        })
        let new_user = await user.save()
        console.log(new_user)
    })
}

// writetodb1()
writetodb2()