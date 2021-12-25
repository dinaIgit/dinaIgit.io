const wordsBank=[
    ['bread',"it's food",'хлеб','еда','brot','Lebensmittel'],
    ['salt','condiment','соль','приправа','Salz','Würze'],
    ['elephant','big animal','слон','большое животное','Elefant','großes Tier'],
    ['giraffe','big animal','жираф','большое животное','Giraffe','großes Tier'],
    ['hamster','small animal','хомяк','маленькое животное','Hamster','Kleintier'],
    ['table','furniture','стол','мебель','Schreibtisch','Möbel'],
    ['candy','sweet food','конфета','сладость','Bonbon','Süßigkeit'],
    ['chair','furniture','кресло','мебель','Sessel','Möbel'],
    ['coat','clothes','пальто','одежда','Mantel','Kleidung']
];
const answerEng=0, questionEng=1, answerRus=2, questionRus=3, answerDe=4, questionDe=5;

const input = document.querySelector("#userAnswer"),
    checkBtn = document.querySelector("#checkBtn"),
    startBtn = document.querySelector("#startBtn"),
    language = document.querySelector('#language'),
    inputEng = document.querySelector('#eng'),
    inputRus = document.querySelector('#rus'),
    inputDe = document.querySelector('#de');

let maxFaultsCount = 5, actualFaults, questionLang, answerLang, wordNumber, guessWord, answerArr, numLetter, wordState = document.querySelector("#wordState");

hide(checkBtn)
hide(input)

function changeMessage(message) {
    document.querySelector("#message").innerHTML = message;
}

function changeInfo(message) {
    document.querySelector("#info").innerHTML = message;
}

function hide(element) {
    element.style.display = "none"
}

function show(element) {
    element.style.display = "block"
}

startBtn.onclick = () => {
    languageSelection()
    if (wordsBank.length) {
        wordNumber = getRandomNumber(wordsBank.length)
        console.log(wordNumber)
        console.log(wordsBank)
        guessWord = wordsBank[wordNumber][answerLang].toUpperCase();
        answerArr = makeSymbolArr(guessWord);
        changeMessage(`My word is ${guessWord.length} letters<br><b>${wordsBank[wordNumber][questionLang]}</b>`);
        changeInfo('Enter the letter:')
        show(input)
        hide(startBtn);
        hide(language);
        show(checkBtn);
        wordState.innerHTML = `${answerArr.join(" ")}`
        input.value = "";
        input.focus();
        actualFaults = maxFaultsCount
    } else {
        hide(input)
        hide(startBtn)
        wordState.innerHTML = 'You finished the game!<br>See you next time! &#128512'
        changeMessage('')
        changeInfo('')
    }
}

function makeSymbolArr(str) {
    const arr = [];
    arr.length = str.length;
    for (let i = 0; i < arr.length; i++) {
        arr[i] = "-";
    }
    return arr;
}

checkBtn.onclick = () => {
    let inputLetter = input.value;
    if (checkLetter(inputLetter)) {
        changeMessage(`Super!<br><b>${wordsBank[wordNumber][questionLang]}</b>`);
        changeInfo('Try to guess another letter:')
        wordState.innerHTML = `${answerArr.join(" ")}`
        input.value = "";
        input.focus();
        if (!answerArr.includes("-")) {
            hide(input)
            hide(checkBtn)
            show(startBtn)
            changeMessage('')
            changeInfo('If you want to guess a new word, press "Start"')
            wordState.innerHTML += `<br> <p><b>Supper! You win!</b> &#128522</p>`
            wordsBank.splice(wordNumber, 1)
        }
    } else {
        if (actualFaults) {
            changeMessage(`No such letter...<br><b>${wordsBank[wordNumber][questionLang]}</b>`);
            changeInfo(`You have still ${actualFaults} attempts. Try again:`)
            input.value = "";
            input.focus();
            actualFaults--
            console.log(actualFaults)
        } else {
            hide(input)
            show(startBtn)
            hide(checkBtn)
            wordState.innerHTML = `Sorry you lost! &#128533 <br>Guess word was ${guessWord}<br><br> <span>Press "Start" if you want to repeat the game</span>`
            changeMessage('')
            changeInfo('')
        }
    }
}

function checkLetter(letter) {
    let letterContain = false;
    for (let i = 0; i < guessWord.length; i++) {
        if (letter.toUpperCase() == guessWord[i] && answerArr[i] == "-") {
            letterContain = true;
            answerArr[i] = letter.toUpperCase();
            numLetter--;
        }
    } return letterContain;
}

function getRandomNumber(range) {
    return Math.floor(Math.random() * range)
}

function languageSelection() {
    if (inputEng.checked) {
        questionLang = questionEng
        answerLang = answerEng
    } else if(inputRus.checked){
        questionLang = questionRus
        answerLang = answerRus
    }else{
        questionLang = questionDe
        answerLang = answerDe
    }
}
