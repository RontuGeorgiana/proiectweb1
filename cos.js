function showcart()
{
    var lista=[];
    lista =JSON.parse(localStorage.getItem("lista"));
    const parinte = document.getElementById("lista");
    for (i=0; i<lista.length; i++) {
        const div = document.createElement("div");
        parinte.appendChild(div);
        const img = document.createElement("img");
        const appimg = div.appendChild(img);
        appimg.src = lista[i].src;
        const diviz = document.createElement("div");
        const span1 = document.createElement("span");
        const appspan1 = diviz.appendChild(span1);
        appspan1.innerHTML = lista[i].denumire;
        const span2 = document.createElement("span");
        const appspan2 = diviz.appendChild(span2);
        appspan2.innerHTML = lista[i].pret + " lei";
        div.appendChild(diviz);
    }
}

function suma() {
    var lista=[];
    lista =JSON.parse(localStorage.getItem("lista"));
    var sum = 0;
    for (i=0; i<lista.length; i++) {
        sum = sum + parseInt(lista[i].pret);
    }
    document.getElementById("total_prod").innerHTML="Total produse: " +  sum + "lei";
    var liv = Math.floor(Math.random() * 16);
    if (liv < 5)
        liv = 5;
    document.getElementById("livrare").innerHTML ="Taxa livrare: " + liv + "lei";
    sum = sum + liv;
    document.getElementById("total").innerHTML ="Pret total: " +  sum + "lei";
}

function onLoadHandler()
{
    showcart();
    suma();
}

function comanda()
{
    if (validate()) {
        alert("Comanda dumneavoastra a fost inregistrata!");
        localStorage.clear();
        location.reload();
    }
}

function validate(){
    let rgextel=/^07+[0-9]{8}$/;
    let rgexmail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var nr_tel = document.getElementById("tel").value;
    var mail = document.getElementById("mail").value;
    var nume = document.getElementById("nume").value;
    var pnume = document.getElementById("prenume").value;
    var adr = document.getElementById("adr").value;
    if(nume == ""){
        alert("Va rugam introduceti un nume valid!");
        return false;
    }
    if(pnume == ""){
        alert("Va rugam introduceti un prenume valid!");
        return false;
    }
    if(adr == ""){
        alert("Va rugam introduceti o adresa valida!");
        return false;
    }
    var rezmail = rgexmail.test(mail);
    if(!(rgextel.test(nr_tel))){
        alert("Va rugam introduceti un nr de telefon valid!");
        return false;
    }
    if(rezmail == false){
        alert("Va rugam introduceti o adresa de email valida!");
        return false;
    }
    if(!(document.getElementById("pliv").checked) && !(document.getElementById("ponl").checked)){
        alert("Va rugam selectati un mod de plata!");
        return false;
    }
    return true;
}