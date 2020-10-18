
/*function onLoadHandler() {
    document.getElementsByClassName("add").addEventListener("click",addcart('1'));

}*/

function addcart(id) {
    var x = document.getElementById(id);
    var y = x.getElementsByClassName("detalii")[0];
    var den = y.getElementsByClassName("denumire");
    var pret = y.getElementsByClassName("pret");
    var src = x.getElementsByTagName("img");
    var ob={
        "denumire":"a",
        "pret": "a",
        "src": "images/capricciosa.jpg"
    };
   ob.denumire =den[0].innerHTML;
   ob.pret = pret[0].innerHTML;
   ob.src = src[0].src;
    var lista=[];
    //var st;
    //st = ;
    if(window.localStorage.getItem("lista") != null){
        lista =JSON.parse(window.localStorage.getItem("lista"));
    }
    lista.push(ob);
    //st =  JSON.stringify(lista);
    console.log(ob);
    window.localStorage.setItem("lista",JSON.stringify(lista));
}



