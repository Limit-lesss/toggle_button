"use strict"

let outerDiv = document.getElementById("outer");
let innerDiv = document.getElementById("inner");
let h1 = document.getElementsByTagName('h1');
let toggled = true;
 
outerDiv.addEventListener('click',function(){
    if(toggled){
         document.body.style.backgroundColor = 'black';
         outerDiv.style.backgroundColor = 'skyblue';
         innerDiv.style.marginLeft = '50px';
         toggled = false;
         h1[0].style.color = 'white';
    }else{
        document.body.style.backgroundColor = 'white';
        outerDiv.style.backgroundColor = 'white';
        innerDiv.style.marginLeft = '0px';
        toggled = true;
        h1[0].style.color = 'black';
    }
   
});