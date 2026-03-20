const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const button4 = document.querySelector('#button4');
const button5 = document.querySelector('#button5');
const button6 = document.querySelector('#button6');
const button7 = document.querySelector('#button7');
const button8 = document.querySelector('#button8');
const button9 = document.querySelector('#button9');
const button0 = document.querySelector('#button0');
const dot = document.querySelector('#dot');
const h1 = document.querySelector('#display');
const dividing = document.querySelector('#divide');
const multiply = document.querySelector('#multiply');
const minus = document.querySelector('#minus');
const adding = document.querySelector('#adding');
const equals = document.querySelector('#equals');
const deleting = document.querySelector('#buttonDelete')
const reset = document.querySelector('#reset');
const negative = document.querySelector('#negative');

let score = '';
let firstNumber = null;
let operator = null;

button1.addEventListener('click', function (){
    if (score === 0){
        score = String(1);
    } else {
        score += String(1);
    }
    h1.textContent = score;
})
button2.addEventListener('click', function (){
    if (score === 0){
        score = String(2);
    } else {
        score += String(2);
    }
    h1.textContent = score;
})
button3.addEventListener('click', function (){
    if (score === 0){
        score = String(3);
    } else {
        score += String(3);
    }
    h1.textContent = score;
})
button4.addEventListener('click', function (){
    if (score === 0){
        score = String(4);
    } else {
        score += String(4);
    }
    h1.textContent = score;
})
button5.addEventListener('click', function (){
    if (score === 0){
        score = String(5);
    } else {
        score += String(5);
    }
    h1.textContent = score;
})
button6.addEventListener('click', function (){
    if (score === 0){
        score = String(6);
    } else {
        score += String(6);
    }
    h1.textContent = score;
})
button7.addEventListener('click', function (){
    if (score === 0){
        score = String(7);
    } else {
        score += String(7);
    }
    h1.textContent = score;
})
button8.addEventListener('click', function (){
    if (score === 0){
        score = String(8);
    } else {
        score += String(8);
    }
    h1.textContent = score;
})
button9.addEventListener('click', function (){
    if (score === 0){
        score = String(9);
    } else {
        score += String(9);
    }
    h1.textContent = score;
})
button0.addEventListener('click', function (){
    if (score === 0){
        score = String(0);
    } else {
        score += String(0);
    }
    h1.textContent = score;
});
dot.addEventListener('click', function (){
    if (score === 0){
        score = String("0.");
        h1.textContent = score;
    } else if (!score.includes(".")){
    score += String(".");
}
    h1.textContent = score;
});

negative.addEventListener('click', function() {
  if (score.startsWith("-")) {
    score.value = score.slice(1); // remove "-"
  } else {
    score = "-" + score; // add "-"
  }

  h1.textContent = score;
})
deleting.addEventListener('click', function(){
    let str = score.toString();
    let cutOff = str.slice(0,-1);
    score = Number(cutOff);
    h1.textContent = score;
})

adding.addEventListener('click', function () {
  if (operator === ''){
  firstNumber = Number(score);
  operator = '+';
  score =''}  else if (operator === '='){
    firstNumber = Number(h1.textContent);
    operator = '+';
    score = '';
  }else { resultNum();
    firstNumber = Number(score);
  operator = '+';
    score = '';
  }
});
minus.addEventListener('click', function () {
  if (operator === ''){
  firstNumber = Number(score);
  operator = '-';
  score =''}  else if (operator === '='){
    firstNumber = Number(h1.textContent);
    operator = '-';
    score = '';
  }else { resultNum();
    firstNumber = Number(score);
  operator = '-';
    score = '';
  }
});
dividing.addEventListener('click', function () {
  if (operator === ''){
  firstNumber = Number(score);
  operator = '/';
  score =''} else if (operator === '='){
    firstNumber = Number(h1.textContent);
    operator = '/';
    score = '';
  } else { resultNum();
    firstNumber = Number(score);
  operator = '/';
    score = '';
  }
});
multiply.addEventListener('click', function () {
  if (operator === ''){
  firstNumber = Number(score);
  operator = '*';
  score =''} else if (operator === '='){
    firstNumber = Number(h1.textContent);
    operator = '*';
    score = '';
  } else { resultNum();
    firstNumber = Number(score);
  operator = '*';
    score = '';
  }
});

equals.addEventListener('click', function(){
    resultNum();
    operator = '=';
    score = '';

})
    
    
    
function resultNum(){
    const secondNumber = Number(score);

    if (operator === '+') {
        let result = firstNumber + secondNumber;
        result = Number(result.toFixed(10))
        score = result;
        
    } else if (operator === '-') {
        let result = firstNumber - secondNumber;
        result = Number(result.toFixed(10))
        score = result;
    } else if (operator === '/') {
        let result = firstNumber / secondNumber;
        result = Number(result.toFixed(10))
        score = result;
    } else if (operator === '*') {
        let result = firstNumber * secondNumber;
        result = Number(result.toFixed(10))
        score = result;
    } 
    console.log(operator);
    h1.textContent = score;
    
}

reset.addEventListener('click', function(){
    firstNumber = null;
    secondNumber = null;
    score = '';
    h1.textContent = 0;
    operator = null;
})