const text=document.querySelector('#text');
const wordCount=document.querySelector('#word-count');
const counter=document.querySelector('#character-count');
text.addEventListener('input',()=>{
    counter.innerText=text.value.length;
    let afterSplit=text.value.split(' ');
    console.log('aftersplit');
    console.log(afterSplit);
    let words=afterSplit.filter(e=>{
        return (e.length>0 && e!='\n /g')
    })
    console.log(words);
    wordCount.innerText=words.length;
})


/* 
const button=document.querySelector('button');
console.log(text.value);
console.log(text.value.length);
 */

/* button.addEventListener('click',()=>{
      //console.log(text.focus().select());
})
 */