/*document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function(){

    document.querySelector(".container").classList.toggle("show-menu");
}); */



document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu"));

/*escrever o valor atualizado no console*/

document.querySelector("#qtde").addEventListener("change", atualizarPreco)
document.querySelector("#js").addEventListener("change", atualizarPreco)
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco)
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco)
document.querySelector("#prazo").addEventListener("change", function () {
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
    atualizarPreco()
})

function atualizarPreco(){
    const qtde = document.querySelector("#qtde").value
    const temJS = document.querySelector("#js").checked
    const incluiLayout = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#prazo").value


    let preco = qtde *100
    if(temJS) preco *= 1.1
        /*preco = preco + preco *10/100 ou *0.1 ou preco = preco *1.1 ou ´reco*= 1.1*/
    if(incluiLayout) preco += 500
    let taxaUrgencia = 1 /*100% */- prazo*0.1; /*a taxa de urgencia é inversament eproporcional*/
    preco *= 1 + taxaUrgencia

    document.querySelector("#preço").innerHTML = `R$ ${preco.toFixed(2)}` /*ou "R$" + preco*/
}