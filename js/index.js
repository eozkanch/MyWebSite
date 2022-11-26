var kullanicilar=[{kullaniciAdi:"admin" , parola:"admin"},
                    {kullaniciAdi:"1" , parola:"1"},
                    {kullaniciAdi:"ali" , parola:"ali"}]


var girilenkullaniciAdi;
var girilenparola;
var x;

function kontrolEt(){
girilenkullaniciAdi=document.getElementById("email").value;
girilenparola=document.getElementById("password").value;

for( x of kullanicilar){

    if(( x.kullaniciAdi== girilenkullaniciAdi) && ( x.parola == girilenparola)){
        return true;
    }
  
else{

    return false;
}

}
}

function girisOnayi(){

kontrolEt();

if(kontrolEt())
{
window.open("blog.html","_self");

}else{
    alert("kullanici adi veya parola hatali");
}

}