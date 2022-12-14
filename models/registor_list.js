const mongoose = require('mongoose')

const RegistorListSchema = new mongoose.Schema({
    soato: {
        type: String,
        required: true
    },
    regnubmer: {
        type: Number,
        required: true
    },
    col0: {
        type: String,
        required: true
    },
    col00: {
        type: String, 
        required: true
    },
    col000: {
        type: String, 
        required: true
    },
    col0000: {
        type: String, 
        required: true
    },
    street: {
        type: String, 
        required: true
    },
    colA: {
        type: Number,
        required: true
    },
    col1: {
        type: String,
        required: true
    },
    col2: {
        type: String,
        default: ''
    },
    col3: {
        type: Number,
        default: 0
    },
    col4: {
        type: Number,
        default: 0
    },
    col5: {
        type: Number,
        default: 0
    },
    col6: {
        type: Number,
        default: 0
    },
    col7: {
        type: Number,
        default: 0
    },
    col8: {
        type: Number,
        default: 0
    },
    col9: {
        type: Number,
        default: 0
    },
    col10: {
        type: String,
        default: ''
    },
    dateTime: {
        type: String,
        default: ''
    },
    countSoato: {
        type: String,
        required: true
    }
});

const RegistorList = mongoose.model("registor_lists", RegistorListSchema);
module.exports.RegistorList = RegistorList;