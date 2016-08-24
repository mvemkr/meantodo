var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
    text: String,
    isCompleted: Boolean
});

module.exports = mongoose.model('Todo', TodoSchema);