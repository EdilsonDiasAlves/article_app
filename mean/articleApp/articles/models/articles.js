var mongoose = require('mongoose');

var ArticleSchema = mongoose.Schema({
    title: 'string',
    username: 'string',
    text: 'string',
    timestamp: {type: Date, default: Date.now}
});

var Article = mongoose.model('Article', ArticleSchema);