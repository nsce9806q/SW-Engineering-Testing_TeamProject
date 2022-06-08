// 데이터베이스 스키마
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    body : {
        type : String,
        required : true
    },
    username : String,
    }, {
        timestamps: true,
});

const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

module.exports = BlogPost
