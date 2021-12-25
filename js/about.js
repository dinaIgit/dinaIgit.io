const textEng=document.querySelector('.aboutTextEng'),
        textDe=document.querySelector('.aboutTextDe'),
        textRu=document.querySelector('.aboutTextRu'),
        deBtnClick=document.querySelector('#de-btn'),
        ruBtnClick=document.querySelector('#ru-btn'),
        enBtnClick=document.querySelector('#en-btn'),
        btnBack=document.querySelector('#back'),
        myPhoto=document.querySelector('.my-photo'),
        text=document.querySelector('.aboutText'),
        btnBackDe=document.querySelector('#backTwo'),
        btnBackRu=document.querySelector('#backAbout');


deBtnClick.onclick=function(){
    show(textDe)
    hide(myPhoto)
}

enBtnClick.onclick=function(){
    show(textEng)
    hide(myPhoto)
}

ruBtnClick.onclick=function(){
    show(textRu)
    hide(myPhoto)
}
btnBack.onclick=function(){
    hide(textEng)
    hide(textDe)
    hide(textRu)
    show(myPhoto)
}
btnBackDe.onclick=function(){
    hide(textEng)
    hide(textDe)
    hide(textRu)
    show(myPhoto)
}
btnBackRu.onclick=function(){
    hide(textEng)
    hide(textDe)
    hide(textRu)
    show(myPhoto)
}

function hide(element) {
    element.style.display = "none"
}
        
function show(element) {
    element.style.display = "block";
    element.classList.add('transition');
}

function back(element){
    element
}

