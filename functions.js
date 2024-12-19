const div = document.querySelector('.zafar');
const sardor = document.querySelector('.sardor');
const bal = document.querySelector('.bal')
const l = document.querySelector('.result');
let result;

let num = 10;

function multi ()
    {
        const num1 = Math.ceil(Math.random() * num); 
        const num2 = Math.ceil(Math.random() * num); 
        result = num1*num2;
        div.innerText = `${num1} x ${num2}`
    }


const check = () => {
    if(Number(sardor.value) === result){
        l.innerText = 'correct! teacher will love it!!!';
        l.style.color = 'green';
        bal.innerText = Number(bal.innerText) + 1;
        multi();
    }else{
        l.innerText = 'its ok you can study harder';  
        l.style.color = 'red'  
        bal.innerText = Number(bal.innerText) - 1;
        multi();
    }
}


document.querySelector('.check').addEventListener('click' , () => {
    check();
    sardor.value = '';
})

document.addEventListener('keydown', (event) => {
    if(event.key === 'Enter'){
        check();
        sardor.value = '';
    }
})
multi();

function good(){
    if(Number(bal.innerText) === -10){
        alert('teacher is angry because of you!! i will give -1')
        bal.innerText = Number(bal.innerText) - 1;
    }

if(Number(bal.innerText) === 10){
    alert('good joob teacher will be proud of you! i will give one extra mark')
    bal.innerText = Number(bal.innerText) + 1;
}

if(Number(bal.innerText) === 50){
    alert('good joob teacher will be very happy!')
    bal.innerText = Number(bal.innerText) + 1;
}

if(Number(bal.innerText) === 100){
    alert('are you crazy? i think you are better then me!!! i will give ten extra mark');
    bal.innerText = Number(bal.innerText) + 10;
}
requestAnimationFrame(good);
}
good();
    


/*function multi() {
    const random = Math.random();
    if(random > 0 && random <= 0.01 ){
        div.innerText = '1 x 1';
        result = 1;
    }else if(random > 0.01 && random <= 0.02 ){
        div.innerText = '1 x 2';
        result = 2;
    }else if(random > 0.02 && random <= 0.03 ){
        div.innerText = '1 x 3';
        result = 3;
    }else if(random > 0.03 && random <= 0.04 ){
        result = 4;
        div.innerText = '1 x 4';
    }else if(random > 0.04 && random <= 0.05 ){
        div.innerText = '1 x 5';
        result = 5;
    }else if(random > 0.05 && random <= 0.06 ){
        div.innerText = '1 x 6';
        result = 6;
    }else if(random > 0.06 && random <= 0.07 ){
        div.innerText = '1 x 7';
        result = 7;
    }else if(random > 0.07 && random <= 0.08 ){
        div.innerText = '1 x 8';
        result = 8;
    }else if(random > 0.08 && random <= 0.09 ){
        div.innerText = '1 x 9';
        result = 9;
    }
    else if(random > 0.1 && random <= 0.11 ){
        div.innerText = '2 x 1';
        result = 2;
    }else if(random > 0.11 && random <= 0.12 ){
        div.innerText = '2 x 2';
        result = 4;
    }else if(random > 0.12 && random <= 0.13 ){
        div.innerText = '2 x 3';
        result = 6;
    }else if(random > 0.13 && random <= 0.14 ){
        result = 8;
        div.innerText = '2 x 4';
    }else if(random > 0.14 && random <= 0.15 ){
        div.innerText = '2 x 5';
        result = 10;
    }else if(random > 0.15 && random <= 0.16 ){
        div.innerText = '2 x 6';
        result = 12;
    }else if(random > 0.16 && random <= 0.17 ){
        div.innerText = '2 x 7';
        result = 14;
    }else if(random > 0.17 && random <= 0.18 ){
        div.innerText = '2 x 8';
        result = 16;
    }else if(random > 0.18 && random <= 0.19 ){
        div.innerText = '2 x 9';
        result = 18;
    }
    else if(random > 0.2 && random <= 0.21 ){
        div.innerText = '3 x 1';
        result = 3;
    }else if(random > 0.21 && random <= 0.22 ){
        div.innerText = '3 x 2';
        result = 6;
    }else if(random > 0.22 && random <= 0.23 ){
        div.innerText = '3 x 3';
        result = 9;
    }else if(random > 0.23 && random <= 0.24 ){
        result = 12;
        div.innerText = '3 x 4';
    }else if(random > 0.24 && random <= 0.25 ){
        div.innerText = '3 x 5';
        result = 15;
    }else if(random > 0.25 && random <= 0.26 ){
        div.innerText = '3 x 6';
        result = 18;
    }else if(random > 0.26 && random <= 0.27 ){
        div.innerText = '3 x 7';
        result = 21;
    }else if(random > 0.27 && random <= 0.28 ){
        div.innerText = '3 x 8';
        result = 24;
    }else if(random > 0.28 && random <= 0.29 ){
        div.innerText = '3 x 9';
        result = 27;
    } 
    else if(random > 0.3 && random <= 0.31 ){
        div.innerText = '4 x 1';
        result = 4;
    }else if(random > 0.31 && random <= 0.32 ){
        div.innerText = '4 x 2';
        result = 8;
    }else if(random > 0.32 && random <= 0.33 ){
        div.innerText = '4 x 3';
        result = 12;
    }else if(random > 0.33 && random <= 0.34 ){
        result = 16;
        div.innerText = '4 x 4';
    }else if(random > 0.34 && random <= 0.35 ){
        div.innerText = '4 x 5';
        result = 20;
    }else if(random > 0.35 && random <= 0.36 ){
        div.innerText = '4 x 6';
        result = 24;
    }else if(random > 0.36 && random <= 0.37 ){
        div.innerText = '4 x 7';
        result = 28;
    }else if(random > 0.37 && random <= 0.38 ){
        div.innerText = '4 x 8';
        result = 32;
    }else if(random > 0.38 && random <= 0.39 ){
        div.innerText = '4 x 9';
        result = 36;
    }
    else if(random > 0.4 && random <= 0.41 ){
        div.innerText = '5 x 1';
        result = 5;
    }else if(random > 0.41 && random <= 0.42 ){
        div.innerText = '5 x 2';
        result = 10;
    }else if(random > 0.42 && random <= 0.43 ){
        div.innerText = '5 x 3';
        result = 15;
    }else if(random > 0.43 && random <= 0.44 ){
        result = 20;
        div.innerText = '5 x 4';
    }else if(random > 0.44 && random <= 0.45 ){
        div.innerText = '5 x 5';
        result = 25;
    }else if(random > 0.45 && random <= 0.46 ){
        div.innerText = '5 x 6';
        result = 30;
    }else if(random > 0.46 && random <= 0.47 ){
        div.innerText = '5 x 7';
        result = 35;
    }else if(random > 0.47 && random <= 0.48 ){
        div.innerText = '5 x 8';
        result = 40;
    }else if(random > 0.48 && random <= 0.49 ){
        div.innerText = '5 x 9';
        result = 45;
    }
    else if(random > 0.5 && random <= 0.51 ){
        div.innerText = '6 x 1';
        result = 6;
    }else if(random > 0.51 && random <= 0.52 ){
        div.innerText = '6 x 2';
        result = 12;
    }else if(random > 0.52 && random <= 0.53 ){
        div.innerText = '6 x 3';
        result = 18;
    }else if(random > 0.53 && random <= 0.54 ){
        result = 24;
        div.innerText = '6 x 4';
    }else if(random > 0.54 && random <= 0.55 ){
        div.innerText = '6 x 5';
        result = 30;
    }else if(random > 0.55 && random <= 0.56 ){
        div.innerText = '6 x 6';
        result = 36;
    }else if(random > 0.56 && random <= 0.57 ){
        div.innerText = '6 x 7';
        result = 42;
    }else if(random > 0.57 && random <= 0.58 ){
        div.innerText = '6 x 8';
        result = 48;
    }else if(random > 0.58 && random <= 0.59 ){
        div.innerText = '6 x 9';
        result = 54;
    }
    else if(random > 0.6 && random <= 0.61 ){
        div.innerText = '7 x 1';
        result = 7;
    }else if(random > 0.61 && random <= 0.62 ){
        div.innerText = '7 x 2';
        result = 14;
    }else if(random > 0.62 && random <= 0.63 ){
        div.innerText = '7 x 3';
        result = 21;
    }else if(random > 0.63 && random <= 0.64 ){
        result = 28;
        div.innerText = '7 x 4';
    }else if(random > 0.64 && random <= 0.65 ){
        div.innerText = '7 x 5';
        result = 35;
    }else if(random > 0.65 && random <= 0.66 ){
        div.innerText = '7 x 6';
        result = 42;
    }else if(random > 0.66 && random <= 0.67 ){
        div.innerText = '7 x 7';
        result = 49;
    }else if(random > 0.67 && random <= 0.68 ){
        div.innerText = '7 x 8';
        result = 56;
    }else if(random > 0.68 && random <= 0.69 ){
        div.innerText = '7 x 9';
        result = 63;
    }
    else if(random > 0.7 && random <= 0.71 ){
        div.innerText = '8 x 1';
        result = 8;
    }else if(random > 0.71 && random <= 0.72 ){
        div.innerText = '8 x 2';
        result = 16;
    }else if(random > 0.72 && random <= 0.73 ){
        div.innerText = '8 x 3';
        result = 24;
    }else if(random > 0.73 && random <= 0.74 ){
        result = 32;
        div.innerText = '8 x 4';
    }else if(random > 0.74 && random <= 0.75 ){
        div.innerText = '8 x 5';
        result = 40;
    }else if(random > 0.75 && random <= 0.76 ){
        div.innerText = '8 x 6';
        result = 48;
    }else if(random > 0.76 && random <= 0.77 ){
        div.innerText = '8 x 7';
        result = 54;
    }else if(random > 0.77 && random <= 0.78 ){
        div.innerText = '8 x 8';
        result = 64;
    }else if(random > 0.78 && random <= 0.79 ){
        div.innerText = '8 x 9';
        result = 72;
    }
    else if(random > 0.8 && random <= 0.81){
        div.innerText = '9 x 1';
        result = 9;
    }else if(random > 0.81 && random <= 0.82 ){
        div.innerText = '9 x 2';
        result = 18;
    }else if(random > 0.82 && random <= 0.83 ){
        div.innerText = '9 x 3';
        result = 27;
    }else if(random > 0.83 && random <= 0.84 ){
        result = 36;
        div.innerText = '9 x 4';
    }else if(random > 0.84 && random <= 0.85 ){
        div.innerText = '9 x 5';
        result = 45;
    }else if(random > 0.85 && random <= 0.86 ){
        div.innerText = '9 x 6';
        result = 54
    }else if(random > 0.86 && random <= 0.87 ){
        div.innerText = '9 x 7';
        result = 63;
    }else if(random > 0.87 && random <= 0.88 ){
        div.innerText = '9 x 8';
        result = 72;
    }else if(random > 0.88 && random <= 0.89 ){
        div.innerText = '9 x 9';
        result = 81;
    }
    else if(random > 0.9 && random < 0.93){
        div.innerText = 'you can do it moiz you are the best (write 1 to continue)'
        result = 1;
        console.log('what')
    }else{
        multi();
    }
} */