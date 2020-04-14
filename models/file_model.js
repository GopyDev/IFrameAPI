var mongoose = require('mongoose');

var file = mongoose.model('files', {
    file_url: String,
    name: String,
    embed_url: String,
    iframe_code: String,
    date:Date,
});


mongoose.connect('mongodb://localhost:27017/uploaded_data', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = file;