
    const userEmail = document.getElementById('userEmail');
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const pass = document.getElementById('exampleInputPassword1');
    const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    const retypePass = document.getElementById('exampleInputPassword2');
    const userName = document.getElementById('exampleInputFirstName');
    const country = document.getElementById('country-id');
    
    const emailErrMsg = document.querySelector('.span-email');
    const passErrMsg = document.querySelector('.span-pas');
    const passRetypeErrMsg = document.querySelector('.span-pas-retype');
    const fnameErrMsg = document.querySelector('.span-fname');
    const countryErrMsg = document.querySelector('.span-country');
    
    

    document.getElementById('register').addEventListener('click', function() {
        emailErrMsg.innerHTML = ``;
        passErrMsg.innerHTML = ``;
        passRetypeErrMsg.innerHTML = ``;
        fnameErrMsg.innerHTML = ``;
        countryErrMsg.innerHTML = ``;
          
    if(!validateEmail(emailRegex, userEmail.value)) {
        emailNotValid(userEmail, emailErrMsg, 'Enter valid e-mail address');
    } else {
        emailValid(userEmail, emailErrMsg, '');
    };

    if(!validatePass(passRegex, retypePass.value)) {
        passNotValid(pass, passErrMsg, 'Enter valid password. It may contain letters and numbers, min 8 symbols long');
    } else {
        passValid(pass, passErrMsg, '');
        
    };

    if(pass.value == retypePass.value) {
        retypePass.classList.add('is-valid');
    } else {
        retypePass.classList.add('is-invalid');
        passRetypeErrMsg.innerHTML += `Passwords must match`;
    };

    if(userName.value == '') {
        userName.classList.add('is-invalid');
        fnameErrMsg.innerHTML += `Please fill in your name`;
    } else {
        userName.classList.add('is-valid');
    };

    if(country.options[country.selectedIndex].text !== `Latvia` && country.options[country.selectedIndex].text !== `Lithuania` && country.options[country.selectedIndex].text !==`Estonia`) {
        country.classList.add('is-invalid');
        countryErrMsg.innerHTML += `<img src="./pics/angry-cat.jpg" alt="Choose the country">`;
    } else {
        country.classList.add('is-valid');
    }; 

});

function validateEmail(regex, userEmail) {
    return regex.test(userEmail);
};

function emailNotValid(userEmail, el, mess) {
    userEmail.classList.add('is-invalid');
    el.innerHTML = mess;
};

function emailValid(userEmail, el, mess) {
    userEmail.classList.remove('is-invalid');
    userEmail.classList.add('is-valid');
    el.innerHTML = mess;
};


function validatePass(passRegex, pass) {
    return passRegex.test(pass);
};

function passNotValid(pass, el, mess2) {
    pass.classList.add('is-invalid');
    el.innerHTML = mess2;
};

function passValid(pass, el, mess2) {
    pass.classList.remove('is-invalid');
    pass.classList.add('is-valid');
    el.innerHTML = mess2;
};




document.getElementById('subm').addEventListener('click', function() {

    const userEmailLogin = document.getElementById('userEmailLogin');
    const passLogin = document.getElementById('exampleInputPassword3');

    const emailErrMsgLogin = document.querySelector('.span-email-login');
    const passErrMsgLogin = document.querySelector('.span-pas2');
       
    if(!validateEmail(emailRegex, userEmailLogin.value)) {
        emailNotValid(userEmailLogin, emailErrMsgLogin, 'Enter valid e-mail address');
    } else {
        emailValid(userEmailLogin, emailErrMsgLogin, '');
    };


    if(!validatePassLogin(passRegex, passLogin.value)) {
        passNotValidLogin(passLogin, passErrMsgLogin, 'Enter valid password. It may contain letters and numbers, min 8 symbols long');
    } else {
        passValidLogin(passLogin, passErrMsgLogin, '');
    };

});

function validatePassLogin(passRegex, passLogin) {
    return passRegex.test(passLogin);
};

function passNotValidLogin(passLogin, el, mess3) {
    passLogin.classList.add('is-invalid');
    el.innerHTML = mess3;
};

function passValidLogin(passLogin, el, mess3) {
    passLogin.classList.remove('is-invalid');
    passLogin.classList.add('is-valid');
    el.innerHTML = mess3;
};


