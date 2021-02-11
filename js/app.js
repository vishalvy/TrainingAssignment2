
var fname = document.getElementById('first_name');
var lname = document.getElementById('last_name');
var phone1=document.getElementById('phone_no');
var email = document.getElementById('email');
var password = document.getElementById('password');
var confirmPassword = document.getElementById('confirm_password');
var officeno = document.getElementById('office_no');
var about_u = document.getElementById('about_you');
var valid = false;
const month = document.getElementById('select_month');
const day = document.getElementById('select_day');
const year = document.getElementById('select_year');
const setAge = document.getElementById('age');
var submit=document.getElementById('submit');


//Submit Event Listener
submit.addEventListener('click',function(e){
    e.preventDefault();
	validateForm();
	validateForm2();
});


// Validation Function
function validateForm(){  
	var fnameval = fname;
	var lnameval = lname.value;
	var emailval = email.value.trim();
	var fpassword = password.value;
	var fcpassword = confirmPassword.value;
	var phoneval = phone1.value;
	var officeval = officeno.value;
	var ab_u = about_u.value;
	var mailregex = /^(([^<>!@#$%&^*()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;	
	var correct = /^[^\s][A-Za-z\s]+$/;

// Name Validation
if (fnameval.value == ''){  
	document.getElementById('fname').innerHTML ="FirstName should not be blank!";
	return false;
}
else if(fnameval.value.trim().length < 3 || fnameval.value.length > 15){
	document.getElementById('fname').innerHTML ="Firstname should be more than 3 and less than 15";
	return false;
}
else if(!correct.test(fnameval.value)){
	document.getElementById('fname').innerHTML ="Firstname can be only Alphabets";
	return false;
}
else {
	document.getElementById('fname').innerHTML ="";
}



if (lnameval===''){  
	document.getElementById('lname').innerHTML ="LastName should not be blank!";
	return false;
}
else if(lnameval.length < 3 || lnameval.length > 15){
	document.getElementById('lname').innerHTML ="LastName should be more than 3 and less than 15";
	return false;
}
else if(!correct.test(lnameval)){
	document.getElementById('lname').innerHTML ="Lastname can be only Alphabets";
	return false;
}
else {
	document.getElementById('lname').innerHTML ="";
}


// Phone Number Validation
if(phoneval===''){
	document.getElementById('p_n').innerHTML ="Please enter your phone number.";
	return false;
}else if((phoneval.length > 10) || (phoneval.length < 10)){
	document.getElementById('p_n').innerHTML ="Phone Number should be exactly 10 digits only.";
	return false;
}
else {
	document.getElementById('p_n').innerHTML ="";
}


// Office Number Validation
if(isNaN(officeval)){
	document.getElementById('o_n').innerHTML ="Only Numbers allowed.";
	return false;
}
else {
	document.getElementById('o_n').innerHTML ="";
}



// Email Validation
if(emailval===''){
	document.getElementById('email_id').innerHTML ="Please enter your email id";
	return false;
}
else if (!emailval.match(mailregex)){
	document.getElementById('email_id').innerHTML ="Please enter valid email id";
	return false;
}
else {
	document.getElementById('email_id').innerHTML ="";
}





// Password Validation
if (fpassword.trim() === '') {
	document.getElementById('p_w').innerHTML ="Password Should not be blank!";
	return false;
}
else if (fpassword.length < 5 || fpassword.length > 15) {
	document.getElementById('p_w').innerHTML ="Password Should be between 5 to 15 characters";
	return false;
}
else if (!checkPassword(fpassword)) {
	document.getElementById('p_w').innerHTML ="Invalid Password";
	return false;
}
else {
	document.getElementById('p_w').innerHTML ="";
}



if(fcpassword ===''){
	document.getElementById('p_cw').innerHTML ="Please confirm your password";
	return false;
}
else if(fpassword != fcpassword){
	document.getElementById('p_cw').innerHTML ="Password doesn't match";
	return false;
}
else {
	document.getElementById('p_cw').innerHTML ="";
}


// About You Validation
if (ab_u===''){
	document.getElementById('a_u').innerHTML ="Enter something about you";
	return false;
}
else {
	document.getElementById('a_u').innerHTML ="";
}



// DOB & Age Calculation

    // Validate Date---------
	if ((month.value === 'month') && (day.value === 'day') && (year.value === 'year')){
        document.getElementById('ageid').innerHTML ="Please Select Birthdate";
        return false;		
	}
    else if (month.value === 'month') {
        document.getElementById('ageid').innerHTML ="Please Select Month";
        return false;
    }
    else if (day.value === 'day') {
        document.getElementById('ageid').innerHTML ="Please Select Day";
        return false;
    }
    else if (year.value === 'year') {
        document.getElementById('ageid').innerHTML ="Please Select Year";
        return false;
    }else{
		document.getElementById('ageid').innerHTML ="";
	}

    let monthVal = month.value;
    let dayVal = parseInt(day.value);
    let yearVal = parseInt(year.value); 

    // Months With 30 days---------------

    if (monthVal === 'april' || monthVal == 'june' || monthVal == 'sep' || monthVal == 'nov') {
        if (dayVal > 30) {
            document.getElementById('ageid').innerHTML ="Invalid Day";
            return false;
        }
    }

    if (monthVal === 'feb') {
        let leapYear = false;

        if ( ( !(yearVal % 4) && yearVal % 100) || !(yearVal % 400) ) {
            leapYear = true;
        }
        
        // if Year is not a Leap year then day should not be greater than 28-----

        if ((leapYear == false) && dayVal >= 29) {
            document.getElementById('ageid').innerHTML ="Invalid Date";
            return false;
        }

        // if Year is a Leap year then day should not be greater than 29-----

        if ((leapYear == true) && dayVal > 29) {
            document.getElementById('ageid').innerHTML ="Invalid Date";
            return false;
        }
    }

    // calculate Age--------

    let monthIndex = ['jan','feb','march','april','may','june','july','aug','sep','oct','nov','dec'];

    let crrDate = new Date();
    let birthDate = new Date(yearVal,monthIndex.indexOf(monthVal),dayVal);
    let diffInMS = crrDate.valueOf() - birthDate.valueOf();

    // ( 1000 * 60 * 60 * 24 * 365.25 ) MilliSec Pre Year
    let age = Math.floor(diffInMS / ( 1000 * 60 * 60 * 24 * 365.25 ) );

    // (1000 * 60 * 60 * 24) MilliSec Per Day---
    let days = Math.floor((diffInMS % ( 1000 * 60 * 60 * 24 * 365.25 )) / (1000 * 60 * 60 * 24) ) ;


    let months = Math.floor(days/30) / 100;

	ageValue = age + months;
	

    if(ageValue < 0){
		setAge.value = "";
	}
	else{
		setAge.value = ageValue;
	}




	if((ageValue<18)&&(ageValue>=0)){
		document.getElementById('ageid').innerHTML = "Age should be more than 18!";
		return false;
	}
	if(ageValue<0){
		document.getElementById('ageid').innerHTML = "Invalid Date of birth";
		return false;
	}else{
		document.getElementById('age').innerHTML = ageValue+" "+"Years";
		return true;
	}
}


function validateForm2(){

	var cbbike = document.getElementById("checkbox_sample18");
	var cbread = document.getElementById("checkbox_sample19");
	var cbplay = document.getElementById("checkbox_sample20");
	var radio1 = document.getElementById('residence1');
	var radio2 = document.getElementById('residence2');
	// Radio Validation
	if ((!radio1.checked) && (!radio2.checked)){
		document.getElementById('g_d').innerHTML ="Please select your gender";
		return false;
	}
	else {
		document.getElementById('g_d').innerHTML ="";
	}

	// Intrest Validation
	if (!(cbbike.checked) && !(cbread.checked) && !(cbplay.checked))
	{
		document.getElementById('intrest_r').innerHTML ="Provide atleast one interest";
		return false;
	}
	else {
		document.getElementById('intrest_r').innerHTML ="";
	}
}

//checkpassword function
function checkPassword(password) {
    const passRegx = /^(?=.*\d)(?=.*[a-z]).{4,14}$/;
    return passRegx.test(password);  
}