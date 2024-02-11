let uno = '';
let dos = '';
let operator = '';
let finish = false;

const display = document.querySelector('h1');
const numBtn = document.querySelectorAll('.num-btn');
const operBtn = document.querySelectorAll('.oper-btn');

// const numArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
// const operArr = ['+', '-', '*', '/'];

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
        // if (finish == true){
        //     dos = ''
        // }
        operator = elem.textContent;
        display.textContent = uno;
        operate(uno, dos, operator);
        dos = '';
        // finish = false;
    })
})

const equals = document.querySelector('.equals');
equals.addEventListener('click', () => {
    display.textContent = uno;
    operate(uno, dos, operator);
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
                display.textContent = 'Невозможно';
                uno = '0';
            }
            if (dos != ''){ 
                uno = (+a) / (+b);
            }
            break;
    }
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
