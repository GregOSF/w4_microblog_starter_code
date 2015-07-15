var mongoose = require('mongoose');

// mongoose.connect("mongodb://localhost/microblog");

var Schema = mongoose.Schema;


// Post Schema
var PostSchema = new Schema({
	name: {
		type: Schema.Types.ObjectId,
		ref: 'Author'
	},
	text: {
		type: String,
		default: ""
	},
	comment: {
		type: Schema.Types.ObjectId,
		ref: 'Comments'
	}
});


// Comment Schema
var commentSchema = new Schema({
	text: {
		type: String,
		default: ""
	}
});

// Author Schema
var authorSchema = new Schema({
	name: {
		type: String,
		default: ""
	},
	haircolor: {
		type: String,
		default:""
	}});

//Create Models
var Post = mongoose.model('Post', PostSchema);
var Author = mongoose.model('authors', authorSchema);
var Comments = mongoose.model('comments', commentSchema);


// Export all models
module.exports.Post = Post;
module.exports.Author = Author;
module.exports.Comments = Comments;

