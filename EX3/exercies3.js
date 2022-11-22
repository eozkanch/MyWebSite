





//excercies 3

const num=[1,2,3,4,5,6,7,8,9,10];

function generatelListItems(arg){

 let items="";
 for(let i=0; i<arg.length; i++){
     items+=`<li>${arg[i]}</li>`;
 }
 return items;
}
document.querySelector("li").innerHTML=` ${generatelListItems(num)}`


var x;
function show_hide(){

    if(x==1)
    {
        document.getElementById("list").style.display="inline"
        return x=0;
    }
else
{

    document.getElementById("list").style.display="none"
    return x=1;
}
}


