function validation() {
    let fname =document.form1.fname.value;
    if (fname ==""|| fname==null 
    )
    {
        alert("Enter first name")
        document.form1.fname.focus();
        return false;
    
    }
    else if (! isNaN (fname)){
        alert("Enter alphabet");
    }

    let mname=document.form1.mname.value

    if(mname=="" || mname==null)
    {
        alert("Enter Middel name")
        document.form1.mname.focus();
        return false;
    }
    else if (!isNaN (mname)){
        alert("Enter alphabet");
    }
    let lname=document.form1.lname.value

    if(lname=="" || lname==null)
    {
        alert("Enter last  name")
        document.form1.lname.focus();
        return false;
    }
    else if (!isNaN (lname)){
        alert("Enter alphabet");
    }
    let male=document.form1.gen[0].checked
    let female=document.form1.gen[1].checked
  
      if(male==false && female== false)
      {
        alert("select a gender")
        return false;
      }
}