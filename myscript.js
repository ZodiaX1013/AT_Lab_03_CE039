function validator()
{
	var fname = document.forms["RegisterForm"]["fname"].value;
	var lname = document.forms["RegisterForm"]["lname"].value;
	var mail = document.forms["RegisterForm"]["mail"].value;
	var pass = document.forms["RegisterForm"]["password"].value;
	var rpass = document.forms["RegisterForm"]["repassword"].value;
	
	document.getElementById("mail").pattern = "[[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$]";	
	document.getElementById("mail").title = "example@abc.com";
	
	if (fname == "") {
		alert("First Name must be Required");
		return false;
	}
	if (lname == "") {
		alert("Last Name must be Required");
		return false;
	}
	if (mail == "") {
		alert("Email must be Required");
		return false;
	}
	if (pass == "") {
		alert("Password must be Required");
		return false;
	}
	if (rpass == "") {
		alert("Cofirm Password must be Required");
		return false;
	}
	if(pass != rpass)
	{
		alert("Password and Re Password Must Be Same");
		return false;
	}
	

}