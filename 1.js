const form=document.querySelector('form');
form.addEventListener('submit',(e) =>{
    e.preventDefault();
    const fd=new FormData(form);
 const obj= Object.fromEntries(fd);
 const json=JSON.stringify(obj);
 localStorage.setItem('form',json);
 window.location.href="confirm.html";
    
})



function show(){
var x=document.getElementById("div1");

if(x.style.display==="block"){
    x.style.display="none";
}else{
    x.style.display="block"
}

}
