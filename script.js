let a = ''; // first number
let b = ''; // second number
let sign = '';
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const action = ['-', '+', '*', '/'];
// результат
const result = document.querySelector('.result');

function clear() {
  a = ''; // first number
  b = ''; // second number
  sign = '';
  finish = false;
  result.innerHTML = 0;
}
document.querySelector('.clear').addEventListener('click', clear);

document.querySelector('.calculate__body').addEventListener('click', (event) => {
  //нажата не кнопка
  if (!event.target.classList.contains('btn')) return;
  //нажата кнопка clear ac
  if (event.target.classList.contains('clear')) return;

  result.textContent = '';
  // получаем нажатую кнопка
  const key = event.target.textContent;
  //если нажата клавиша 0-9 или .
  if (digit.includes(key)) {
    if (b === '' && sign === '') {
      a += key;
      result.textContent = a;
    } else if (a !== '' && b !== '' && finish) {
      b = key;
      finish = false;
      result.innerHTML = b
    } else {
      b += key;
      result.innerHTML = b;
    }
    return;
  }
  // нажата клавиша + - / *
  if (action.includes(key)) {
    sign = key;
    result.innerHTML = sign;
    return;
  }
  // нажата =
  if (key === '=') {
    switch (sign) {
      case '+':
        a = (+a) + (+b);
        break;
      case '-':
        a = a - b;
        break;
      case '*':
        a = a * b;
        break;
      case '/':
        a = a / b;
        break;
    }
    finish = true;
    result.innerHTML = a;

  }
  if (result < 5) {

  }
})