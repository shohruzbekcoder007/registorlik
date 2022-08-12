const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    soato: {
        type: String,
        required: true
    }
});

UserSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id, soato: this.soato }, "q1y1npar0l",
    // {expiresIn: '300s'}
    );
    return token;
  }

const User = mongoose.model("users", UserSchema);
module.exports.User = User;