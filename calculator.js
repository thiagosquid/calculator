let displayTyped = document.getElementById('type')
let displayHistory = document.getElementById('resume')
let numeros = document.body.querySelectorAll(".num")
let operadores = document.body.querySelectorAll('.oper')
let keyC = document.getElementById('numClear')
let result = document.getElementById('result')
let backspace = document.getElementById('bckSpc')
let operation = new Array();
let number = "";
let res = "";

function doOperation(items){
    if(items.length < 3 && items.length > 0){
        return items[0];
    }else if(items.length === 3){
        let result = eval(`${items[0]} ${items[1]} ${items[2]}`)
        return result;
    }else{
        return [];
    }
}

keyC.addEventListener('click',function(){
    displayTyped.innerHTML = "";
    displayHistory.innerHTML = "";
    operation.length = 0;
    number = "";
});

backspace.addEventListener('click', ()=>{
    number = number.slice(0,-1)
    displayTyped.innerHTML = number
})

result.addEventListener('click',()=>{
    if(operation.length > 1){
        console.log(operation)
        operation.push(Number(number));
        res = doOperation(operation);
        displayHistory.innerHTML = operation.join("")
        number = "";
        operation = [];
        operation[0] = res;
        displayTyped.innerHTML = res;
    }
});


//Adicionar eventListener para os números
for(let x = 0; x < numeros.length; x++){
    numeros[x].addEventListener("click", function(){
        number += this.innerHTML;
        displayTyped.innerHTML = number
    });
}

for(let x = 0; x < operadores.length; x++){
    operadores[x].addEventListener("click", function(){
        displayHistory.innerHTML = number;
        displayTyped.innerHTML = ""
        if(number != ""){
            operation.push(Number(number))
        }
        if(operation.length === 3){
            res = ""
            res = doOperation(operation)
            operation = [];
            operation[0] = res;
            operation[1] = this.value;
            displayHistory.innerHTML = res;            
            displayTyped.innerHTML = ""
            displayHistory.innerHTML += this.innerHTML;
            number = "";
        }else if(operation.length === 2){
            operation[1] = this.value;
            displayTyped.innerHTML = ""
            displayHistory.innerHTML = operation[0]
            displayHistory.innerHTML += this.innerHTML
        }else if (operation.length === 1){
            operation.push(this.value)
            displayTyped.innerHTML = ""
            displayHistory.innerHTML = operation[0]
            displayHistory.innerHTML += this.innerHTML
            number = ""
        }else{
            operation.push(Number(number))
            operation.push(this.value)
            displayTyped.innerHTML = ""
            displayHistory.innerHTML = operation[0]
            displayHistory.innerHTML += this.innerHTML
            number = ""
        }
    });
}