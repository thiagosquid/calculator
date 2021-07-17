let visor = document.getElementById('dispCalc');
let numeros = document.body.querySelectorAll(".num")
let operadores = document.body.querySelectorAll('.oper')
let keyC = document.getElementById('numClear')
let numDig, oprDig, result;
let ord  = 0;
let number=[];
keyC.addEventListener('click',limpaVisor);

//console.log(numeros.length)

//Adicionar eventListener para os números
for(let x=0; x<numeros.length; x++){
    numDig = '';
    numeros[x].addEventListener("click", function(){
        numDig += this.innerHTML;
        visor.innerHTML = numDig;
    });
}

//Adicionar eventListener para os operadores
for(let x=0; x<operadores.length; x++){
    oprDig = '';
    operadores[x].addEventListener("click", function(){
        oprDig += this.innerHTML;
        visor.innerHTML = oprDig;
        saveOperator();
        saveNumber();
            if(ord > 1){
                resultOp();
            }
    });
}

function limpaVisor(){
    visor.innerHTML = "";
    numDig = '';
    ord = 0;
}

function saveNumber(){
    number[ord] = numDig;
    numDig = '';
    ord += 2;
}

function saveOperator(){
    number[ord+1] = oprDig;
    oprDig = '';
}

function resultOp(){
    if(number[ord-3] == '+'){
        result = Number.parseFloat(number[ord-4]) + Number.parseFloat(number[ord-2]);
        number[ord-2] = result;
        console.log(result);
    }
}