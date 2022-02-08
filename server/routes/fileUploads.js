const  express = require('express');
const  router = express.Router();
const {upload} = require('../helper/filehelper');
const {singleFlieUpload, multipleFileUpload, getallSingleFiles, getallMultepleFiles} = require('../controller/fileUploadSingle')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/singleFile', upload.single('file'), singleFlieUpload )
router.post('/multipleFiles', upload.array('files'), multipleFileUpload );
router.get('/getSingleFiles', getallSingleFiles)
router.get('/getMultleFiles', getallMultepleFiles)

module.exports = router;
