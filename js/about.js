
const textEng=document.getElementById('enText'),
      textDe=document.querySelector('.aboutTextDe'),
      textRu=document.querySelector('.aboutTextRu'),
      deBtnClick=document.getElementById('de-btn'),
      ruBtnClick=document.getElementById('ru-btn'),
      enBtnClick=document.getElementById('en-btn'),
      btnBack=document.getElementById('back'),
      myPhoto=document.querySelector('.btn-aboutMe'),
      btnBackDe=document.getElementById('backTwo'),
      btnBackRu=document.getElementById('backAbout');

enBtnClick.onclick=function(){
  show(textEng)
}

deBtnClick.onclick=function(){
  show(textDe)
}

ruBtnClick.onclick=function(){
  show(textRu)
}
btnBack.onclick=function(){
  hide(textEng)
  hide(textDe)
  hide(textRu)
}
btnBackDe.onclick=function(){
  hide(textEng)
  hide(textDe)
  hide(textRu)
}
btnBackRu.onclick=function(){
  hide(textEng)
  hide(textDe)
  hide(textRu)
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
