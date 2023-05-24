const password = document.getElementById('passw');
const toggleBtn = document.getElementById('eye');
const num = document.getElementById('number');
const upper = document.getElementById('uppercase');
const specialC = document.getElementById('special_char');
const islength = document.getElementById('isAtleast8');

//validate
function checkPassword(data){
    //javascript regualr expression pattern
    const number = new RegExp('(?=.*[0-9])');
    const uppercase = new RegExp('(?=.*[A-Z])');
    const special_char = new RegExp('(?=.*[!@#\$%\^&\*])');
    const isAtleast8 = new RegExp('(?=.{8,})');


    //number validation
    if(number.test(data)){
        num.classList.add('valid');
    }else{
        num.classList.remove('valid');
    }
    if(uppercase.test(data)){
        upper.classList.add('valid');
    }else{
        upper.classList.remove('valid');
    }
    if(special_char.test(data)){
        specialC.classList.add('valid');
    }else{
        specialC.classList.remove('valid');
    }
    if(isAtleast8.test(data)){
        islength.classList.add('valid');
    }else{
        islength.classList.remove('valid');
    }
}