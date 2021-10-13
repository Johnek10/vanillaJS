/* const passwordOld = document.querySelector("#password");
const passwords = document.querySelectorAll("[data-pass='OK']");
const userChange = document.querySelector("#show-password");

const passwordChange = document.querySelector("#show-passwords"); */

document.addEventListener('click',(event)=>{
  if(!event.target.matches('[data-pass]')){
    console.log(event.target);
    //in label working, 
    console.log('dup');
    return
  } 

  console.log(event.target.dataset['pass'])
  const passwordField=event.target.dataset['pass'];
  const password=document.querySelectorAll(passwordField);
  password.forEach((e)=>{
    if(event.target.checked){
      e.type='text';
    }
    else{
      e.type='password';
    }
  })
/*    console.log(password);
  console.log(passwordField);  */

}
  )


