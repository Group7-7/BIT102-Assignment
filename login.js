let newemail, newpass, newpass2;

function login() {
    updatelogindetails();

    if (newemail=="" || newpass=="" || newpass2==""){
        alert("Please fill in all blanks~");
    }
    else {
        alert("Login Successful!");
        window.location.href = "index.html";
        
    } 
        
    
}

function updatelogindetails() {
    newemail = document.getElementById("email1").value;
    newpass = document.getElementById("pass1").value;
    newpass2 = document.getElementById("pass22").value;
}
