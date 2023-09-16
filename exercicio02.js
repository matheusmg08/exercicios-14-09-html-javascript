function calcular(){
    var altura = document.getElementById ("altura").value;
    var peso = document.getElementById ("peso").value;
    var alturas = parseFloat(altura) * parseFloat(altura);
    var peso_ideal = parseFloat(peso) / parseFloat(alturas);
    var resp = document.getElementById ("resp");
    if (peso_ideal < 22){
        resp.innerHTML = "Abaixo do peso ideal"
    }
    else if ((peso_ideal > 21) && (peso_ideal < 27)){
        resp.innerHTML = "Peso adequado"
    }
    else if ((peso_ideal > 26) && (peso_ideal < 33)){
        resp.innerHTML = "Sobrepeso"
    }
    else if (peso_ideal > 32){
        resp.innerHTML = "Obesidade"
    }  
}
function limpar(){
    var altura = document.getElementById ("altura");
    var peso = document.getElementById ("peso");
    var resp = document.getElementById ("resp");
    altura.value = "";
    peso.value = "";
    resp.innerHTML = "";
    altura.focus()
}