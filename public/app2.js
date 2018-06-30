

var room = 1;
function userFields() {
  room++;
  var objTo = document.getElementById('users')
  var divtest = document.createElement("div");
  divtest.setAttribute("class", "form-group removeclass"+room);
  var rdiv = 'removeclass'+room;
  divtest.innerHTML = '<div class="col-sm-3 nopadding"><div class="form-group"><input type="text" class="form-control" id="Schoolname" name="inputNames[]" value="" placeholder="Name"></div></div><div class="col-sm-3 nopadding"><div class="form-group"> <input type="text" class="form-control" id="Major" name="inputEmails[]" value="" placeholder="Email"></div></div><div class="col-sm-3 nopadding"><div class="form-group"> <input type="text" class="form-control" id="Degree" name="inputUserNames[]" value="" placeholder="Username"></div></div><div class="col-sm-3 nopadding"><div class="form-group"><div class="input-group"> <input class="form-control" id="educationDate" name="inputPasswords[]" placeholder="Password"><div class="input-group-btn"> <button class="btn btn-danger" type="button" onclick="remove_education_fields('+ room +');"> <span class="glyphicon glyphicon-minus" aria-hidden="true"></span> </button></div></div></div></div><div class="clear"></div>';

  objTo.appendChild(divtest)
}
function remove_education_fields(rid) {
  $('.removeclass'+rid).remove();
}
