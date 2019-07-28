var http = require("http");

/* Create a server that runs on 1234 port */
// http.createServer((request, response) => {
//     response.writeHead(200, {"Content-Type" : "text/html"});
//     const date = dt.GetDate();
//     console.log(date);    
//     response.end("Node js getting started");
// }).listen(1234);

/* Read a file */
// var fs = require("fs");
// fs.readFile("package.json", (error, buffer) => {
//     if(error != null){
//         console.error(error.message);
//         return;
//     }
//     const bufferString = buffer.toString();
//     console.log('buffer.toString() :', bufferString);

//     var bufferObject = JSON.parse(bufferString);
//     console.log('bufferObject.name :', bufferObject.name); 
// });

/* Produce an HTML form: */

var formidable = require("formidable");
var fs = require('fs');

http.createServer(function (req, res) {
    if (req.url == '/fileupload') {
      var form = new formidable.IncomingForm();
      form.parse(req, function (err, fields, files) {
        console.log(fields);        
        var oldpath = files.filetoupload.path;
        var newpath = 'C:/Users/OZGURSARIKAMIS/Desktop/' + files.filetoupload.name;
        fs.rename(oldpath, newpath, function (err) {
          if (err) throw err;
          res.write('File uploaded and moved!');
          res.end();
        });
   });
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
      res.write('<input type="file" name="filetoupload"><br>');
      res.write('<input type="submit">');
      res.write('</form>');
      return res.end();
    }
  }).listen(8080);