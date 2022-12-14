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
    { soato: '1703202', name: '170320201', password: 'a2mpll' },
    { soato: '1703202', name: '170320202', password: 'kf471j' },
    { soato: '1703203', name: '170320301', password: 'f8uann' },
    { soato: '1703203', name: '170320302', password: '0xoo0w' },
    { soato: '1703206', name: '170320601', password: 'ulz2s1' },
    { soato: '1703206', name: '170320602', password: 'p6ount' },
    { soato: '1703209', name: '170320901', password: '7xzupi' },
    { soato: '1703209', name: '170320902', password: '1f99gl' },
    { soato: '1703210', name: '170321001', password: 'qg13f0' },
    { soato: '1703210', name: '170321002', password: 'knjgvb' },
    { soato: '1703211', name: '170321101', password: '8017l8' },
    { soato: '1703211', name: '170321102', password: 'kwcrqo' },
    { soato: '1703214', name: '170321401', password: 'hr0egy' },
    { soato: '1703214', name: '170321402', password: 'z2gze8' },
    { soato: '1703217', name: '170321701', password: 'lwlvb4' },
    { soato: '1703217', name: '170321702', password: 'cz2kij' },
    { soato: '1703220', name: '170322001', password: '9k2sut' },
    { soato: '1703220', name: '170322002', password: 'vgsjc0' },
    { soato: '1703224', name: '170322401', password: 'lzzngt' },
    { soato: '1703224', name: '170322402', password: 'k9p3af' },
    { soato: '1703227', name: '170322701', password: 'flvsuf' },
    { soato: '1703227', name: '170322702', password: 'jj7iav' },
    { soato: '1703230', name: '170323001', password: 'q67zop' },
    { soato: '1703230', name: '170323002', password: '63jbjy' },
    { soato: '1703232', name: '170323201', password: 'ophmkw' },
    { soato: '1703232', name: '170323202', password: 'aridrk' },
    { soato: '1703236', name: '170323601', password: 'iu6gsi' },
    { soato: '1703236', name: '170323602', password: '51d4px' },
    { soato: '1703401', name: '170340101', password: '4w5si9' },
    { soato: '1703401', name: '170340102', password: 'usc12o' },
    { soato: '1703408', name: '170340801', password: 'ektxxu' },
    { soato: '1703408', name: '170340802', password: 'z0qaaw' },
    { soato: '1706204', name: '170620401', password: 'pwew7g' },
    { soato: '1706204', name: '170620402', password: '93vjmv' },
    { soato: '1706207', name: '170620701', password: 'nb8jyr' },
    { soato: '1706207', name: '170620702', password: 'b90f68' },
    { soato: '1706212', name: '170621201', password: 'saoeyv' },
    { soato: '1706212', name: '170621202', password: 'juft8u' },
    { soato: '1706215', name: '170621501', password: 'zvt4of' },
    { soato: '1706215', name: '170621502', password: '433cvc' },
    { soato: '1706219', name: '170621901', password: 'cvt6mw' },
    { soato: '1706219', name: '170621902', password: 'jru65m' },
    { soato: '1706230', name: '170623001', password: 'usfu07' },
    { soato: '1706230', name: '170623002', password: 'f5liud' },
    { soato: '1706232', name: '170623201', password: '4is6ge' },
    { soato: '1706232', name: '170623202', password: 'e5o3g3' },
    { soato: '1706240', name: '170624001', password: 'l67j3e' },
    { soato: '1706240', name: '170624002', password: 'om3sd8' },
    { soato: '1706242', name: '170624201', password: '9osg1y' },
    { soato: '1706242', name: '170624202', password: 'ghfpbs' },
    { soato: '1706246', name: '170624601', password: 'fpgth7' },
    { soato: '1706246', name: '170624602', password: 'nwptps' },
    { soato: '1706258', name: '170625801', password: 'zwq2wc' },
    { soato: '1706258', name: '170625802', password: 'avazoo' },
    { soato: '1706401', name: '170640101', password: 'vhel3b' },
    { soato: '1706401', name: '170640102', password: 'llh8kl' },
    { soato: '1706403', name: '170640301', password: 'nl92ly' },
    { soato: '1706403', name: '170640302', password: '8fnbnq' },
    { soato: '1708201', name: '170820101', password: 'fuf8xh' },
    { soato: '1708201', name: '170820102', password: 'mcyrqf' },
    { soato: '1708204', name: '170820401', password: 'bjf40m' },
    { soato: '1708204', name: '170820402', password: 'pp9riv' },
    { soato: '1708209', name: '170820901', password: '4eob7v' },
    { soato: '1708209', name: '170820902', password: 'rti0qw' },
    { soato: '1708212', name: '170821201', password: 'gyxzqk' },
    { soato: '1708212', name: '170821202', password: '1fijp9' },
    { soato: '1708215', name: '170821501', password: '2swo39' },
    { soato: '1708215', name: '170821502', password: '6szm54' },
    { soato: '1708218', name: '170821801', password: 'cgk3dw' },
    { soato: '1708218', name: '170821802', password: 'myrcqu' },
    { soato: '1708220', name: '170822001', password: 'cv801a' },
    { soato: '1708220', name: '170822002', password: 'jqc71e' },
    { soato: '1708223', name: '170822301', password: '85nvga' },
    { soato: '1708223', name: '170822302', password: 'k3yd3j' },
    { soato: '1708225', name: '170822501', password: '9sk823' },
    { soato: '1708225', name: '170822502', password: 'c6shjq' },
    { soato: '1708228', name: '170822801', password: 'giagsp' },
    { soato: '1708228', name: '170822802', password: 'jdn5qf' },
    { soato: '1708235', name: '170823501', password: 'g3ukw3' },
    { soato: '1708235', name: '170823502', password: 'r84t8u' },
    { soato: '1708237', name: '170823701', password: 'gnrf2n' },
    { soato: '1708237', name: '170823702', password: 'lip453' },
    { soato: '1708401', name: '170840101', password: '8z9imp' },
    { soato: '1708401', name: '170840102', password: 'vmqy5c' },
    { soato: '1710207', name: '171020701', password: 'a7ng0x' },
    { soato: '1710207', name: '171020702', password: 'vic845' },
    { soato: '1710212', name: '171021201', password: '6n0dtu' },
    { soato: '1710212', name: '171021202', password: 'b7laib' },
    { soato: '1710220', name: '171022001', password: '9i8pbx' },
    { soato: '1710220', name: '171022002', password: 'byf2gz' },
    { soato: '1710224', name: '171022401', password: 'v0lcz8' },
    { soato: '1710224', name: '171022402', password: '11zu7t' },
    { soato: '1710229', name: '171022901', password: 'hgfooc' },
    { soato: '1710229', name: '171022902', password: 'zy051y' },
    { soato: '1710232', name: '171023201', password: 'qh4wel' },
    { soato: '1710232', name: '171023202', password: '13mh74' },
    { soato: '1710233', name: '171023301', password: 'fyl0d0' },
    { soato: '1710233', name: '171023302', password: 'q2at6v' },
    { soato: '1710234', name: '171023401', password: 'n4mcl6' },
    { soato: '1710234', name: '171023402', password: 'swoxtg' },
    { soato: '1710235', name: '171023501', password: '2c2xr8' },
    { soato: '1710235', name: '171023502', password: 'p7z0w5' },
    { soato: '1710237', name: '171023701', password: 'teihw1' },
    { soato: '1710237', name: '171023702', password: 'y66b6c' },
    { soato: '1710240', name: '171024001', password: 'asfe21' },
    { soato: '1710240', name: '171024002', password: '2s4fe1' },
    { soato: '1710242', name: '171024201', password: 'ccynwv' },
    { soato: '1710242', name: '171024202', password: '7oeten' },
    { soato: '1710245', name: '171024501', password: '208iy1' },
    { soato: '1710245', name: '171024502', password: 'c3ldm3' },
    { soato: '1710250', name: '171025001', password: 'mksoo8' },
    { soato: '1710250', name: '171025002', password: 'g49hym' },
    { soato: '1710401', name: '171040101', password: 'zw4kug' },
    { soato: '1710401', name: '171040102', password: 'ujkiqp' },
    { soato: '1710405', name: '171040501', password: '3uk7sv' },
    { soato: '1710405', name: '171040502', password: 'eb51j7' },
    { soato: '1712211', name: '171221101', password: '3txji5' },
    { soato: '1712211', name: '171221102', password: 'uinpwi' },
    { soato: '1712216', name: '171221601', password: 'm6bw3p' },
    { soato: '1712216', name: '171221602', password: '3ye0wr' },
    { soato: '1712230', name: '171223001', password: 't2476e' },
    { soato: '1712230', name: '171223002', password: 'e5grfg' },
    { soato: '1712234', name: '171223401', password: 'llb5nc' },
    { soato: '1712234', name: '171223402', password: 'sllfum' },
    { soato: '1712238', name: '171223801', password: '30tsrr' },
    { soato: '1712238', name: '171223802', password: 'pp4zj8' },
    { soato: '1712244', name: '171224401', password: 'qha3ft' },
    { soato: '1712244', name: '171224402', password: 'jimqez' },
    { soato: '1712248', name: '171224801', password: 'rhyxdr' },
    { soato: '1712248', name: '171224802', password: '3qpojc' },
    { soato: '1712251', name: '171225101', password: 'ex2k8t' },
    { soato: '1712251', name: '171225102', password: '19id41' },
    { soato: '1712401', name: '171240101', password: '8ig1f1' },
    { soato: '1712401', name: '171240102', password: 'yy4z70' },
    { soato: '1712408', name: '171240801', password: 'kfm9p9' },
    { soato: '1712408', name: '171240802', password: '5k1goh' },
    { soato: '1712412', name: '171241201', password: 'k94mut' },
    { soato: '1712412', name: '171241202', password: 'k60f2j' },
    { soato: '1714204', name: '171420401', password: 'tgydnt' },
    { soato: '1714204', name: '171420402', password: '4kr705' },
    { soato: '1714207', name: '171420701', password: 'yc54eq' },
    { soato: '1714207', name: '171420702', password: 'enkyu1' },
    { soato: '1714212', name: '171421201', password: '41mjir' },
    { soato: '1714212', name: '171421202', password: '87dfu5' },
    { soato: '1714216', name: '171421601', password: '9j9flt' },
    { soato: '1714216', name: '171421602', password: 'qh1pyh' },
    { soato: '1714219', name: '171421901', password: 'ex1eab' },
    { soato: '1714219', name: '171421902', password: 'qn53b0' },
    { soato: '1714224', name: '171422401', password: 'pzncqk' },
    { soato: '1714224', name: '171422402', password: '4b9yat' },
    { soato: '1714229', name: '171422901', password: 'juniug' },
    { soato: '1714229', name: '171422902', password: 'm98nna' },
    { soato: '1714234', name: '171423401', password: 'f2woo5' },
    { soato: '1714234', name: '171423402', password: '2ff68w' },
    { soato: '1714236', name: '171423601', password: 'fma8s7' },
    { soato: '1714236', name: '171423602', password: 'uoj8bd' },
    { soato: '1714237', name: '171423701', password: '1pkua5' },
    { soato: '1714237', name: '171423702', password: '4ao813' },
    { soato: '1714242', name: '171424201', password: 'youwot' },
    { soato: '1714242', name: '171424202', password: 'n5c47b' },
    { soato: '1714401', name: '171440101', password: '5vbipk' },
    { soato: '1714401', name: '171440102', password: 'awq5d1' },
    { soato: '1714402', name: '171440201', password: 'dav2t1' },
    { soato: '1714402', name: '171440202', password: 'ger5d1' },
    { soato: '1714403', name: '171440301', password: 'd3v2t1' },
    { soato: '1714403', name: '171440302', password: 'g3r5d1' },
    { soato: '1718203', name: '171820301', password: 'dmqd31' },
    { soato: '1718203', name: '171820302', password: 'zxipdi' },
    { soato: '1718206', name: '171820601', password: '9zatud' },
    { soato: '1718206', name: '171820602', password: '6918jx' },
    { soato: '1718209', name: '171820901', password: 'tnvxez' },
    { soato: '1718209', name: '171820902', password: 'y5qecq' },
    { soato: '1718212', name: '171821201', password: 'ziryeg' },
    { soato: '1718212', name: '171821202', password: 'hxc8vs' },
    { soato: '1718215', name: '171821501', password: '3h0ans' },
    { soato: '1718215', name: '171821502', password: 'e0kkcj' },
    { soato: '1718216', name: '171821601', password: '85jmrd' },
    { soato: '1718216', name: '171821602', password: '99kqf5' },
    { soato: '1718218', name: '171821801', password: 'ef67rp' },
    { soato: '1718218', name: '171821802', password: '4xpxnf' },
    { soato: '1718224', name: '171822401', password: 'nv174s' },
    { soato: '1718224', name: '171822402', password: 'jmjgle' },
    { soato: '1718227', name: '171822701', password: 'z3ceaf' },
    { soato: '1718227', name: '171822702', password: 'six1j9' },
    { soato: '1718230', name: '171823001', password: '2oil2e' },
    { soato: '1718230', name: '171823002', password: 'o0eqko' },
    { soato: '1718233', name: '171823301', password: 'tdyluj' },
    { soato: '1718233', name: '171823302', password: '8qx2ix' },
    { soato: '1718235', name: '171823501', password: 'pkex01' },
    { soato: '1718235', name: '171823502', password: 'sqzm4z' },
    { soato: '1718236', name: '171823601', password: 'rwbobk' },
    { soato: '1718236', name: '171823602', password: '6kqs6n' },
    { soato: '1718238', name: '171823801', password: 'hiov1o' },
    { soato: '1718238', name: '171823802', password: 'vlbq0t' },
    { soato: '1718401', name: '171840101', password: 'ij0b4q' },
    { soato: '1718401', name: '171840102', password: 'psvlpk' },
    { soato: '1718406', name: '171840601', password: 'tnvduz' },
    { soato: '1718406', name: '171840602', password: 'h4vo53' },
    { soato: '1722201', name: '172220101', password: 'g6jgvb' },
    { soato: '1722201', name: '172220102', password: '5ckkp2' },
    { soato: '1722202', name: '172220201', password: 'po4gr4' },
    { soato: '1722202', name: '172220202', password: 'zsslhd' },
    { soato: '1722203', name: '172220301', password: '498f0x' },
    { soato: '1722203', name: '172220302', password: '6fm5sp' },
    { soato: '1722204', name: '172220401', password: 'eifmbw' },
    { soato: '1722204', name: '172220402', password: '5ofrk3' },
    { soato: '1722207', name: '172220701', password: '44vadl' },
    { soato: '1722207', name: '172220702', password: 'qcwvat' },
    { soato: '1722210', name: '172221001', password: 'ca2hyn' },
    { soato: '1722210', name: '172221002', password: '7oimqn' },
    { soato: '1722212', name: '172221201', password: 'iv1lwy' },
    { soato: '1722212', name: '172221202', password: '8ds9m5' },
    { soato: '1722214', name: '172221401', password: 'dhtwry' },
    { soato: '1722214', name: '172221402', password: 'f32zx1' },
    { soato: '1722215', name: '172221501', password: 'ev1gg5' },
    { soato: '1722215', name: '172221502', password: '9wdk67' },
    { soato: '1722217', name: '172221701', password: 'cl8mp0' },
    { soato: '1722217', name: '172221702', password: 'rbmm5a' },
    { soato: '1722220', name: '172222001', password: 'ojyao1' },
    { soato: '1722220', name: '172222002', password: 'zbx6wg' },
    { soato: '1722221', name: '172222101', password: 'ig9yri' },
    { soato: '1722221', name: '172222102', password: 'bmzs8b' },
    { soato: '1722223', name: '172222301', password: '9hrjtb' },
    { soato: '1722223', name: '172222302', password: 'mhm7ee' },
    { soato: '1722226', name: '172222601', password: '99te8r' },
    { soato: '1722226', name: '172222602', password: 'tq453s' },
    { soato: '1722401', name: '172240101', password: 'v7gd5m' },
    { soato: '1722401', name: '172240102', password: 'tu0b70' },
    { soato: '1724206', name: '172420601', password: 'pzaeqx' },
    { soato: '1724206', name: '172420602', password: 'ueqs4d' },
    { soato: '1724212', name: '172421201', password: '2miaog' },
    { soato: '1724212', name: '172421202', password: 'i1cp89' },
    { soato: '1724216', name: '172421601', password: '2y5sd1' },
    { soato: '1724216', name: '172421602', password: 'ilsff8' },
    { soato: '1724220', name: '172422001', password: 'd5rzss' },
    { soato: '1724220', name: '172422002', password: '2w50l0' },
    { soato: '1724226', name: '172422601', password: 'szn6yk' },
    { soato: '1724226', name: '172422602', password: '9he7bj' },
    { soato: '1724228', name: '172422801', password: 'bohm42' },
    { soato: '1724228', name: '172422802', password: '0n5xu0' },
    { soato: '1724231', name: '172423101', password: 'nj5czi' },
    { soato: '1724231', name: '172423102', password: 's8n89b' },
    { soato: '1724235', name: '172423501', password: '51v0ws' },
    { soato: '1724235', name: '172423502', password: 'jgumki' },
    { soato: '1724401', name: '172440101', password: 'a3tjpx' },
    { soato: '1724401', name: '172440102', password: '7gx0gs' },
    { soato: '1724410', name: '172441001', password: 'j9jz8a' },
    { soato: '1724410', name: '172441002', password: 'sfrqap' },
    { soato: '1724413', name: '172441301', password: 'b8jkmr' },
    { soato: '1724413', name: '172441302', password: 'a5175l' },
    { soato: '1726262', name: '172626201', password: 'cnpa49' },
    { soato: '1726262', name: '172626202', password: 'tggaej' },
    { soato: '1726264', name: '172626401', password: 'cxdrgp' },
    { soato: '1726264', name: '172626402', password: 'sbqgd2' },
    { soato: '1726266', name: '172626601', password: 'e5x01n' },
    { soato: '1726266', name: '172626602', password: 'g233tf' },
    { soato: '1726269', name: '172626901', password: '91k5at' },
    { soato: '1726269', name: '172626902', password: '1mn1za' },
    { soato: '1726273', name: '172627301', password: 'mvxsnu' },
    { soato: '1726273', name: '172627302', password: 'c7xs5y' },
    { soato: '1726277', name: '172627701', password: '76uiub' },
    { soato: '1726277', name: '172627702', password: 'uwrv9f' },
    { soato: '1726280', name: '172628001', password: '8rocge' },
    { soato: '1726280', name: '172628002', password: 'bbos15' },
    { soato: '1726283', name: '172628301', password: '2oeuva' },
    { soato: '1726283', name: '172628302', password: '6dqxmp' },
    { soato: '1726287', name: '172628701', password: 'bdn18t' },
    { soato: '1726287', name: '172628702', password: 'azniw0' },
    { soato: '1726290', name: '172629001', password: 'fxmcqa' },
    { soato: '1726290', name: '172629002', password: '5ay0jy' },
    { soato: '1726292', name: '172629201', password: 'hexuvr' },
    { soato: '1726292', name: '172629202', password: 'ey7bf2' },
    { soato: '1726294', name: '172629401', password: 'rf30ye' },
    { soato: '1726294', name: '172629402', password: 'r7a83i' },
    { soato: '1727206', name: '172720601', password: 'dnzu4u' },
    { soato: '1727206', name: '172720602', password: 'z56me9' },
    { soato: '1727212', name: '172721201', password: 'f19l2e' },
    { soato: '1727212', name: '172721202', password: 'hf8qid' },
    { soato: '1727220', name: '172722001', password: '3hmw72' },
    { soato: '1727220', name: '172722002', password: 'x8y29h' },
    { soato: '1727224', name: '172722401', password: 'q05k4w' },
    { soato: '1727224', name: '172722402', password: 'nqel18' },
    { soato: '1727228', name: '172722801', password: 'k71ugr' },
    { soato: '1727228', name: '172722802', password: 'kcl37a' },
    { soato: '1727233', name: '172723301', password: '2cndqk' },
    { soato: '1727233', name: '172723302', password: 'rsrpw2' },
    { soato: '1727237', name: '172723701', password: '8qoicr' },
    { soato: '1727237', name: '172723702', password: '2o5re0' },
    { soato: '1727239', name: '172723901', password: '6outip' },
    { soato: '1727239', name: '172723902', password: 'tw3wnt' },
    { soato: '1727248', name: '172724801', password: 'h7k5fv' },
    { soato: '1727248', name: '172724802', password: '0bn78x' },
    { soato: '1727249', name: '172724901', password: '18gz58' },
    { soato: '1727249', name: '172724902', password: 'tht68b' },
    { soato: '1727250', name: '172725001', password: 'jg8xwx' },
    { soato: '1727250', name: '172725002', password: 'xo31fw' },
    { soato: '1727253', name: '172725301', password: 'xdkaph' },
    { soato: '1727253', name: '172725302', password: '4d4j5d' },
    { soato: '1727256', name: '172725601', password: 'eif0gm' },
    { soato: '1727256', name: '172725602', password: 'zw2pmf' },
    { soato: '1727259', name: '172725901', password: '9jpjdm' },
    { soato: '1727259', name: '172725902', password: 'x1upi0' },
    { soato: '1727265', name: '172726501', password: 'bw2avx' },
    { soato: '1727265', name: '172726502', password: 'wrz070' },
    { soato: '1727401', name: '172740101', password: 'xetd5k' },
    { soato: '1727401', name: '172740102', password: 'hwppde' },
    { soato: '1727404', name: '172740401', password: '50f1km' },
    { soato: '1727404', name: '172740402', password: '2585sh' },
    { soato: '1727407', name: '172740701', password: 'pqpvsc' },
    { soato: '1727407', name: '172740702', password: '5bayib' },
    { soato: '1727413', name: '172741301', password: 'bsay04' },
    { soato: '1727413', name: '172741302', password: 'fvrrw7' },
    { soato: '1727415', name: '172741501', password: 'vscqrj' },
    { soato: '1727415', name: '172741502', password: 'zxjja2' },
    { soato: '1727419', name: '172741901', password: 'km4p2q' },
    { soato: '1727419', name: '172741902', password: 'dfpyv6' },
    { soato: '1727424', name: '172742401', password: '0pftfi' },
    { soato: '1727424', name: '172742402', password: '5trva8' },
    { soato: '1730203', name: '173020301', password: 'zpxr1x' },
    { soato: '1730203', name: '173020302', password: 'ze06a5' },
    { soato: '1730206', name: '173020601', password: '81somj' },
    { soato: '1730206', name: '173020602', password: 'x3jqwu' },
    { soato: '1730209', name: '173020901', password: '9cnfv1' },
    { soato: '1730209', name: '173020902', password: 'fkw6ot' },
    { soato: '1730212', name: '173021201', password: 'tl3a40' },
    { soato: '1730212', name: '173021202', password: 'an6mkk' },
    { soato: '1730215', name: '173021501', password: '0bz7ys' },
    { soato: '1730215', name: '173021502', password: 'v1g9kr' },
    { soato: '1730218', name: '173021801', password: 'g539gl' },
    { soato: '1730218', name: '173021802', password: 'bd5hiy' },
    { soato: '1730221', name: '173022101', password: 'iw6aqk' },
    { soato: '1730221', name: '173022102', password: 'outac7' },
    { soato: '1730224', name: '173022401', password: 'j1ki9x' },
    { soato: '1730224', name: '173022402', password: 'znns65' },
    { soato: '1730226', name: '173022601', password: '5utiw8' },
    { soato: '1730226', name: '173022602', password: '1q4tqw' },
    { soato: '1730227', name: '173022701', password: '1eemw1' },
    { soato: '1730227', name: '173022702', password: '8bc8al' },
    { soato: '1730230', name: '173023001', password: 'ps8sab' },
    { soato: '1730230', name: '173023002', password: 'k89fcs' },
    { soato: '1730233', name: '173023301', password: 'vcx6qr' },
    { soato: '1730233', name: '173023302', password: 'c8bkbv' },
    { soato: '1730236', name: '173023601', password: '93o3xz' },
    { soato: '1730236', name: '173023602', password: 'vcy8qk' },
    { soato: '1730238', name: '173023801', password: '6vsidl' },
    { soato: '1730238', name: '173023802', password: 'bdacjm' },
    { soato: '1730242', name: '173024201', password: '68y2rs' },
    { soato: '1730242', name: '173024202', password: 'u9w0i8' },
    { soato: '1730401', name: '173040101', password: 'vspucg' },
    { soato: '1730401', name: '173040102', password: 'lehi1r' },
    { soato: '1730405', name: '173040501', password: '037yhy' },
    { soato: '1730405', name: '173040502', password: 'f190v2' },
    { soato: '1730408', name: '173040801', password: 'c2i4yg' },
    { soato: '1730408', name: '173040802', password: 'xcnogd' },
    { soato: '1730412', name: '173041201', password: 'x3c1aq' },
    { soato: '1730412', name: '173041202', password: 'obx8tj' },
    { soato: '1733204', name: '173320401', password: 'oaf365' },
    { soato: '1733204', name: '173320402', password: '84ossx' },
    { soato: '1733208', name: '173320801', password: 'h4wh79' },
    { soato: '1733208', name: '173320802', password: '9ha3ad' },
    { soato: '1733212', name: '173321201', password: 'ehifoa' },
    { soato: '1733212', name: '173321202', password: 'uu0i6p' },
    { soato: '1733217', name: '173321701', password: 'womshm' },
    { soato: '1733217', name: '173321702', password: 'un2qwf' },
    { soato: '1733220', name: '173322001', password: 'l2dfbp' },
    { soato: '1733220', name: '173322002', password: '6h6t93' },
    { soato: '1733221', name: '173322101', password: 'c8zjhe' },
    { soato: '1733221', name: '173322102', password: 'mvq7jh' },
    { soato: '1733223', name: '173322301', password: 'bdds5x' },
    { soato: '1733223', name: '173322302', password: '0rs37j' },
    { soato: '1733226', name: '173322601', password: 'qw0m4y' },
    { soato: '1733226', name: '173322602', password: 'f7du7e' },
    { soato: '1733230', name: '173323001', password: 'zjsp6j' },
    { soato: '1733230', name: '173323002', password: 'h1wtd0' },
    { soato: '1733233', name: '173323301', password: '1r3rjc' },
    { soato: '1733233', name: '173323302', password: 'b64kp7' },
    { soato: '1733236', name: '173323601', password: 'eb2myw' },
    { soato: '1733236', name: '173323602', password: '0dkfet' },
    { soato: '1733401', name: '173340101', password: 'ps9zom' },
    { soato: '1733401', name: '173340102', password: '0fvt18' },
    { soato: '1733406', name: '173340601', password: 'b7gf1k' },
    { soato: '1733406', name: '173340602', password: '11ah56' },
    { soato: '1735204', name: '173520401', password: 'ayq6sw' },
    { soato: '1735204', name: '173520402', password: '6kzyev' },
    { soato: '1735207', name: '173520701', password: '2qupkf' },
    { soato: '1735207', name: '173520702', password: 'qw0jup' },
    { soato: '1735209', name: '173520901', password: 'ro4dud' },
    { soato: '1735209', name: '173520902', password: 'y4bc9n' },
    { soato: '1735211', name: '173521101', password: 'm9wv0f' },
    { soato: '1735211', name: '173521102', password: 'bo91at' },
    { soato: '1735212', name: '173521201', password: 'xanmc1' },
    { soato: '1735212', name: '173521202', password: '0c6ppg' },
    { soato: '1735215', name: '173521501', password: '6xatvg' },
    { soato: '1735215', name: '173521502', password: 'rxrlbs' },
    { soato: '1735218', name: '173521801', password: 'nuy3nl' },
    { soato: '1735218', name: '173521802', password: '8d4gm9' },
    { soato: '1735222', name: '173522201', password: 'zyp50d' },
    { soato: '1735222', name: '173522202', password: 'srvu8y' },
    { soato: '1735225', name: '173522501', password: 'snu4k8' },
    { soato: '1735225', name: '173522502', password: '6nkdot' },
    { soato: '1735228', name: '173522801', password: 'n6vzg4' },
    { soato: '1735228', name: '173522802', password: '3ftg9a' },
    { soato: '1735230', name: '173523001', password: 'a3qwo2' },
    { soato: '1735230', name: '173523002', password: 'oqefmh' },
    { soato: '1735233', name: '173523301', password: 'nvphvi' },
    { soato: '1735233', name: '173523302', password: 'c1zboz' },
    { soato: '1735236', name: '173523601', password: '33ojdr' },
    { soato: '1735236', name: '173523602', password: '45ebsi' },
    { soato: '1735240', name: '173524001', password: 'wk7h3c' },
    { soato: '1735240', name: '173524002', password: '1b5g2c' },
    { soato: '1735243', name: '173524301', password: '4oeyks' },
    { soato: '1735243', name: '173524302', password: 'hmn5mf' },
    { soato: '1735250', name: '173525001', password: '3b7dhj' },
    { soato: '1735250', name: '173525002', password: 'rhavm6' },
    { soato: '1735401', name: '173540101', password: 'sqkyxd' },
    { soato: '1735401', name: '173540102', password: '3yj8u5' },
    { soato: '17', name: '1701', password: 'sht802' }
]

let writetodb1 = async () => {
    tumanlar.forEach(async elem => {
            const salt = await bcrypt.genSalt();
            password = await bcrypt.hash(`${elem.password}`, salt);
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