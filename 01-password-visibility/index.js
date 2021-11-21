const password=document.querySelector('#password');
const showPassword=document.querySelector('#show-password')

let counter=0;
showPassword.addEventListener('click',()=>{
//console.log(showPassword);
/*
password.type = showPassword.checkled ? 'text' : 'password'*/
  if(showPassword.checked){
    password.type='text';
  }
  else{
    password.type='password';
  }
})
