const mongoose = require('mongoose');

const uploadSchema = mongoose.Schema(
	{
		imagename: String
	});

const uploadModel = mongoose.model('uploadimage', uploadSchema);
module.exports = uploadModel;
