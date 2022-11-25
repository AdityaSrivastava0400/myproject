'use strict'


document.querySelector('.Submit').addEventListener('click',function(){
    let num=Number(document.querySelector('.no').value);
    let a;
    let resu=" ";
    if(num==null){
        
    }
    else{

        for(let i=1;i<=10;i++){
           console.log( a=i*num);
            resu=resu+" <p>"+num +" * "+ i+"="+a+" </p>";
        }
        document.querySelector('.result').innerHTML=resu;
        document.querySelector('.result').classList.remove('hidden');
    }
})
document.querySelector('.Reset').addEventListener('click',function(){
    document.querySelector('.no').value=null;
    document.querySelector('.result').classList.add('hidden');  
})