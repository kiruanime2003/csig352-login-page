document.addEventListener("DOMContentLoaded", function(){

    var imageIcon = Array.from(document.querySelectorAll("img"));
    var passwordInput = document.getElementById("password");
    var passwordInput1 = document.getElementById("password1");

    imageIcon[0].addEventListener("click", function(){
        
        if(imageIcon[0].classList.contains("closed")){
            imageIcon[0].src = './assets/eye-on.svg';
            passwordInput.type = "text";
            imageIcon[0].classList.remove("closed");
        }

        else{
            imageIcon[0].src = './assets/eye-off.svg';
            passwordInput.type = "password";
            imageIcon[0].classList.add("closed");
        }
    });

    imageIcon[1].addEventListener("click", function(){
        
        if(imageIcon[1].classList.contains("closed")){
            imageIcon[1].src = './assets/eye-on.svg';
            passwordInput1.type = "text";
            imageIcon[1].classList.remove("closed");
        }

        else{
            imageIcon[1].src = './assets/eye-off.svg';
            passwordInput1.type = "password";
            imageIcon[1].classList.add("closed");
        }
    });
});