let newname, newemail, newmass;

function contact() {
    updatecontactdetails();

    if (newname=="" || newemail=="" || newmass==""){
        alert("Please fill in all blanks~");
    }
    else {
        alert("Save successfully,Thank you for your suggestion!(Click confirm to go back to HOME)");
        window.location.href = "index.html";
        
    } 
        
    
}

function updatecontactdetails() {
    newname = document.getElementById("name").value;
    newemail = document.getElementById("email").value;
    newmass = document.getElementById("message").value;
}