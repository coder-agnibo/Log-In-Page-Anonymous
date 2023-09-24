const pass = document.querySelector('#password');
const eyeShow = document.querySelector('#show');


eyeShow.onclick = function(){
    if( pass.type === "password") {
        pass.type = "text";
        eyeShow.setAttribute("class", "fa-solid fa-eye-slash");
        eyeShow.setAttribute("style", "color: #ffffff");
    } else {
        pass.type = "password";
        eyeShow.setAttribute("class", "fa-solid fa-eye");
        eyeShow.setAttribute("style", "color: #ffffff");
    }
};