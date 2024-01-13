let numeroUno = 0;
let numeroDos = 0;
let operator = '+';
let result = 0;

let numberArray = [];

const displayResult = document.querySelector('h1');

let numbers = document.querySelectorAll('.num-btn');
let operators = document.querySelectorAll('.oper-btn');

numbers.forEach(elem => {
    elem.addEventListener('click', (event) => {
        addNumberOnScreen(event.target.innerHTML);
    });
})
window.addEventListener('keydown', (event) => {
    if ((isNaN(parseFloat(event.key))) ) {
        return;
    }
    addNumberOnScreen(Number(event.key));
})

// for (let i = 0; i <= 9; i++){
//     document.getElementById(`${i}`).onclick = () => addNumberOnScreen(`${i}`);
//  }

// equal.addEventListener('click', () => {
//     operate(numeroUno, numeroDos, operator);
//     displayResult.textContent = numeroUno;
// });

// document.getElementById('add').onclick = () => operator = '+';
// document.getElementById('subtract').onclick = () => operator = '-';
// document.getElementById('multiply').onclick = () => operator = '*';
// document.getElementById('divide').onclick = () => operator = '/';

// document.getElementById('add').addEventListener('click', () => {
//     operator = '+';
//     clickOnOperator();
// })
// document.getElementById('subtract').addEventListener('click', () => {
//     operator = '-';
//     clickOnOperator();
// })
// document.getElementById('multiply').addEventListener('click', () => {
//     operator = '*';
//     clickOnOperator();
// })
// document.getElementById('divide').addEventListener('click', () => {
//     operator = '/';
//     clickOnOperator();
// })

// function clickOnOperator(){
//     numeroDos = numeroUno;
//     numberArray = [];
//     displayResult.textContent = 0;
// }

function addNumberOnScreen(number){
    if (numberArray.length > 10){
        return;
    }
    numberArray.push(number);
    let joined = +numberArray.join('');
    numeroUno = joined;
    displayResult.textContent = joined;
}

function operate(a, b, operatorPar){
    switch (operatorPar){
        case '+':
            numeroUno = a + b;
            break;
        case '-':
            numeroUno = b - a;
            break;
        case '*':
            numeroUno = a * b;
            break;
        case '/':
            numeroUno = a / b;
            break;
    }
}

window.addEventListener("keydown", function(event){
    console.log(event.key + ' ' + typeof (event.key));
});
// window.addEventListener("click", function(event){
//     console.log(event.target.innerHTML);
// });

