const UploadModel = require('../../database/model/upload.model');
const multer  = require('multer')
const uploadImg = multer({ dest: 'uploads/' })

//post method
const handleUpload = uploadImg.single('file');

const upload = (req,res)=>{
    if (!req.file) {
		return res.status(400).send('No file uploaded.');
	}
    
    var imageFile = req.file.filename;
    var success= req.file.filename+ " uploaded successfully"
    
    var imageDetails = new UploadModel({
        imagename:imageFile
    });
    imageDetails.save(function(err, doc){
        if(err)
            throw err
       res.render('upload-file',{
        title: 'Upload File',
        success: success
       }) 
    })
}   

module.exports={
    handleUpload,
    upload
}