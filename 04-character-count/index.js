const text=document.querySelector('#text');
const wordCount=document.querySelector('#word-count');
const characters=document.querySelector('#character-count');

text.addEventListener('input',()=>{
    characters.innerText=text.value.length;
    let afterSplit=text.value.split(/[\s]+/g); 

    let words=afterSplit.filter(e=>{
        return (e.length>0)
    })
    console.log(words);
    wordCount.innerText=words.length;
})
