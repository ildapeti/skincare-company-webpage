window.onload=function() {
	const signUpButton = document.getElementById('signUp');
	const signInButton = document.getElementById('signIn');
	const container = document.getElementById('container');

	signUpButton.addEventListener('click', () => {
		container.classList.add("right-panel-active");
	});

	signInButton.addEventListener('click', () => {
		container.classList.remove("right-panel-active");
	});
}

function validation() {
	var name = document.forms["form"]["name"].value;
	var email = document.forms["form"]["email"].value;
	var password = document.forms["form"]["password"].value;
	if (name==null || name==""){
		document.getElementById("msg").innerHTML= "<span style='color: red; font-weight:bold'>Name is required</span>";
		return false;
	}else {
		document.getElementById('msg').innerHTML = "";
	}
	if (email==null || email==""){
		document.getElementById("msg2").innerHTML= "<span style='color: red; font-weight:bold'>Email is required</span>";
		return false;
	}else {
		document.getElementById('msg2').innerHTML = "";
	}
	if (password==null || password==""){
		document.getElementById("msg3").innerHTML= "<span style='color: red; font-weight:bold'>Password is required</span>";
		return false;
	} else {
		document.getElementById('msg3').innerHTML = "";
	}
	document.getElementById("form").reset();
}

function valid () {
	var email = document.getElementById("email2").value;
	var pass = document.getElementById("pass2").value;
	if (email==null || email==""){
		document.getElementById("msg4").innerHTML= "<span style='color: red; font-weight:bold'>Email is required</span>";
		return false;
	} else {
		document.getElementById('msg4').innerHTML = "";
	}
	if (pass==null || pass==""){
		document.getElementById("msg5").innerHTML= "<span style='color: red; font-weight:bold'>Password is required</span>";
		return false;
	} else {
		document.getElementById('msg5').innerHTML = "";
	}
	document.getElementById("form2").reset();
}
