var fs = require("fs");

var readThis = function readThis(outputShow){
fs.readFile("random.txt", outputShow, function(error, data) {
    if (err) {
      console.log(err);
    } else {
      console.log("Test");
    }
  });
}