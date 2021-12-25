const   box=document.querySelector('.box'),
        startBtn=document.querySelector('#button'),
        info=document.querySelector('#infoText'),
        repeat=document.querySelector('#repeatBtn')
        
    const checkBtn=document.createElement('a'),
        againBtn=document.createElement('a'),
        playBtn=document.createElement('a'),
        inputNumber=document.createElement('input'),
        showBoxRemember=document.createElement('div');
        inputNumber.id='inputNumber';
let errorSearch=true;
//inputNumber.id='inputNumber'
box.append(info);

function randomNumbers(num){
    return parseInt(Math.random()*num);
}
hide(repeat);

function hide(element){
    element.style.display='none';
}

function show(element){
    element.style.display='block';
}

function fillArray(length, num){
    let array=[];
    for(let i=0; i<length; i++){
        array.push(randomNumbers(num)); 
    }
    return array.join(', ');
}

function message(text){
    info.innerHTML=`${text}`
}

function showMessage(numbers){
    message(`Remember numbers and orders:<br><br> ${numbers}`)      
}

function getAnswer(number){
    message(`Whit is the ${number} number?`);
    return
}

function searchAnswer(number, userAnswer){
    if(userAnswer == number){
        message('You right!!!');
    }else{
        message(`Wrong answer, right number is ${number}`);
        errorSearch=false;
    }
}

let attemptedAnswers=3;

const guessNumber=()=>{
    const numbers=fillArray(5, 100);
    for(let i=0; i<attemptedAnswers; i++){
        const randomIndex=randomNumbers(numbers.length);
        let firstLastAnswer=getAnswer(randomIndex + 1);
        searchAnswer(numbers[randomIndex], firstLastAnswer);
    }
}

/* function game(){
    let repeat = true;
    while(repeat){
    const numbers=fillArray(5, 100);
    let attemptedAnswers=3;   
    showMessage(numbers);
    for(let i=0; i<attemptedAnswers; i++){
        const randomIndex=randomNumbers(numbers.length);
        let firstLastAnswer=getAnswer(randomIndex + 1);
        searchAnswer(numbers[randomIndex], firstLastAnswer);
    }
    if(errorSearch){
        message(`You have a perfect memory!`);
        } 
        repeat=message('one more time?');
        }
} */

checkBtn.onclick=()=>{
    const userAnswer=inputNumber.value;
    if(userAnswer==='' || isNaN(userAnswer)){
        message(`It looks like you enter not a number, <br> try again.`)
        inputNumber.value='';
        inputNumber.focus();
        return
    }
    if(userAnswer!==guessNumber){
        let repeat = true;
        while(repeat){
        const numbers=fillArray(5, 100);
        let attemptedAnswers=3;   
        showMessage(numbers);
        for(let i=0; i<attemptedAnswers; i++){
            const randomIndex=randomNumbers(numbers.length);
            let firstLastAnswer=getAnswer(randomIndex + 1);
            searchAnswer(numbers[randomIndex], firstLastAnswer);
        }
        if(errorSearch){
            message(`You have a perfect memory!`);
            } 
            repeat=message('one more time?');
            }
    }
    
}

playBtn.onclick=function(){
    box.innerHTML='';

    checkBtn.href='#';
    checkBtn.id='checkBtn';
    checkBtn.innerText='Check';
    
    box.append(inputNumber)
    box.append(checkBtn);
}

function start(){
    startBtn.remove();
    playBtn.href='#';
    playBtn.innerText='play';
    playBtn.id='playBtn';
    const numbers=fillArray(5, 100);
    showMessage(numbers)
    box.append(playBtn);
}

startBtn.addEventListener('click', start);
/* checkBtn.addEventListener('click', game); */
againBtn.addEventListener('click', start);
