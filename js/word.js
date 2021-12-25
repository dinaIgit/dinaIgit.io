const words=[
    {word: 'bread', description: "it's food"},
    {word: 'salt', description: 'condiment'},
    {word: 'elephant', description: 'big animal'},
    {word: 'giraffe', description: 'big animal'},
    {word: 'hamster', description: 'small animal'},
    {word: 'table', description: 'furniture'},
    {word: 'candy', description: 'sweet food'},
    {word: 'chair', description: 'furniture'},
    {word: 'coat', description: 'clothes'}
]

const randomWord=(words)=>{return Math.floor(Math.random()*words.length)};

const   box=document.querySelector('.box'),
        info=document.querySelector('#infoText'),
        btn=document.querySelector('#button');

const   letter=document.createElement('input'),
        checkBtn=document.createElement('a'),
        againBtn=document.createElement('a');

letter.focus();
let isGuessed=false;
const arrayWords=words[randomWord(words)];
let word=arrayWords.word,
    arrayAnswer=[],
    remainingLetter;

function getArrayAnswer(){    
    for(let i=0; i<word.length; i++){
        arrayAnswer[i]='-';
    }
    return arrayAnswer;
}

function checkLetter(word, letter){
    for(let i=0; i < word.length; i++){
        if(word[i]===letter && arrayAnswer[i]==='-'){
            arrayAnswer[i]=letter;
            remainingLetter--;
            isGuessed=true;
        }
    }
    return isGuessed;
}

function changeMessage(message){
    document.querySelector('#message').innerHTML=message;
}

function start(){
    let targetWord=arrayWords.word;
    if(!targetWord) changeMessage('Enter a word, please!!!');
    else{remainingLetter=word.length;
    arrayAnswer=getArrayAnswer();
    info.innerHTML=`Word is ${arrayAnswer.length} letters <br> ${arrayWords.description}
    <p style='color:red; font-size:30px; font-weight: 600;'>${arrayAnswer.join('')}</p> <br> Enter letter`;
    btn.remove();
    againBtn.remove()
    letter.setAttribute('id','letter');
    box.append(letter);
    checkBtn.href='#';
    checkBtn.innerText='check';
    checkBtn.id='checkBtn';
    box.append(checkBtn);
    letter.focus();
    }
}

function play(){
    let input=letter.value;
    letter.value='';
    if(checkLetter(word, input)){
        letter.value='';
        info.innerHTML=`Word is ${arrayAnswer.length} letters <br> ${arrayWords.description}<br> Super! <p style='color:red; font-size:30px; font-weight: 600;'>${arrayAnswer.join('')}</p> <br>
        one more letter?`;
        if(remainingLetter==0){
            letter.value='';
            info.innerHTML=`Word is ${arrayAnswer.length} letters <br> ${arrayWords.description}<br>Super! <p style='color:red; font-size:30px; font-weight: 600;'>${arrayAnswer.join('')}</p> <br> The end!`;
            letter.remove();
            checkBtn.remove();
            againBtn.href='#';
            againBtn.id='repeatBtn'
            againBtn.innerText='Play again'
            box.append(againBtn);
        }
        letter.value='';
        letter.focus();
}
else{
    info.innerHTML=`Word is ${arrayAnswer.length} letters <br> ${arrayWords.description}<br> No such letter <br> <p style='color:red; font-size:30px; font-weight: 600;'>${arrayAnswer.join('')}</p><br>
    one more letter?`;
    letter.value='';
    letter.focus();
    } 
}

function changeInfo(message){
    document.querySelector('#infoText').innerHTML=message;
}

btn.addEventListener('click', start);
checkBtn.addEventListener('click', play);
againBtn.addEventListener('click', start);

