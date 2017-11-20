var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var productScheme = new Schema({
	"productId":String,
	"productName":String,
	"salePrice":Number,
	"productImage":String
});

module.exports = mongoose.model('Good',productScheme);