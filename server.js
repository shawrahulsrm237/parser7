var express = require('express');
var app = express();
var fs=require("fs");

var bodyParser = require('body-parser');
var multer = require('multer');

var router = express.Router();

var isEqual=require("./isequal");
var getNum=require("./getnum");
var numbers=require("./numbers");

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());

app.get('/', function(req, res, next) {

	res.end('root');
});


var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'uploads/');
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  }
});

var upload = multer({ storage : storage}).single('file1');


app.post('/parse', function(req, res, next) {

	upload(req,res,function(err) {
        if(err) {
            return res.end("Error uploading file.");

        }
        var filename=req.file.originalname;


        var file = fs.readFileSync("uploads/"+filename,'utf8');
		text=file;
		text=text.split("\n");

		var digits=[];
		var k=0;

		var output=[];
		for(j=0;j<text.length-1;j=j+4)
		{	
			// var j=4;
			for(i=0;i<27;i=i+3){
				c1=i;
				c2=c1+1;
				c3=c2+1;
				k=j+3;
				// console.log(j+" "+k);
				var real_num=getNum(j,k,c1,c2,c3,numbers);
				if(real_num!=null){
					digits.push(real_num);	
				}else{
					real_num="*";
					digits.push(real_num);	
				}
			}
			var tempdigit='';
			digits.map(function(digit){
				tempdigit+=digit;

			});
			output.push(tempdigit);
			digits=[];	
		}

        var response={
        	status:200,
        	message:"File Uploaded Successfully",
        	filename:filename,
        	data:output
        }
        res.send(response);

    });		

});

app.listen(3000);