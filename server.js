var express = require('express');
var app = require('express')();
var path = require('path');
const sgMail = require('@sendgrid/mail');
var bodyParser = require('body-parser');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);





app.use(bodyParser.json());
app.use(express.static('public'));





app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/index2.html'));
});

let data2 = [];


app.post('/add', function(request, response){
  let data1 = request.body;
  let datap = request.params;
  let obj = JSON.stringify(data1)
  console.log(data1[0])

const msg = {
  to: `${data1[0]}`,
  from: 'daniellaraedinburgh@hotmail.com',
  subject: 'Your Insights Account',
  text: 'LJÑ',
  html:`<strong>${data1[1]}</strong>`,

};
sgMail.send(msg);
  response.send({type:'PUT'})

});

app.post('/addsecond', function(request, response){
  let data1 = request.body;
  let datap = request.params;
  let obj = JSON.stringify(data1)
  console.log(data1[0])

const msg = {
  to: `${data1[0]}`,
  from: 'daniellaraedinburgh@hotmail.com',
  subject: 'Your Insights Account',
  text: 'LJÑ',
  html:`<strong>${data1[1]}</strong>`,

};
sgMail.send(msg);
  response.send({type:'PUT'})

});

console.log("holaaaaa")
console.log(data2)

const PORT = process.env.PORT || 5000


app.listen(PORT, function(){
  console.log('listening on *:3000');
});
