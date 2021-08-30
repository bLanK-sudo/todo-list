const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage({
    destination:'./public/avatar',
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload = multer({
    limits:{
        fileSize:1000000
    },
    fileFilter(req, file, cb){
        if(!file.originalname.match(/\.(jpeg|jpg|png|)$/)){
            return cb(new Error('Please upload an image of JPG, JPEG or PNG format!'))
        }
        cb(undefined, true)
    },
    storage
})
module.exports = upload