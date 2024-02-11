let uno = '';
let dos = '';
let operator = '';
let finish = false;

const display = document.querySelector('h1');
const numBtn = document.querySelectorAll('.num-btn');
const operBtn = document.querySelectorAll('.oper-btn');
const equalsBtn = document.querySelector('.equals');
const clearBtn = document.querySelector('.clear');

numBtn.forEach((elem) => {
    elem.addEventListener('click', () => {
        if (dos == '' && uno.length != 11 && operator == ''){
            uno += elem.textContent;
            display.textContent = uno;
        } 

        if (operator != '' && dos.length != 11){
            dos += elem.textContent;
            display.textContent = dos;
        }
        
    })
})

operBtn.forEach((elem) => {
    elem.addEventListener('click', () => {
        operator = elem.textContent;
        operate(uno, dos, operator);
        if (dos != '0'){ 
            display.textContent = uno;
        }
        dos = '';
        finish = false;
    })
})

equalsBtn.addEventListener('click', () => {
    operate(uno, dos, operator);
    if (dos != '0'){ 
        display.textContent = uno;
    }
    finish = true;
    dos = '';
})

function operate(a, b, sign){
    switch (sign){
        case '+':
            uno = (+a) + (+b);
            break;
        case '-':
            uno = (+a) - (+b);
            break;
        case '*':
            if (dos != ''){ 
                uno = (+a) * (+b);
            }
            break;
        case '/':
            if (dos == '0'){
                clear();
                dos = '0';
                display.textContent = 'Невозможно';
            }
            if (dos != ''){ 
                uno = (+a) / (+b);
            }
            break;
    }
}

clearBtn.addEventListener('click', () =>{
    clear();
});

function clear(){
    uno = '';
    dos = '';
    operator = '';
    display.textContent = '0';
}
// window.addEventListener("keydown", function(event){
//     console.log(event.key + ' ' + typeof (event.key));
// });
// window.addEventListener("click", function(event){
//     console.log(event.target.innerHTML);
// });
window.addEventListener('click', () => {
    console.log(uno, operator, dos);
});


// window.addEventListener('keydown', (event) => { 
    //     if ((isNaN(parseFloat(event.key))) ) {
    //         return;
    //     }
    //     addNumberOnScreen(Number(event.key));
    //     switchCase(event.key);
    //     // clickOnOperator();
    // })