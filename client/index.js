var Tesseract = require('tesseract.js')
fs.readFile('./test pic.gif', function read(err, data) {
    if (err) {
        throw err;
    }
  Tesseract.detect(data)
.then(function(result){
    console.log(result)
})
});

