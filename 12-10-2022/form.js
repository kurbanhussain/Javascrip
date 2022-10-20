function validation() {
   let fname = document.form1.fname.value;
    if (fname == "" || fname == null
    ) {
        alert("Enter first name")
        document.form1.fname.focus();
        return false;
     }
    else if (!isNaN(fname)) {
        alert("Enter alphabet");
    }
    let mname = document.form1.mname.value
    if (mname == "" || mname == null) {
        alert("Enter Middel name")
        document.form1.mname.focus();
        return false;
    }
    else if (!isNaN(mname)) {
        alert("Enter alphabet");
    }
    let lname = document.form1.lname.value

    if (lname == "" || lname == null) {
        alert("Enter last  name")
        document.form1.lname.focus();
        return false;
    }
    else if (!isNaN(lname)) {
        alert("Enter alphabet");
    }
    let male = document.form1.gen[0].checked
    let female = document.form1.gen[1].checked

    if (male == false && female == false) {
        alert("select a gender")
        return false;
    }
    let check1 = document.form1.c1.checked
    let check2 = document.form1.c2.checked
    let check3 = document.form1.c3.checked

    if (check1 == false && check2 == false && check3 == false) {
        alert("select  hobbies");
        return false;
    }
    let city = document.form1.city.value
    if (city == -1) {
        alert("select city")
        return false;
    }
    let state = document.form1.state.value
    if (state == -1) {
        alert("selet state")
        return false;
    }
   
    let mno = document.form1.mno.value
    if (mno == "") {
        alert("Enter mobile no")
        return false;
    }
    else if (isNaN(mno)) {
        alert("Enter a digits")
        return false;
    }
    else if (mno.length < 10) {
        alert("enter 10 digits")
        return false;
    }
    
    let email = document.form1.email.value
    if (email == "") {
        alert("Enter a email")
        return false;
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
    }
    else {
        alert("You have entered an invalid email address!")
        return false;
    } 
    let pass = document.form1.pass.value
    let cpass = document.form1.cpass.value

    if (pass == "" || pass == null) {
        alert("Enter password");
        return false;
    }
   if ("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$")
        return true;
    {
        alert("Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:")
        return false;
    } 
    if (pass != cpass) {
        alert("password and confrim password does not match")
        return false;
    }
    
}