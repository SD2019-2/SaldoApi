document.addEventListener("DOMContentLoaded", consultarTotal);

//Consultar Total
function consultarTotal(){

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
            document.getElementById("saldoTotal").innerHTML = xmlHttp.responseText
        }
    }
    xmlHttp.open("GET", "https://localhost:44379/api/saldo/GetTotal", true);
    xmlHttp.send(null);
}

//Depositar Total
document.getElementById("enviarTotal").onclick = function(){

    var saldo = document.getElementById("saldo").value
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
            consultarTotal()
        }
    }
    xmlHttp.open("POST", "https://localhost:44379/api/saldo/EnviarTotal/" + saldo, true);
    xmlHttp.send(null);
}

//Sacar Total
document.getElementById("sacarTotal").onclick = function(){

    var saldo = document.getElementById("saldo").value
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
            consultarTotal()
        }
    }
    xmlHttp.open("POST", "https://localhost:44379/api/saldo/SacarTotal/" + saldo, true);
    xmlHttp.send(null);
}

//Consultar Saldo
document.getElementById("consultarSaldo").onclick = function(){
    var saldo = document.getElementById("saldo").value
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
            alert(xmlHttp.responseText)
        }
    }
    xmlHttp.open("GET", "https://localhost:44379/api/saldo/GetSaldo/" + saldo, true);
    xmlHttp.send(null);
}



