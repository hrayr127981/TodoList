const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let todoSchema = Schema({
    content: {
        type: String,
        maxlength: 30,
        default: null
    },
    createdate: {
        type: Date,
        default: Date.now()
    },
    date: {
        type: String,
        default: ' '
    }

});



module.exports = mongoose.model('todoo', todoSchema);
