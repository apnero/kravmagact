var express = require('express');
var app = express.createServer();
app.use(express.static(__dirname ));

var postmark = require("postmark")(process.env.POSTMARK_API_KEY)

postmark.send({
    "From": "apnero1776@selectemail.net",
    "To": "andrew.nero@gmail.com",
    "Subject": "Hello from Postmark",
    "TextBody": "Hello!",
    "Tag": "big-bang"
}, function(error, success) {
    if(error) {
        console.error("Unable to send via postmark: " + error.message);
       return;
    }
    console.info("Sent to postmark for delivery")
});


var port = process.env.PORT || 8080;

app.listen(port);