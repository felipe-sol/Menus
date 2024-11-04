console.log("oi gente");

let elem = document.getElementById("menu-item1")
console.log("Elem: ", elem);

let elemItens = document.getElementById("menu-itens1")
console.log("elemItens: ", elemItens);

function entrei(){
    console.log("entrei em cima do elemento")
    elemItens.classList.remove("menu-hide-subitens")
}
function mover(){
    console.log("movimentando em cima do elemento")

}

function sair(){
    console.log("saiu do elemento")
    elemItens.classList.add("menu-hide-subitens")
}
elem.addEventListener('mouseenter', entrei)
elem.addEventListener('mousemove', mover)
elem.addEventListener('mouseleave', sair)