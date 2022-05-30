
var email,password;

function checkcredentials() {
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    if (email=="abc@xyz.com" && password==123456789) {
        alert("You have entered correct credentials");
    }
    else{
        alert("You have entered incorrect credentials");
        document.getElementById("Title").style.display="flex";
    }

}