const equals = document.getElementsByClassName('eq')[0];
const clear = document.getElementsByClassName('C')[0];
const podziel = document.getElementsByClassName('div')[0];
const btn1 = document.getElementsByClassName('jeden')[0];
const btn2 = document.getElementsByClassName('dwa')[0];
const btn3 = document.getElementsByClassName('trzy')[0];
const btnplus = document.getElementsByClassName('plus')[0];
const btn4 = document.getElementsByClassName('cztery')[0];
const btn5 = document.getElementsByClassName('piec')[0];
const btn6 = document.getElementsByClassName('szesc')[0];
const btnminus = document.getElementsByClassName('minus')[0];
const btn7 = document.getElementsByClassName('siedem')[0];
const btn8 = document.getElementsByClassName('osiem')[0];
const btn9 = document.getElementsByClassName('dziewiec')[0];
const btndot = document.getElementsByClassName('dot')[0];
const btn0 = document.getElementsByClassName('zero')[0];
const btnrazy = document.getElementsByClassName('multiply')[0];
const input = document.getElementsByClassName('input')[0];
let wyrazenie = "";

const operatory = ["+", "-", ".", "÷", "×"];

function update_input() {
    input.value = wyrazenie;
}

function clearing() {
    input.value = "0";
    wyrazenie = "";
}

function add(e) {
    let tak = false;

    if (operatory.includes(e.target.value)) {

        if (operatory.includes(wyrazenie[wyrazenie.length - 1])) {
            tak = true;
        }
    }

    if (tak == false) {
        wyrazenie += e.target.value;
        update_input();
    }


}

function wynik() {
    input.value = eval(wyrazenie);
    wyrazenie = "0";
}

clear.addEventListener('click', clearing);
btn1.addEventListener('click', add);
btn2.addEventListener('click', add);
btn3.addEventListener('click', add);
btn4.addEventListener('click', add);
btn5.addEventListener('click', add);
btn6.addEventListener('click', add);
btn7.addEventListener('click', add);
btn8.addEventListener('click', add);
btn9.addEventListener('click', add);
btn0.addEventListener('click', add);
btnplus.addEventListener('click', add);
btndot.addEventListener('click', add);
equals.addEventListener('click', wynik);
podziel.addEventListener('click', add);
btnminus.addEventListener('click', add);
btnrazy.addEventListener('click', add);