var express = require('express');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var request = require('request');
var app = express();


app.use(express.static('app'));
app.use(bodyParser.json({}));

var data;

// NB! No need to recreate the transporter object. You can use
// the same transporter object for all e-mails
// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Mailgun',
    auth: {
        user: 'postmaster@sandbox48bb4a05facb4c6b94f74a782467f8a8.mailgun.org',
        pass: 'a1da5f034da62091a221cd2a66eb9768'
    }
});

app.post('/email', function (req, res){

	//Populating the data variable with the user details
	data = req.body;

	// setup e-mail data with unicode symbols
	var mailOptions = {
	    from: 'WhatScore? <postmaster@sandbox48bb4a05facb4c6b94f74a782467f8a8.mailgun.org>', 
	    to: 'ade_aking14@yahoo.com', 
	    subject: 'Email from WhatScore?', // Subject line
	    html: '"Hi, an email from '+data.Name+' was just sent. The message contains the following... <br><br>' + 
	    data.Message+'"' + '<br><br> Reply to this user at ' + data.Email + '<br> Kind Regards, <br><br> WhatScore?' 
	};

	// send mail with defined transport object
	transporter.sendMail(mailOptions, function(error, info){
	    if(error){

	      	res.status(400);
	        res.send({error: 'mailError', message: 'Couldnt send email'});
	    }
	    //console.log('Message sent: ' + info.response);
	    res.status(204);
	    res.end();
	});	
})

app.get('/apiService', function(req, res) {

    request(req.query.url,function(err, response, body){
		res.send(body);
		
		
	}).on('error', function(e){
		console.log("Got error: " + e.message);
	});

});

app.get('/News', function(req, res) {
    request('https://skysportsapi.herokuapp.com/sky/getnews/football/v1.0/',function(err, response, body){
		//console.log(arguments);
		res.send(body);
		
		
	}).on('error', function(e){
		console.log("Got error: " + e.message);
	});

});


app.listen(8090);

console.log('Express listening on port 8090');

