const easyWords = [
    ["food", "еда", "Essen"],
    ["bike", "велосипед", "Fahrrad"],
    ['apple', 'яблоко', 'Apfel'],
    ['do', 'делать', 'machen'],
    ['mean', 'иметь в виду', 'meinen'],
    ],
    complexWords = [
    ["function", "функция", "Funktion"],
    ["array", "массив", "Array"],
    ['stream', 'поток'],
    ['resolve', 'решить'],
    ['calculate', 'посчитать']
    ],
    eng = 0,
    ru = 1,
    de = 2,
    levels = [easyWords, complexWords],
    languages = ["eng", "ru", "de"];

const   box=document.querySelector('.box'),
        startBtn=document.querySelector('#button'),
        info=document.querySelector('#infoText'),
        begin=document.querySelector('.beginBox');
const   letterFrom=document.createElement('input'),
        letterTo=document.createElement('input'),
        letter=document.createElement('input'),
        checkBtn=document.createElement('a'),
        againBtn=document.createElement('a');

letterFrom.focus();

    function startGame() { //arrLevels, arrLangs
        const langFrom = chooseLanguage(languages);
        if (langFrom == null) {
            finaleMessage(langFrom);
        } else {
            languages.splice(langFrom, 1);
            let langTo = chooseLanguage(languages);
            //langTo == null ? finaleMessage(langTo) : game(arrLevels, langFrom, langTo);
            if (langTo == null) {
                finaleMessage(langTo);
            } else {
                game(levels, langFrom, langTo);
            }
        }
    }
    
    function game( langWord, langTranslate) {
        for (let i = 0; i < levels.length; i++) {
            const words = levels[i].map(item => item);  //gameLevels[i].slice();
            const errorCount = checkUserTranslation(words, langWord, langTranslate);
            const repeat = finaleMessage(errorCount);  // null , true, false
            if (!repeat) {
                let nextLevel;
                if (i != levels.length - 1) {
                    nextLevel = message('Next level?');
                }
                if (!nextLevel) {
                    message('See you next time');
                    break;
                }
            } else {
                i--;
            }
        }
    }
    
    function checkUserTranslation(words, langWord, langTranslate) {
        let errorCount = 0;
        while (words.length) {
            const index = getRandomArrayIndex(words.length);
            const userTranslation = getUserTranslation(words, index, langWord);
            if (userTranslation == null) {
                return null;
            }
            else if (userTranslation === words[index][langTranslate]) {
                message('Correct!');
                words.splice(index, 1);
            } else {
                message(`wrong, correct answer is ${words[index][langTranslate]}`);
                errorCount++;
            }
        }
        return errorCount;
    }
    
    function getUserTranslation(words, index, langWord) {
        return message(`how do you translate the word ${words[index][langWord]}?`);
    }
    
    function getRandomArrayIndex(range) {
        return Math.floor(Math.random() * range);
    }
    
    function finaleMessage(count) {
        if (count == 0) message('Great job!');
        else {
            if (count)
                message(`you were wrong ${count} times`);
        }
        if (count == null) {
            message('you don\'t like continue...');
            return null
        } else {

            return message('One more time?');
        }
    
    }

    function message(text){
        info.innerHTML=`${text}`
    }
    
    function chooseLanguage(languages) {    
        begin.style.display='block'
        startBtn.remove();
        checkBtn.href='#';
        checkBtn.innerText='check';
        checkBtn.id='checkBtn';
        letterFrom.setAttribute('id','letterFrom');
        letterFrom.setAttribute('placeholder','from');
        letterTo.setAttribute('id','letterTo');
        letterTo.setAttribute('placeholder','to');
        box.append(letterFrom);
        box.append(letterTo)
        box.append(checkBtn)
        letterFrom.focus();
        let choiceFrom=letterFrom.value,
            choiceTo=letterTo.value;
        selectLanguages(languages, choiceFrom);
        selectLanguages(languages, choiceTo);
    }

    function selectLanguages(languages,choice){
        while (languages===choice && choice != null);
        switch (choice) {
            case 'eng': return eng  //0
            case 'ru': return ru
            case 'de': return de
            default: return null
        }
    }

startBtn.addEventListener('click', startGame);
checkBtn.addEventListener('click', game);
againBtn.addEventListener('click', startGame);