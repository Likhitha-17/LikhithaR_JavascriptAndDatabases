function on_click() {
	var mail = document.getElementById('mailId')
	var pass = document.getElementById('inputPassword')
	if(mail.value.length==0 && pass.value.length==0)
		alert("Username and Password cannot be empty.")
	else if(mail.value.length==0)
		alert("Username cannot be empty.")
	else if(pass.value.length==0)
		alert("Password cannot be empty.")

}