arrayNames = [];
arrayUserNames = [];
arrayPasswords = [];



msgs1 = [];
msgs2 = [];
arrayEmails = [];

var arrayTest = [];
var arrayTest2 = [];

function getAllInputs(){
  getName();
  getEmail();
  getUsername();
  getPassword();
  setNameUsernameMessage();
  setNamePasswordMessage();
  send1();
  send2();
  rel();
}

function send1(){
  var xhr = [];
  var data = [];
  for(let i = 0;i<arrayEmails.length;i++){
  xhr[i] = new XMLHttpRequest();
  var url = "/add"
  xhr[i].open("POST", url, true);
  xhr[i].setRequestHeader("Content-type", "application/json");
  xhr[i].onreadystatechange = function () {
      if (xhr[i].readyState == 4 && xhr[i].status == 200) {
          var json = JSON.parse(xhr[i].responseText);
  }
}
  arrayTest2.push(arrayEmails[i])
  arrayTest2.push(msgs1[i])
  console.log(arrayTest2)
  data = JSON.stringify(arrayTest2);
  xhr[i].send(data);
  console.log(arrayTest)
  arrayTest2.splice(0, 2);
  }
}


function send2(){
  var xhr = [];
  var data = []
  for(let i = 0;i<msgs2.length;i++){
  xhr[i] = new XMLHttpRequest();
  var url = "/addsecond"
  xhr[i].open("POST", url, true);
  xhr[i].setRequestHeader("Content-type", "application/json");
  xhr[i].onreadystatechange = function () {
      if (xhr[i].readyState == 4 && xhr[i].status == 200) {
          var json = JSON.parse(xhr[i].responseText);
          }
        }
  arrayTest.push(arrayEmails[i])
  arrayTest.push(msgs2[i])
  data = JSON.stringify(arrayTest);
  xhr[i].send(data);
  console.log(arrayTest)
  arrayTest.splice(0, 2);
  }
}


function getName(){
  var inputNames = document.getElementsByName('inputNames[]');
  for(var i = 0; i < inputNames.length; i ++)
  arrayNames.push(inputNames[i].value)
  return arrayNames;
}
function getUsername(){
  var inputUserNames = document.getElementsByName('inputUserNames[]');
  for(var i = 0; i < inputUserNames.length; i++)
  arrayUserNames.push(inputUserNames[i].value);
  return arrayUserNames;
}
function getEmail(){
  var inputEmails = document.getElementsByName('inputEmails[]');
  for(i = 0; i < inputEmails.length; i++)
  arrayEmails.push(inputEmails[i].value)
  return arrayEmails;
}
function getPassword(){
  var inputPasswords = document.getElementsByName('inputPasswords[]');
  for(var i = 0; i < inputPasswords.length; i ++)
  arrayPasswords.push(inputPasswords[i].value)
  return arrayPasswords;
}




function setNameUsernameMessage(){
  for( var i = 0; i < arrayNames.length; i++)
  msgs1.push(setNameUsername(arrayNames[i], arrayUserNames[i]))
  return msgs1;
}
function setNamePasswordMessage(){
  for(var i = 0; i < arrayNames.length; i++)
  msgs2.push(setNamePassword(arrayNames[i], arrayPasswords[i]))
  return msgs2;
}
function setNameUsername(name, username){
  msg = "Hi " + name + ",<br>" + "\n" + "<br>I have created an InSights account for you. <br>Your username to log into InSights is as follows;<br>" +
  "\n" + "-" + username + "<br>\n" +
  "Your password will be sent to you in a separate email. <br>If you have any problems or questions, please let us know.<br> Kind regards, <br>Craneware Support";
  return msg;
}
function setNamePassword(name, password){
  msg = "Hi " +  name + ", Your password to log into InSights is as follows;" + password + "The login page can be located here;https://insight.craneware.com/ Your username will be sent to you in a separate email. If you have any problems or questions, please let us know. Kind regards, Craneware Support"
  return msg
}


function rel(){
  setTimeout(function(){
    location.reload(true);

  }, 1500);
}
