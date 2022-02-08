const SingleFile = require('../models/SingleFile')
const MultipleFile = require('../models/multipleFiles')


const singleFlieUpload = async (req, res, next) => {
    try{
        const file = new SingleFile({
            fileName: req.file.originalname,
            filePath: req.file.path,
            fileType: req.file.mimetype,
            fileSize: fileSizeFomatter(req.file.size, 2)  // 0.00
        })
        await file.save()
        console.log(file)
        res.status(200).send('Файл Успешно загружен')
    }
    catch(error){
        res.status(400).send(error.message)
    }
}


const multipleFileUpload = async (req, res, next) => {
    try{
        let filesArray = [];
        req.files.forEach(element => {
            const file = {
                fileName: element.originalname,
                filePath: element.path,
                fileType: element.mimetype,
                fileSize: fileSizeFomatter(element.size, 2)
            }
            filesArray.push(file)
        })
        const multipleFiles = new MultipleFile({
            title: req.body.title,
            files: filesArray
        })
        await multipleFiles.save()
        res.status(200).send('Файлы Успешно загружаны')
    }catch(error) {
        res.status(400).send(error.message);
    }
}





const getallSingleFiles = async (req, res, next) => {
    try{
        const files = await SingleFile.find();
        res.status(200).send(files)


    }catch(error) {
        res.status(400).send(error.message)
    }
}
const getallMultepleFiles = async (req, res, next) => {
    try{
        const files = await MultipleFile.find();
        res.status(200).send(files)


    }catch(error) {
        res.status(400).send(error.message)
    }
}


const fileSizeFomatter = (bytes, decimal) => {
    if(bytes === 0) {
        return '0 Bytes'
    }
    const dm = decimal || 2
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB'];
    const index = Math.floor(Math.log(bytes) / Math.log(1000));
    return parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + ' ' + sizes[index]
}


module.exports = {
    singleFlieUpload,
    multipleFileUpload,
    getallSingleFiles,
    getallMultepleFiles
}