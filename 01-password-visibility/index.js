const password=document.querySelector('#password');
const showPassword=document.querySelector('#show-password')

let counter=0;
showPassword.addEventListener('click',()=>{
//console.log(showPassword);
  if(showPassword.checked){
    password.type='text';
  }
  else{
    password.type='password';
  }
})
