'use strict'

import {validateUsers} from './stateService.js';
import {saveUser} from './stateService.js';

let emailAuthorization = document.querySelector('#email-auth');

let passwordAuthorization = document.querySelector('#password-auth');
let btnAuthorization = document.querySelector('#btn-input');

let errorEmail = document.querySelector('#email-item-title');
let emailErrorFlag = document.querySelector('#email-error-flag');
let errorPassword = document.querySelector('#passw-item-title');
let passwordErrorFlag = document.querySelector('#password-error-flag');
let checkErrorFlag = document.querySelector('#checked-error-flag');

let errorEmailAuthorization = document.querySelector('#email-empty-auth');
let errorPasswordAuthorization = document.querySelector('#password-empty-auth');

let checkboxAuthorization = document.querySelector('#check-auth');
let checkboxErrorAuthorization = document.querySelector('#check-empty-auth');

//-------------------------------------------------------------------------
let itemLabelAuthorization = document.querySelector('#error-check-auth');

let errorLoginPassword = document.querySelector('#invalid-email-password');

//объявляем переменную
let emailResultAuth = '';
let passwordResultAuth = '';
let checkResultAuth = '';
let user = {};
let successAuth;

//присваиваем переменной действие
emailAuthorization.addEventListener('input', (even) => {
  emailResultAuth = even.target.value.trim();
});

passwordAuthorization.addEventListener('input', (even) => {
  passwordResultAuth = even.target.value.trim();;
});

checkboxAuthorization.addEventListener('change', (even) => {
  checkResultAuth = even.target.checked;
});

btnAuthorization.addEventListener('click', (even) => {
  even.preventDefault();
  validAuthorization();
});

function validAuthorization() {
  if(emailResultAuth.length == '') {
    errorEmailAuthorization.style.display = 'block';
    emailAuthorization.style.borderColor = '#CB2424';
    errorEmail.style.color = '#CB2424';
    emailErrorFlag.style.color = '#CB2424';
  } else {
    errorEmailAuthorization.style.display = 'none';
    emailAuthorization.style.borderColor = 'inherit';
    errorEmail.style.color = 'inherit';
    emailErrorFlag.style.color = 'inherit';
    user.email = emailResultAuth;
  }

  if (passwordResultAuth.length == '') {
    errorPasswordAuthorization.style.display = 'block';
    passwordAuthorization.style.borderColor = '#CB2424';
    errorPassword.style.color = '#CB2424';
    passwordErrorFlag.style.color = '#CB2424';
  } else {
    errorPasswordAuthorization.style.display = 'none';
    passwordAuthorization.style.borderColor = 'inherit';
    errorPassword.style.color = 'inherit';
    passwordErrorFlag.style.color = 'inherit';
    user.password = passwordResultAuth;
  }

  if (!checkResultAuth) {
    checkboxErrorAuthorization.style.display = 'block';
    checkErrorFlag.style.color = '#CB2424';
    itemLabelAuthorization.classList.add('error_color-checkbox');
  } else {
    checkboxErrorAuthorization.style.display = 'none';
    checkErrorFlag.style.color = 'inherit';
    itemLabelAuthorization.classList.remove('error_color-checkbox');
  }

  if (emailResultAuth.length && passwordResultAuth.length && checkResultAuth) {
    if (validateUsers(user)) {
      setTimeout(function(){
        alert('Поздравляю вы успешно вошли!');
      }, 100);
      errorLoginPassword.style.display = 'none';
    } else {
      errorLoginPassword.style.display = 'block';
    }
  }
}

