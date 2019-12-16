(function() {
 "use strict";
 
 var button = document.getElementById('button'),
     startBtn = getElement('login-form__start'), 
     submitBtn = getElement('login-form__submit'),
     placeholder = document.querySelector('.login-form__placeholder p'),
     email = getElement('login-form__email'), 
     password = getElement('login-form__password');
  
 function init() {
   bindEvents();
 }
  
 function bindEvents() {
   startBtn.addEventListener('click', (e) => {
     e.preventDefault();
     
     if(!getValue(email) && !getValue(password)) {
      onEmail();
     }
   });
   
   submitBtn.addEventListener('click', (e) => {   
     if(button.classList.contains('login-form--on-password')) {
       onSuccess();
     } else if(button.classList.contains('login-form--on-email')) {
       onPassword();        
     } else {
       onEmail();
     }
   });
   
   email.addEventListener('keydown', (e) => { 
     if(e.which == 13 || e.keyCode == 13) {
      onPassword();
     }
   });
   password.addEventListener('keydown', (e) => { 
     if(e.which == 13 || e.keyCode == 13) {   
      onSuccess();
     }
   });   
 }
  
  
 function onEmail() {
   button.classList.add('login-form--on-email');
   email.focus();  
 }
  
 function onPassword() {
   clicked();       
   placeholder.innerHTML = 'Password';
   button.classList.add('login-form--on-password');     
   password.focus();   
 }
  
 function onSuccess() {
   startBtn.innerHTML = 'Welcome!';
   button.classList.add('login-form--on-success');

   setTimeout(() => {
     button.classList.add('login-form--on-resetting');
     setTimeout(() => {
      reset();
      button.classList.remove('login-form--on-resetting');
     }, 1500);
   }, 1500);   
 }
  
 function clicked() {
  submitBtn.classList.add('click');
  submitBtn.style.webkitAnimation = 'none';
  setTimeout(() => {
      submitBtn.style.webkitAnimation = '';
  }, 100);   
 }
  
  
 function reset() {
    placeholder.innerHTML = 'Email';
    startBtn.innerHTML = 'Login';
    email.value = '';
    password.value = '';                   
    button.classList.remove('login-form--on-email', 'login-form--on-password', 'login-form--on-success');   
 }
  
  
  
  
 function getValue(elem) {
   return elem.value;
 }
  
 function getElement(className) {
   return button.getElementsByClassName(className)[0];
 }
 
  
  
 init();
  
})();