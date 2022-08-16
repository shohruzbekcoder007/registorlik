// const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const { User } = require('./models/user')
const Data = require('./dataLogin/loginParol')

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
    },
    {
        "name": "Qo'mita",
        "soato": "17"
    }
]

const Data = [
    { "name": '170320201', "soato": 'a2mpll' },
    { "name": '170320202', "soato": 'kf471j' },
    { "name": '170320301', "soato": 'f8uann' },
    { "name": '170320302', "soato": '0xoo0w' },
    { "name": '170320601', "soato": 'ulz2s1' },
    { "name": '170320602', "soato": 'p6ount' },
    { "name": '170320901', "soato": '7xzupi' },
    { "name": '170320902', "soato": '1f99gl' },
    { "name": '170321001', "soato": 'qg13f0' },
    { "name": '170321002', "soato": 'knjgvb' },
    { "name": '170321101', "soato": '8017l8' },
    { "name": '170321102', "soato": 'kwcrqo' },
    { "name": '170321401', "soato": 'hr0egy' },
    { "name": '170321402', "soato": 'z2gze8' },
    { "name": '170321701', "soato": 'lwlvb4' },
    { "name": '170321702', "soato": 'cz2kij' },
    { "name": '170322001', "soato": '9k2sut' },
    { "name": '170322002', "soato": 'vgsjc0' },
    { "name": '170322401', "soato": 'lzzngt' },
    { "name": '170322402', "soato": 'k9p3af' },
    { "name": '170322701', "soato": 'flvsuf' },
    { "name": '170322702', "soato": 'jj7iav' },
    { "name": '170323001', "soato": 'q67zop' },
    { "name": '170323002', "soato": '63jbjy' },
    { "name": '170323201', "soato": 'ophmkw' },
    { "name": '170323202', "soato": 'aridrk' },
    { "name": '170323601', "soato": 'iu6gsi' },
    { "name": '170323602', "soato": '51d4px' },
    { "name": '170340101', "soato": '4w5si9' },
    { "name": '170340102', "soato": 'usc12o' },
    { "name": '170340801', "soato": 'ektxxu' },
    { "name": '170340802', "soato": 'z0qaaw' },
    { "name": '170620401', "soato": 'pwew7g' },
    { "name": '170620402', "soato": '93vjmv' },
    { "name": '170620701', "soato": 'nb8jyr' },
    { "name": '170620702', "soato": 'b90f68' },
    { "name": '170621201', "soato": 'saoeyv' },
    { "name": '170621202', "soato": 'juft8u' },
    { "name": '170621501', "soato": 'zvt4of' },
    { "name": '170621502', "soato": '433cvc' },
    { "name": '170621901', "soato": 'cvt6mw' },
    { "name": '170621902', "soato": 'jru65m' },
    { "name": '170623001', "soato": 'usfu07' },
    { "name": '170623002', "soato": 'f5liud' },
    { "name": '170623201', "soato": '4is6ge' },
    { "name": '170623202', "soato": 'e5o3g3' },
    { "name": '170624001', "soato": 'l67j3e' },
    { "name": '170624002', "soato": 'om3sd8' },
    { "name": '170624201', "soato": '9osg1y' },
    { "name": '170624202', "soato": 'ghfpbs' },
    { "name": '170624601', "soato": 'fpgth7' },
    { "name": '170624602', "soato": 'nwptps' },
    { "name": '170625801', "soato": 'zwq2wc' },
    { "name": '170625802', "soato": 'avazoo' },
    { "name": '170640101', "soato": 'vhel3b' },
    { "name": '170640102', "soato": 'llh8kl' },
    { "name": '170640301', "soato": 'nl92ly' },
    { "name": '170640302', "soato": '8fnbnq' },
    { "name": '170820101', "soato": 'fuf8xh' },
    { "name": '170820102', "soato": 'mcyrqf' },
    { "name": '170820401', "soato": 'bjf40m' },
    { "name": '170820402', "soato": 'pp9riv' },
    { "name": '170820901', "soato": '4eob7v' },
    { "name": '170820902', "soato": 'rti0qw' },
    { "name": '170821201', "soato": 'gyxzqk' },
    { "name": '170821202', "soato": '1fijp9' },
    { "name": '170821501', "soato": '2swo39' },
    { "name": '170821502', "soato": '6szm54' },
    { "name": '170821801', "soato": 'cgk3dw' },
    { "name": '170821802', "soato": 'myrcqu' },
    { "name": '170822001', "soato": 'cv801a' },
    { "name": '170822002', "soato": 'jqc71e' },
    { "name": '170822301', "soato": '85nvga' },
    { "name": '170822302', "soato": 'k3yd3j' },
    { "name": '170822501', "soato": '9sk823' },
    { "name": '170822502', "soato": 'c6shjq' },
    { "name": '170822801', "soato": 'giagsp' },
    { "name": '170822802', "soato": 'jdn5qf' },
    { "name": '170823501', "soato": 'g3ukw3' },
    { "name": '170823502', "soato": 'r84t8u' },
    { "name": '170823701', "soato": 'gnrf2n' },
    { "name": '170823702', "soato": 'lip453' },
    { "name": '170840101', "soato": '8z9imp' },
    { "name": '170840102', "soato": 'vmqy5c' },
    { "name": '171020701', "soato": 'a7ng0x' },
    { "name": '171020702', "soato": 'vic845' },
    { "name": '171021201', "soato": '6n0dtu' },
    { "name": '171021202', "soato": 'b7laib' },
    { "name": '171022001', "soato": '9i8pbx' },
    { "name": '171022002', "soato": 'byf2gz' },
    { "name": '171022401', "soato": 'v0lcz8' },
    { "name": '171022402', "soato": '11zu7t' },
    { "name": '171022901', "soato": 'hgfooc' },
    { "name": '171022902', "soato": 'zy051y' },
    { "name": '171023201', "soato": 'qh4wel' },
    { "name": '171023202', "soato": '13mh74' },
    { "name": '171023301', "soato": 'fyl0d0' },
    { "name": '171023302', "soato": 'q2at6v' },
    { "name": '171023401', "soato": 'n4mcl6' },
    { "name": '171023402', "soato": 'swoxtg' },
    { "name": '171023501', "soato": '2c2xr8' },
    { "name": '171023502', "soato": 'p7z0w5' },
    { "name": '171023701', "soato": 'teihw1' },
    { "name": '171023702', "soato": 'y66b6c' },
    { "name": '171024201', "soato": 'ccynwv' },
    { "name": '171024202', "soato": '7oeten' },
    { "name": '171024501', "soato": '208iy1' },
    { "name": '171024502', "soato": 'c3ldm3' },
    { "name": '171025001', "soato": 'mksoo8' },
    { "name": '171025002', "soato": 'g49hym' },
    { "name": '171040101', "soato": 'zw4kug' },
    { "name": '171040102', "soato": 'ujkiqp' },
    { "name": '171040501', "soato": '3uk7sv' },
    { "name": '171040502', "soato": 'eb51j7' },
    { "name": '171221101', "soato": '3txji5' },
    { "name": '171221102', "soato": 'uinpwi' },
    { "name": '171221601', "soato": 'm6bw3p' },
    { "name": '171221602', "soato": '3ye0wr' },
    { "name": '171223001', "soato": 't2476e' },
    { "name": '171223002', "soato": 'e5grfg' },
    { "name": '171223401', "soato": 'llb5nc' },
    { "name": '171223402', "soato": 'sllfum' },
    { "name": '171223801', "soato": '30tsrr' },
    { "name": '171223802', "soato": 'pp4zj8' },
    { "name": '171224401', "soato": 'qha3ft' },
    { "name": '171224402', "soato": 'jimqez' },
    { "name": '171224801', "soato": 'rhyxdr' },
    { "name": '171224802', "soato": '3qpojc' },
    { "name": '171225101', "soato": 'ex2k8t' },
    { "name": '171225102', "soato": '19id41' },
    { "name": '171240101', "soato": '8ig1f1' },
    { "name": '171240102', "soato": 'yy4z70' },
    { "name": '171240801', "soato": 'kfm9p9' },
    { "name": '171240802', "soato": '5k1goh' },
    { "name": '171241201', "soato": 'k94mut' },
    { "name": '171241202', "soato": 'k60f2j' },
    { "name": '171420401', "soato": 'tgydnt' },
    { "name": '171420402', "soato": '4kr705' },
    { "name": '171420701', "soato": 'yc54eq' },
    { "name": '171420702', "soato": 'enkyu1' },
    { "name": '171421201', "soato": '41mjir' },
    { "name": '171421202', "soato": '87dfu5' },
    { "name": '171421601', "soato": '9j9flt' },
    { "name": '171421602', "soato": 'qh1pyh' },
    { "name": '171421901', "soato": 'ex1eab' },
    { "name": '171421902', "soato": 'qn53b0' },
    { "name": '171422401', "soato": 'pzncqk' },
    { "name": '171422402', "soato": '4b9yat' },
    { "name": '171422901', "soato": 'juniug' },
    { "name": '171422902', "soato": 'm98nna' },
    { "name": '171423401', "soato": 'f2woo5' },
    { "name": '171423402', "soato": '2ff68w' },
    { "name": '171423601', "soato": 'fma8s7' },
    { "name": '171423602', "soato": 'uoj8bd' },
    { "name": '171423701', "soato": '1pkua5' },
    { "name": '171423702', "soato": '4ao813' },
    { "name": '171424201', "soato": 'youwot' },
    { "name": '171424202', "soato": 'n5c47b' },
    { "name": '171440101', "soato": '5vbipk' },
    { "name": '171440102', "soato": 'awq5d1' },
    { "name": '171820301', "soato": 'dmqd31' },
    { "name": '171820302', "soato": 'zxipdi' },
    { "name": '171820601', "soato": '9zatud' },
    { "name": '171820602', "soato": '6918jx' },
    { "name": '171820901', "soato": 'tnvxez' },
    { "name": '171820902', "soato": 'y5qecq' },
    { "name": '171821201', "soato": 'ziryeg' },
    { "name": '171821202', "soato": 'hxc8vs' },
    { "name": '171821501', "soato": '3h0ans' },
    { "name": '171821502', "soato": 'e0kkcj' },
    { "name": '171821601', "soato": '85jmrd' },
    { "name": '171821602', "soato": '99kqf5' },
    { "name": '171821801', "soato": 'ef67rp' },
    { "name": '171821802', "soato": '4xpxnf' },
    { "name": '171822401', "soato": 'nv174s' },
    { "name": '171822402', "soato": 'jmjgle' },
    { "name": '171822701', "soato": 'z3ceaf' },
    { "name": '171822702', "soato": 'six1j9' },
    { "name": '171823001', "soato": '2oil2e' },
    { "name": '171823002', "soato": 'o0eqko' },
    { "name": '171823301', "soato": 'tdyluj' },
    { "name": '171823302', "soato": '8qx2ix' },
    { "name": '171823501', "soato": 'pkex01' },
    { "name": '171823502', "soato": 'sqzm4z' },
    { "name": '171823601', "soato": 'rwbobk' },
    { "name": '171823602', "soato": '6kqs6n' },
    { "name": '171823801', "soato": 'hiov1o' },
    { "name": '171823802', "soato": 'vlbq0t' },
    { "name": '171840101', "soato": 'ij0b4q' },
    { "name": '171840102', "soato": 'psvlpk' },
    { "name": '171840601', "soato": 'tnvduz' },
    { "name": '171840602', "soato": 'h4vo53' },
    { "name": '172220101', "soato": 'g6jgvb' },
    { "name": '172220102', "soato": '5ckkp2' },
    { "name": '172220201', "soato": 'po4gr4' },
    { "name": '172220202', "soato": 'zsslhd' },
    { "name": '172220301', "soato": '498f0x' },
    { "name": '172220302', "soato": '6fm5sp' },
    { "name": '172220401', "soato": 'eifmbw' },
    { "name": '172220402', "soato": '5ofrk3' },
    { "name": '172220701', "soato": '44vadl' },
    { "name": '172220702', "soato": 'qcwvat' },
    { "name": '172221001', "soato": 'ca2hyn' },
    { "name": '172221002', "soato": '7oimqn' },
    { "name": '172221201', "soato": 'iv1lwy' },
    { "name": '172221202', "soato": '8ds9m5' },
    { "name": '172221401', "soato": 'dhtwry' },
    { "name": '172221402', "soato": 'f32zx1' },
    { "name": '172221501', "soato": 'ev1gg5' },
    { "name": '172221502', "soato": '9wdk67' },
    { "name": '172221701', "soato": 'cl8mp0' },
    { "name": '172221702', "soato": 'rbmm5a' },
    { "name": '172222001', "soato": 'ojyao1' },
    { "name": '172222002', "soato": 'zbx6wg' },
    { "name": '172222101', "soato": 'ig9yri' },
    { "name": '172222102', "soato": 'bmzs8b' },
    { "name": '172222301', "soato": '9hrjtb' },
    { "name": '172222302', "soato": 'mhm7ee' },
    { "name": '172222601', "soato": '99te8r' },
    { "name": '172222602', "soato": 'tq453s' },
    { "name": '172240101', "soato": 'v7gd5m' },
    { "name": '172240102', "soato": 'tu0b70' },
    { "name": '172420601', "soato": 'pzaeqx' },
    { "name": '172420602', "soato": 'ueqs4d' },
    { "name": '172421201', "soato": '2miaog' },
    { "name": '172421202', "soato": 'i1cp89' },
    { "name": '172421601', "soato": '2y5sd1' },
    { "name": '172421602', "soato": 'ilsff8' },
    { "name": '172422001', "soato": 'd5rzss' },
    { "name": '172422002', "soato": '2w50l0' },
    { "name": '172422601', "soato": 'szn6yk' },
    { "name": '172422602', "soato": '9he7bj' },
    { "name": '172422801', "soato": 'bohm42' },
    { "name": '172422802', "soato": '0n5xu0' },
    { "name": '172423101', "soato": 'nj5czi' },
    { "name": '172423102', "soato": 's8n89b' },
    { "name": '172423501', "soato": '51v0ws' },
    { "name": '172423502', "soato": 'jgumki' },
    { "name": '172440101', "soato": 'a3tjpx' },
    { "name": '172440102', "soato": '7gx0gs' },
    { "name": '172441001', "soato": 'j9jz8a' },
    { "name": '172441002', "soato": 'sfrqap' },
    { "name": '172441301', "soato": 'b8jkmr' },
    { "name": '172441302', "soato": 'a5175l' },
    { "name": '172626201', "soato": 'cnpa49' },
    { "name": '172626202', "soato": 'tggaej' },
    { "name": '172626401', "soato": 'cxdrgp' },
    { "name": '172626402', "soato": 'sbqgd2' },
    { "name": '172626601', "soato": 'e5x01n' },
    { "name": '172626602', "soato": 'g233tf' },
    { "name": '172626901', "soato": '91k5at' },
    { "name": '172626902', "soato": '1mn1za' },
    { "name": '172627301', "soato": 'mvxsnu' },
    { "name": '172627302', "soato": 'c7xs5y' },
    { "name": '172627701', "soato": '76uiub' },
    { "name": '172627702', "soato": 'uwrv9f' },
    { "name": '172628001', "soato": '8rocge' },
    { "name": '172628002', "soato": 'bbos15' },
    { "name": '172628301', "soato": '2oeuva' },
    { "name": '172628302', "soato": '6dqxmp' },
    { "name": '172628701', "soato": 'bdn18t' },
    { "name": '172628702', "soato": 'azniw0' },
    { "name": '172629001', "soato": 'fxmcqa' },
    { "name": '172629002', "soato": '5ay0jy' },
    { "name": '172629201', "soato": 'hexuvr' },
    { "name": '172629202', "soato": 'ey7bf2' },
    { "name": '172629401', "soato": 'rf30ye' },
    { "name": '172629402', "soato": 'r7a83i' },
    { "name": '172720601', "soato": 'dnzu4u' },
    { "name": '172720602', "soato": 'z56me9' },
    { "name": '172721201', "soato": 'f19l2e' },
    { "name": '172721202', "soato": 'hf8qid' },
    { "name": '172722001', "soato": '3hmw72' },
    { "name": '172722002', "soato": 'x8y29h' },
    { "name": '172722401', "soato": 'q05k4w' },
    { "name": '172722402', "soato": 'nqel18' },
    { "name": '172722801', "soato": 'k71ugr' },
    { "name": '172722802', "soato": 'kcl37a' },
    { "name": '172723301', "soato": '2cndqk' },
    { "name": '172723302', "soato": 'rsrpw2' },
    { "name": '172723701', "soato": '8qoicr' },
    { "name": '172723702', "soato": '2o5re0' },
    { "name": '172723901', "soato": '6outip' },
    { "name": '172723902', "soato": 'tw3wnt' },
    { "name": '172724801', "soato": 'h7k5fv' },
    { "name": '172724802', "soato": '0bn78x' },
    { "name": '172724901', "soato": '18gz58' },
    { "name": '172724902', "soato": 'tht68b' },
    { "name": '172725001', "soato": 'jg8xwx' },
    { "name": '172725002', "soato": 'xo31fw' },
    { "name": '172725301', "soato": 'xdkaph' },
    { "name": '172725302', "soato": '4d4j5d' },
    { "name": '172725601', "soato": 'eif0gm' },
    { "name": '172725602', "soato": 'zw2pmf' },
    { "name": '172725901', "soato": '9jpjdm' },
    { "name": '172725902', "soato": 'x1upi0' },
    { "name": '172726501', "soato": 'bw2avx' },
    { "name": '172726502', "soato": 'wrz070' },
    { "name": '172740101', "soato": 'xetd5k' },
    { "name": '172740102', "soato": 'hwppde' },
    { "name": '172740401', "soato": '50f1km' },
    { "name": '172740402', "soato": '2585sh' },
    { "name": '172740701', "soato": 'pqpvsc' },
    { "name": '172740702', "soato": '5bayib' },
    { "name": '172741301', "soato": 'bsay04' },
    { "name": '172741302', "soato": 'fvrrw7' },
    { "name": '172741501', "soato": 'vscqrj' },
    { "name": '172741502', "soato": 'zxjja2' },
    { "name": '172741901', "soato": 'km4p2q' },
    { "name": '172741902', "soato": 'dfpyv6' },
    { "name": '172742401', "soato": '0pftfi' },
    { "name": '172742402', "soato": '5trva8' },
    { "name": '173020301', "soato": 'zpxr1x' },
    { "name": '173020302', "soato": 'ze06a5' },
    { "name": '173020601', "soato": '81somj' },
    { "name": '173020602', "soato": 'x3jqwu' },
    { "name": '173020901', "soato": '9cnfv1' },
    { "name": '173020902', "soato": 'fkw6ot' },
    { "name": '173021201', "soato": 'tl3a40' },
    { "name": '173021202', "soato": 'an6mkk' },
    { "name": '173021501', "soato": '0bz7ys' },
    { "name": '173021502', "soato": 'v1g9kr' },
    { "name": '173021801', "soato": 'g539gl' },
    { "name": '173021802', "soato": 'bd5hiy' },
    { "name": '173022101', "soato": 'iw6aqk' },
    { "name": '173022102', "soato": 'outac7' },
    { "name": '173022401', "soato": 'j1ki9x' },
    { "name": '173022402', "soato": 'znns65' },
    { "name": '173022601', "soato": '5utiw8' },
    { "name": '173022602', "soato": '1q4tqw' },
    { "name": '173022701', "soato": '1eemw1' },
    { "name": '173022702', "soato": '8bc8al' },
    { "name": '173023001', "soato": 'ps8sab' },
    { "name": '173023002', "soato": 'k89fcs' },
    { "name": '173023301', "soato": 'vcx6qr' },
    { "name": '173023302', "soato": 'c8bkbv' },
    { "name": '173023601', "soato": '93o3xz' },
    { "name": '173023602', "soato": 'vcy8qk' },
    { "name": '173023801', "soato": '6vsidl' },
    { "name": '173023802', "soato": 'bdacjm' },
    { "name": '173024201', "soato": '68y2rs' },
    { "name": '173024202', "soato": 'u9w0i8' },
    { "name": '173040101', "soato": 'vspucg' },
    { "name": '173040102', "soato": 'lehi1r' },
    { "name": '173040501', "soato": '037yhy' },
    { "name": '173040502', "soato": 'f190v2' },
    { "name": '173040801', "soato": 'c2i4yg' },
    { "name": '173040802', "soato": 'xcnogd' },
    { "name": '173041201', "soato": 'x3c1aq' },
    { "name": '173041202', "soato": 'obx8tj' },
    { "name": '173320401', "soato": 'oaf365' },
    { "name": '173320402', "soato": '84ossx' },
    { "name": '173320801', "soato": 'h4wh79' },
    { "name": '173320802', "soato": '9ha3ad' },
    { "name": '173321201', "soato": 'ehifoa' },
    { "name": '173321202', "soato": 'uu0i6p' },
    { "name": '173321701', "soato": 'womshm' },
    { "name": '173321702', "soato": 'un2qwf' },
    { "name": '173322001', "soato": 'l2dfbp' },
    { "name": '173322002', "soato": '6h6t93' },
    { "name": '173322101', "soato": 'c8zjhe' },
    { "name": '173322102', "soato": 'mvq7jh' },
    { "name": '173322301', "soato": 'bdds5x' },
    { "name": '173322302', "soato": '0rs37j' },
    { "name": '173322601', "soato": 'qw0m4y' },
    { "name": '173322602', "soato": 'f7du7e' },
    { "name": '173323001', "soato": 'zjsp6j' },
    { "name": '173323002', "soato": 'h1wtd0' },
    { "name": '173323301', "soato": '1r3rjc' },
    { "name": '173323302', "soato": 'b64kp7' },
    { "name": '173323601', "soato": 'eb2myw' },
    { "name": '173323602', "soato": '0dkfet' },
    { "name": '173340101', "soato": 'ps9zom' },
    { "name": '173340102', "soato": '0fvt18' },
    { "name": '173340601', "soato": 'b7gf1k' },
    { "name": '173340602', "soato": '11ah56' },
    { "name": '173520401', "soato": 'ayq6sw' },
    { "name": '173520402', "soato": '6kzyev' },
    { "name": '173520701', "soato": '2qupkf' },
    { "name": '173520702', "soato": 'qw0jup' },
    { "name": '173520901', "soato": 'ro4dud' },
    { "name": '173520902', "soato": 'y4bc9n' },
    { "name": '173521101', "soato": 'm9wv0f' },
    { "name": '173521102', "soato": 'bo91at' },
    { "name": '173521201', "soato": 'xanmc1' },
    { "name": '173521202', "soato": '0c6ppg' },
    { "name": '173521501', "soato": '6xatvg' },
    { "name": '173521502', "soato": 'rxrlbs' },
    { "name": '173521801', "soato": 'nuy3nl' },
    { "name": '173521802', "soato": '8d4gm9' },
    { "name": '173522201', "soato": 'zyp50d' },
    { "name": '173522202', "soato": 'srvu8y' },
    { "name": '173522501', "soato": 'snu4k8' },
    { "name": '173522502', "soato": '6nkdot' },
    { "name": '173522801', "soato": 'n6vzg4' },
    { "name": '173522802', "soato": '3ftg9a' },
    { "name": '173523001', "soato": 'a3qwo2' },
    { "name": '173523002', "soato": 'oqefmh' },
    { "name": '173523301', "soato": 'nvphvi' },
    { "name": '173523302', "soato": 'c1zboz' },
    { "name": '173523601', "soato": '33ojdr' },
    { "name": '173523602', "soato": '45ebsi' },
    { "name": '173524001', "soato": 'wk7h3c' },
    { "name": '173524002', "soato": '1b5g2c' },
    { "name": '173524301', "soato": '4oeyks' },
    { "name": '173524302', "soato": 'hmn5mf' },
    { "name": '173525001', "soato": '3b7dhj' },
    { "name": '173525002', "soato": 'rhavm6' },
    { "name": '173540101', "soato": 'sqkyxd' },
    { "name": '173540102', "soato": '3yj8u5' },
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

writetodb1()
// writetodb2()