const input=document.getElementById('userAnswer'),
      checkBtn=document.getElementById('button'),
      repeat=document.getElementById('repeatBtn'),
      messages=document.getElementById('message');
      MAX_TRY_COUNT=5;

let tryCount=0,
    guessNumber=parseInt(Math.random()*101),
    isGuessed=false;

    hide(repeat);
    console.log(guessNumber);
    input.focus();

    function changeMessage(message){
        messages.innerHTML=message;
    }

    function hide(e){
      e.style.display='none';
    }

    function show(e){
      e.style.display='block';
    }

    function gameState(message){
      hide(checkBtn);
      hide(input);
      show(repeat);
      changeMessage(message);
    }

    function gameOver(isGuessed=false){
      if(isGuessed){
        return gameState('This is the correct Answer! <br> You win!!! &#128522');
      }else if(tryCount==MAX_TRY_COUNT){
      return  gameState(`<p class='lost'>You lost &#128533 <br> correct answer ${guessNumber}</p>`);
      }else{
        gameState(`We'll play another time`);
      }
    }

checkBtn.onclick=function(){
  const userAnswer=input.value;
  if(userAnswer==='q'){
    return gameState(`We'll play another time`);
  }
  if(userAnswer=='' || isNaN(userAnswer)){
    changeMessage(`It looks like you enter not a number, <br> Try again. You have ${MAX_TRY_COUNT-tryCount} more attempts`);
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
    changeMessage(`The number is to ${userAnswer>guessNumber?'big':'small'}, <br> try again. You have ${MAX_TRY_COUNT-tryCount} more attempts.`);
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
  show(checkBtn);
  input.focus();

  changeMessage(`Guess number is grater than 0, but less than 100 <br> To Exit enter 'q'`);
  console.log(guessNumber);
}
