const input=document.querySelector('#userAnswer'),
        checkBtn=document.querySelector('#button'),
        repeat=document.querySelector('#repeatBtn'),
        MAX_TRY_COUNT=5;

let tryCount=0,
    guessNumber=parseInt(Math.random()*101),
    isGuessed=false;

    hide(repeat);
    console.log(guessNumber);
    input.focus();

    function changeMessage(message){
        document.querySelector('#message').innerHTML=message;
    }

    function hide(element){
        element.style.display='none';
    }

    function show(element){
        element.style.display='block';
    }

    function gameState(message){
        hide(checkBtn);
        hide(input);
        show(repeat);
        changeMessage(message);
    }

    function gameOver(isGuessed=false){
        if(isGuessed){
            gameState('You win!!! &#128522 <br>');
        }else if(tryCount==MAX_TRY_COUNT){
            gameState(`<p class='lost'>You lost &#128533 <br> correct answer ${guessNumber}</p>`);
        }else{
            gameState(`We'll play another time`);
        }
    }

checkBtn.onclick=function(){
    const userAnswer=input.value;
    if(userAnswer==='q'){
        return gameOver(isGuessed);
    } 
    if(userAnswer==='' || isNaN(userAnswer)){
        changeMessage(`It looks like you enter not a number, <br> try again. You have ${MAX_TRY_COUNT-tryCount} more attempts`);
        input.value='';
        input.focus();
        return
    }
    tryCount++;
    if(userAnswer==guessNumber){
        isGuessed=true;
        return gameOver(isGuessed);
    }else if(tryCount==MAX_TRY_COUNT){
        return gameOver();
    }else{
        changeMessage(`The number is to ${userAnswer>guessNumber?'big':'small'}, <br> try again. You have ${MAX_TRY_COUNT-tryCount} more attempts`);
        input.value='';
        input.focus();
    }
}

repeat.onclick=function(){
    guessNumber=parseInt(Math.random()*101);
    tryCount=0;
    input.value='';
    hide(repeat);
    show(input);
    show(checkBtn)
    input.focus();
    changeMessage(`Guess number is grater than 0, but less than 100 <br> To exit enter 'q'`)
    console.log(guessNumber);
}