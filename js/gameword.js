const wordsBank = [
  ["bread", "it is food", "brot", "Lebensmittel", "хлеб", "еда"],
  ["salt", "condiment", "Salz", "Würze", "соль", "приправа"],
  [
    "elephant",
    "big animal",
    "Elefant",
    "großes Tier",
    "слон",
    "большое животное",
  ],
  [
    "giraffe",
    "big animal",
    "Giraffe",
    "großes Tier",
    "жираф",
    "большое животное",
  ],
  [
    "hamster",
    "small animal",
    "Hamster",
    "klein Tier",
    "хомяк",
    "маленькое животное",
  ],
  ["table", "furniture", "Schreibtisch", "Möbel", "стол", "мебель"],
  ["candy", "sweet food", "Bonbon", "Süßigkeit", "конфета", "сладость"],
  ["chair", "furniture", "Sessel", "Möbel", "кресло", "мебель"],
  ["coat", "clothes", "Mantel", "Kleidung", "пальто", "одежда"],
  ['socks','clothes','socken','Kleidung','носки','одежда'],
  ['watermelon','it is berry','wassermelone','es ist eine Beere','арбуз','это ягода']
];


const answerEng = 0,
  questionEng = 1,
  answerDe = 2,
  questionDe = 3,
  answerRu = 4,
  questionRu = 5;

const input = document.getElementById("userAnswer"),
  checkBtn = document.getElementById("checkBtn"),
  startBtn = document.getElementById("startBtn"),
  language = document.getElementById("language"),
  inputEng = document.getElementById("eng"),
  inputDe = document.getElementById("de"),
  inputRu = document.getElementById("ru"),
  messages = document.getElementById("message"),
  info = document.getElementById("info");

let maxFaultsCount = 5,
  actualFaults,
  questionLang,
  answerLang,
  wordNumber,
  guessWord,
  answerArr,
  numLetter,
  wordState = document.getElementById("wordState");

hide(checkBtn);
hide(input);

//-----------------------------
function changeMessage(message) {
  messages.innerHTML = message;
};

//-----------------------------
function changeInfo(message) {
  info.innerHTML = message;
};

//-----------------------------
function hide(e) {
  e.style.display = "none";
};

//-----------------------------
function show(e) {
  e.style.display = "block";
};

//-----------------------------
startBtn.onclick = () => {
  languageSelection();
  if (wordsBank.length) {
    wordNumber = getRandomNumber(wordsBank.length);

    guessWord = wordsBank[wordNumber][answerLang].toUpperCase();
    answerArr = makeSymbolArr(guessWord);

    changeMessage(`My word is ${guessWord.length} letters<br><b>${wordsBank[wordNumber][questionLang]}</b>`
    );

    changeInfo("Enter the letter:");
    show(input);
    hide(startBtn);
    hide(language);
    show(checkBtn);

    wordState.innerHTML = `${answerArr.join(" ")}`;
    input.value = "";
    input.focus();
    actualFaults = maxFaultsCount;
  } else {
    hide(input);
    hide(startBtn);

    wordState.innerHTML =
      "You finished the Game!<br>See you next time! &#128512";

    changeMessage("");
    changeInfo("");
  }
};

//-----------------------------
function makeSymbolArr(str) {
  const arr = [];
  arr.length = str.length;
  for (let i = 0; i < arr.length; i++) {
    arr[i] = "-";
  }
  return arr;
};

//-----------------------------
checkBtn.onclick = () => {
  let inputLetter = input.value;
  if (checkLetter(inputLetter)) {
    changeMessage(`Super! <br><b>${wordsBank[wordNumber][questionLang]}</b>`);
    changeInfo("Try to guess another letter:");
    wordState.innerHTML = `${answerArr.join(" ")}`;
    input.value = "";
    input.focus();

    if (!answerArr.includes("-")) {
      hide(input);
      hide(checkBtn);
      show(startBtn);
      changeMessage("");
      changeInfo("If you want to guess a new word press <b>Start</b>");
      wordState.innerHTML += `<br><p><b>Super! You win!</b>&#128522</p>`;
      wordsBank.splice(wordNumber, 1);
    }
  } else {
    if (actualFaults) {
      changeMessage(
        `No such letter...<br><b>${wordsBank[wordNumber][questionLang]}</b>`
      );
      changeInfo(`You have still ${actualFaults} attempts. Try again:`);
      input.value = "";
      input.focus();
      actualFaults--;
    } else {
      hide(input);
      hide(checkBtn);
      show(startBtn);
      wordState.innerHTML = `Sorry you lost! &#128533 <br>Guess word was ${guessWord}<br><br><span>Press <b>Start</b> if you want to repeat the game.</span>`;
      changeMessage("");
      changeInfo("");
    }
  }
};

//-----------------------------
function checkLetter(letter) {
  let letterContain = false;
  for (let i = 0; i < guessWord.length; i++) {
    if (letter.toUpperCase() == guessWord[i] && answerArr[i] == "-") {
      letterContain = true;
      answerArr[i] = letter.toUpperCase();
      numLetter--;
    }
  }
  return letterContain;
};

//-----------------------------
function getRandomNumber(range) {
  return Math.floor(Math.random() * range);
};

//-----------------------------
function languageSelection() {
  if (inputEng.checked) {
    questionLang = questionEng;
    answerLang = answerEng;
  } else if (inputDe.checked) {
    questionLang = questionDe;
    answerLang = answerDe;
  } else {
    questionLang = questionRu;
    answerLang = answerRu;
  }
};
