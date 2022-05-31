
var email,password;
document.getElementById("home").hidden=true;
function checkcredentials() {
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    if (email=="abc@xyz.com" && password==123456789) {
        document.getElementById("form").style.display="none";
        document.getElementById("home").hidden=false;
    }
    else if (email!="abc@xyz.com" && password!=123456789){
        alert("You have entered incorrect credentials");
    }
    else if (email!="abc@xyz.com"){
        alert("You have entered incorrect email");
    }
    else{
        alert("You have entered incorrect password");
    }

}