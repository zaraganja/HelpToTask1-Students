const alertValue =()=>{
    const fname = document.getElementById("fname").value;
    const lastname=document.getElementById("lname").value;
    const passw=document.getElementById("pass").value;

    const rempass=document.getElementById("rempass");
    const uncheckedValue= "no";
    const rememberMe= rempass.checked ? rempass.value : uncheckedValue;

    // alert(fname + lastname + passw);
    alert(rememberMe)
    // alert("1"+"5")
   
}