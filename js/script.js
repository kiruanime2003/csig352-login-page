document.addEventListener("DOMContentLoaded", function(){

    var imageIcon = document.querySelector("img");
    var passwordInput = document.getElementById("password");

    imageIcon.addEventListener("click", function(){
        
        if(imageIcon.classList.contains("closed")){
            imageIcon.src = './assets/eye-on.svg';
            passwordInput.type = "text";
            imageIcon.classList.remove("closed");
        }

        else{
            imageIcon.src = './assets/eye-off.svg';
            passwordInput.type = "password";
            imageIcon.classList.add("closed");
        }
    });
});