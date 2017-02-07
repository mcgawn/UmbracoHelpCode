//Single coure apply now validation

function validate_form() {
var firstname = document.getElementById("first_name").value;
var surname = document.getElementById("last_name").value;
var email = document.getElementById("email").value;
var telephone = document.getElementById("phone").value;

var emailNoSpace = email.replace(/^\s+|\s+$/, '');
var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/;
var atpos = email.indexOf("@");
var dotpos = email.lastIndexOf(".");

var illegalChars = /[\(\)\<\>\,\;\:\\\"' '\[\]]/;
var telNoSpace = telephone.replace(/[\(\)\.\-\ ]/g, '');
	
if (firstname == null || firstname.length == 0 || firstname == "" ||
  surname == null || surname.length == 0 || surname == "" ||
  email == null || email.length == 0 || email == "" ||
  telephone == null || telephone.length == 0 || telephone == "") {
  document.getElementById("loading").style.display = "block";
  document.getElementById('loading').innerHTML = "Please complete the fields";
 return false;
}

if (firstname.length < 2 || /\d+/g.test(firstname) || !(/^[a-zA-Z\-']*$/.test(firstname))) {
  document.getElementById("first_name").focus;
  document.getElementById("loading").style.display = "block";
  document.getElementById('loading').innerHTML = "Please enter a valid first name";
 return false;
}

if (surname.length < 2 || /\d+/g.test(surname) || !(/^[a-zA-Z\-']*$/.test(surname))) {
 document.getElementById("last_name").focus;
 document.getElementById("loading").style.display = "block";
 document.getElementById('loading').innerHTML = "Please enter a valid last name";
 return false;
}

if (!emailFilter.test(emailNoSpace) || illegalChars.test(emailNoSpace) || atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
 document.getElementById("email").focus;
 document.getElementById("loading").style.display = "block";
 document.getElementById('loading').innerHTML = "Please enter a valid email address";
 return false;
}

if (telNoSpace.length < 10 || isNaN(parseInt(telNoSpace))) {
 document.getElementById("phone").focus;
 document.getElementById("loading").style.display = "block";
 document.getElementById('loading').innerHTML = "Please enter a valid mobile number";
 return false;
}

var el = document.getElementsByName("phone")[0];
var val = el.value.replace(/\s/g, "");
phone.value = val;
return true;
};

//Validate form with list

function validateForm(){
var firstname = document.getElementById("first_name").value;
var surname = document.getElementById("last_name").value;
var email = document.getElementById("email").value;
var telephone = document.getElementById("phone").value;
var e = document.getElementById("CourseCodeSelect");
var course = e.options[e.selectedIndex].value;

var emailNoSpace = email.replace(/^\s+|\s+$/, '');
var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/;
var atpos = email.indexOf("@");
var dotpos = email.lastIndexOf(".");

var illegalChars = /[\(\)\<\>\,\;\:\\\"' '\[\]]/;
var telNoSpace = telephone.replace(/[\(\)\.\-\ ]/g, '');
	
if (firstname == null || firstname.length == 0 || firstname == ""  ||
  surname == null || surname.length == 0 || surname == ""  ||
  email == null || email.length == 0 || email == ""  ||
  telephone == null || telephone.length == 0 || telephone == "") {
  document.getElementById("loading").style.display = "block";
  document.getElementById('loading').innerHTML = "Please complete the fields";
 return false;
};

if (firstname.length < 2 || /\d+/g.test(firstname) || !(/^[a-zA-Z\-']*$/.test(firstname))) {
 document.getElementById("first_name").focus;
 document.getElementById("loading").style.display = "block";
 document.getElementById('loading').innerHTML = "Please enter a valid first name";
 return false;
};

if (surname.length < 2 || /\d+/g.test(surname) || !(/^[a-zA-Z\-']*$/.test(surname))) {
 document.getElementById("last_name").focus;
 document.getElementById("loading").style.display = "block";
 document.getElementById('loading').innerHTML = "Please enter a valid last name";
 return false;
};

if (!emailFilter.test(emailNoSpace) || illegalChars.test(emailNoSpace) 
	|| atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
 document.getElementById("email").focus;
 document.getElementById("loading").style.display = "block";
 document.getElementById('loading').innerHTML = "Please enter a valid email address";
 return false;
};

if (telNoSpace.length < 10 || isNaN(parseInt(telNoSpace))) {
  document.getElementById("phone").focus;
  document.getElementById("loading").style.display = "block";
  document.getElementById('loading').innerHTML = "Please enter a valid mobile number";
  return false;
};
															   
if (course == null || course == "0") {
  document.getElementById("loading").style.display = "block";
  document.getElementById('loading').innerHTML = "Please select a course of interest";
  return false;
};

var el = document.getElementsByName("phone")[0];
var val = el.value.replace(/\s/g, "");
phone.value = val;
return true;
};