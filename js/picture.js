const graphicClick=document.querySelector('.graphic'),
        content=document.querySelector('.portfolio-content'),
        indesign=document.querySelector('.indesign'),
        webdesign=document.querySelector('.webDesign'),
        slider=document.querySelector('.slider'),
        indesignClick=document.querySelector('.indesign'),
        album=document.querySelector('.album'),
        sites=document.querySelector('.sites');

hide(album);
hide(slider);
hide(sites);

graphicClick.onclick=()=>{
    //content.innerHTML='';
    hide(graphicClick);
    hide(indesign);
    hide(webdesign);
    show(album);    
}

indesignClick.onclick=()=>{
    hide(graphicClick);
    hide(indesign);
    hide(webdesign);
    hide(album);
    show(slider);
}

webdesign.onclick=()=>{
    hide(graphicClick);
    hide(indesign);
    hide(webdesign);
    hide(album);
    hide(slider);
    show(sites);
}

function hide(element) {
    element.style.display = "none"
}
        
function show(element) {
    element.style.display = "block";
    element.classList.add('transition');
}
