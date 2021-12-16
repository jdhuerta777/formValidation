function validate() {
	var firstname = document.myForm.fname;
	var lastname = document.myForm.lname;
	var eletter = document.myForm.email;
	var contact = document.myForm.pnumber;
	var agenumber = document.myForm.age;
	var gender = document.myForm.gengen;

	if(letterOnlyF(firstname)) {
		if(letterOnlyL(lastname)) {
			if(mailSpecial(eletter)) {
				if (numberOnly(contact)) {
					if (genderselect(gender)) {
						if (oldEnough(agenumber)) {

						}
					}
				}
			}
		}
	}
	return false;
}

function letterOnlyF(firstname) {
	var letters = /^[A-Za-z]+$/;
	if (firstname.value.length==0) {
		alert('Enter first name please !!!');
		firstname.focus();
		return false;
	}
	else if(firstname.value.match(letters)) {
		return true;
	}
	else {
		alert('Please use letters only !!!!');
		firstname.focus();
		return false;
	}
}

function letterOnlyL(lastname) {
	var letters = /^[A-Za-z]+$/;
	if (lastname.value.length==0) {
		alert('Enter last name please !!!');
		lastname.focus();
		return false;
	}
	else if(lastname.value.match(letters)) {
		return true;
	}
	else {
		alert('Please use letters only !!!!');
		lastname.focus();
		return false;
	}
}

function mailSpecial(eletter) {
	var characters = /^[A-Za-z0-9.-_]+@[A-Za-z0-9.-_]+.[A-Za-z]$/ /*/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{3}$/*/;
	if (eletter.value.length==0) {
		alert('Enter email plz!!!!!');
		eletter.focus();
		return false;
	}
	else if(eletter.value.match(characters)) {
		return true;
	}
	else {
		alert('Please enter valid email!!!!');
		eletter.focus();
		return false;
	}
}

function numberOnly(contact) {
	var numbers = /^[0-9]$/;
	if(contact.value.length==0 ) {
		alert('Please enter contact number');
		contact.focus();
		return false;
	}
	else if(number.value.length>10) {
		alert('Please enter a valid contact number');
		contact.focus();
		return false;
	}
	else if(number.value.match(numbers)) {
		return true;
	}
	else {
		alert('Please check your contact number');
		return false;
	}
}

function genderselect(gender) {
	if(gender.value=="default") {
		alert('Please select gender!');
		gender.focus();
		return false;
	}
	else {
		return true;
	}
}

function oldEnough(agenumber){
	if(agenumber[0].checked == true) {
		return true;
	}
	else if(agenumber[1].checked == true) {
		alert('You are not old enough to Volunteer with us. Sorry!! come back when your 18');
		return false;
	}
	else {
		alert('Please check what age you are!');
		return false;*/
	}
}
