let newfirst, newlast, newemail, newpass, newpass2;

function signup() {
    updatesignupdetails();

    if (newfirst=="" || newlast=="" || newemail=="" || newpass=="" || newpass2==""){
        alert("Please fill in all blanks~");
    }
    else if(!(newfirst=="" && newlast=="" && newemail=="") && !(newpass==newpass2)){
        alert("Both passwords must be the same");

    }
    else {
        alert("Registration Successful! Already logged in automatically~");
        window.location.href = "index.html";
    } 
        
    
}

function updatesignupdetails() {
    newfirst = document.getElementById("first").value;
    newlast = document.getElementById("last").value;
    newemail = document.getElementById("email").value;
    newpass = document.getElementById("pass").value;
    newpass2 = document.getElementById("pass2").value;
}
