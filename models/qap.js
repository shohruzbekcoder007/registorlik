const mongoose = require('mongoose')

const QapSchema = new mongoose.Schema({
    tuman: {
        type: String,
        required: true
    },
    soato: {
        type: String,
        required: true
    },
    nomi: {
        type: String,
        required: true
    }
});

const Qap = mongoose.model("qaps", QapSchema);
module.exports.Qap = Qap;