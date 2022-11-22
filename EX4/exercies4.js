
//excercies 3

let num=[1,2,3,4,5,6,7,8,9,10];

function generatelListItems(arg){

 let items="";
 for(let i=0; i<arg.length; i++){
     items+=`<li>${arg[i]}</li>`;
     
 }
 return items;

}

document.querySelector("li").innerHTML=` ${generatelListItems(num)}`


   


