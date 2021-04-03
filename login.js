let inputEmail = document.getElementById("inputEmail");
// let inputPassword = document.getElementById("inputPassword");
let error = document.getElementById("error");

function validate(){
    //    if(inputEmail.value.trim() ==""||inputPassword.value.trim() ==""){
    //        alert("Fields cannot be empty");
    //        return false;
    //    }
    //    else{
    //         return true;
    //         alert("validation is proper");
    //     }


    let regexp = /^([A-Za-z0-9\.-])@([A-za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if(regexp.test(inputEmail.value)){
        error.innerHTML = "valid";
        error.style.color ="green";
        return true;
    }
    else{
        error.innerHTML=" email invalid";
        error.style.color="red";
        return false;
    }
    // else if(inputPassword.value.length<=5){
    //     alert("Password is too short");
    //     inputPassword.style.border="2px soild red";
    //     return false;
    // }
    // else{
    //     return true;
    // }


    }