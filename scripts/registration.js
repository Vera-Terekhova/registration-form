'use strict'

import {saveUser} from './stateService.js';
  
//объявляем переменную с поиском элемента в html
let emailRegistration = document.querySelector('#email-reg');

let passwordRegistration = document.querySelector('#password-reg');

let btnRegistration = document.querySelector('#btn-reg');

let errorEmailRegistration = document.querySelector('#email-empty');
let errorPasswordRegistration = document.querySelector('#password-empty');
let errorEmail = document.querySelector('#email-item-title');
let errorPassword = document.querySelector('#passw-item-title');
let passwordErrorLength = document.querySelector('#password_langth');

let emailValid = document.querySelector('#email-valid');

let checkboxRegisrtration = document.querySelector('#check-reg');
let checkboxError = document.querySelector('#check-empty');

let emailErrorFlag = document.querySelector('#email-error-flag');
let passwordErrorFlag = document.querySelector('#password-error-flag');
let checkErrorFlag = document.querySelector('#checked-error-flag');

//----------------------------------------------
let itemLabelRegistration = document.querySelector('#error-check-reg');

//объявляем переменную
let emailResult = '';
let passwordResult = '';
let checkResult = '';
let emailValidUser = false;
let passwordValid = false;
let checkedValid = false;
let user = {};

//присваиваем переменной действие
emailRegistration.addEventListener('input', (even) => {
  emailResult = even.target.value.trim();
});


passwordRegistration.addEventListener('input', (even) => {
  passwordResult = even.target.value.trim();;
});

checkboxRegisrtration.addEventListener('change', (even) => {
  checkResult = even.target.checked;
});

btnRegistration.addEventListener('click', (even) => {
  even.preventDefault();
  validRegistration();
});

function validRegistration() {
  // Проверка на пустую строку
  if (emailResult.length == '') {
    errorEmailRegistration.style.display = 'block';
    emailRegistration.style.borderColor = '#CB2424';
    errorEmail.style.color = '#CB2424';
    emailErrorFlag.style.color = '#CB2424';
    emailValid.style.display = 'none';
    emailValidUser = false;
  } else {
    errorEmailRegistration.style.display = 'none';
    emailRegistration.style.borderColor = 'inherit';
    errorEmail.style.color = 'inherit';
    emailErrorFlag.style.color = 'inherit';

    if (!validateEmail(emailResult)) { // проверка на валидность email
      emailValid.style.display = 'block';
      emailRegistration.style.borderColor = '#CB2424';
      errorEmail.style.color = '#CB2424';
      emailErrorFlag.style.color = '#CB2424';
    } else {
      emailValid.style.display = 'none';
      user.email = emailResult;
      emailValidUser = true;
    }
  }

  if (passwordResult.length == '') {
    errorPasswordRegistration.style.display = 'block';
    passwordRegistration.style.borderColor = '#CB2424';
    errorPassword.style.color = '#CB2424';
    passwordErrorFlag.style.color = '#CB2424';
    passwordErrorLength.style.display = 'none';
    passwordValid = false;
  } else {
    errorPasswordRegistration.style.display = 'none';
    passwordRegistration.style.borderColor = 'inherit';
    errorPassword.style.color = 'inherit';
    passwordErrorFlag.style.color = 'inherit';

    if (passwordResult.length < 8) { // Проверка на длину пароля
      passwordErrorLength.style.display = 'block';
      passwordRegistration.style.borderColor = '#CB2424';
      errorPassword.style.color = '#CB2424';
      passwordErrorFlag.style.color = '#CB2424';
      passwordValid = false;
    } else {
      passwordErrorLength.style.display = 'none';
      user.password = passwordResult;
      passwordValid = true;
    }
  }

  if (!checkResult) {
    checkboxError.style.display = 'block';
    checkErrorFlag.style.color = '#CB2424';
    checkedValid = false;
    itemLabelRegistration.classList.add('error_color-checkbox');
  } else {
    checkboxError.style.display = 'none';
    checkErrorFlag.style.color = 'inherit';
    checkedValid = true;
    itemLabelRegistration.classList.remove('error_color-checkbox');
  }

  if (emailValidUser && passwordValid && checkedValid) {
    if (saveUser(user)) {
      setTimeout(function(){
        alert('Поздравляю вы успешно зарегистрировались, теперь можете пройти авторизацию');
      }, 10);
      window.location.href = '../index.html';
    } else {
      alert('Email уже используется');
    }
  }
}

const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email).toLowerCase());
}
