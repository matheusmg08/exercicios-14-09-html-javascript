function calcular(){
    var preco = document.getElementById("preco").value;
    var qtd = document.getElementById("qtd").value;
    var resp = document.getElementById("resp");
    var media = parseFloat(preco) * parseFloat(qtd);

    if (qtd > 10){
        media_final = media - (media * 0.1);
        resp.innerHTML = "O valor a pagar será de R$ " + media_final.toFixed(2);
    }
    else{
        resp.innerHTML = "O valor a pagar será de R$ " + media;
    }
}