// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 6.8
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery.fn.wowSlider=function(ai){var aD=jQuery;var H=this;var y=H.get(0);window.ws_basic=function(k,c,f){var aR=aD(this);this.go=function(aS){f.find(".ws_list").css("transform","translate3d(0,0,0)").stop(true).animate({left:(aS?-aS+"00%":(/Safari/.test(navigator.userAgent)?"0%":0))},k.duration,"easeInOutExpo",function(){aR.trigger("effectEnd")})}};ai=aD.extend({effect:"fade",prev:"",next:"",duration:1000,delay:20*100,captionDuration:1000,captionEffect:0,width:960,height:360,thumbRate:1,gestures:0,caption:true,controls:true,keyboardControl:false,scrollControl:false,autoPlay:true,autoPlayVideo:false,responsive:1,support:jQuery.fn.wowSlider.support,stopOnHover:0,preventCopy:1},ai);var C=navigator.userAgent;var ao=aD(".ws_images",H);var S=ao.find("ul").css("width","100%").wrap("<div class='ws_list'></div>").parent();function h(c){return S.css({left:-c+"00%"})}aD("<div>").css({width:"100%",visibility:"hidden","font-size":0,"line-height":0}).append(ao.find("li:first img:first").clone().css({width:"100%"})).prependTo(ao);S.css({position:"absolute",top:0,height:"100%",transform:/Firefox/.test(C)?"":"translate3d(0,0,0)"});var b=ai.images&&(new wowsliderPreloader(this,ai));var aI=ao.find("li");var z=aI.length;function aH(c){return((c||0)+z)%z}var d=S.width()/S.find("li").width(),L={position:"absolute",top:10,height:"100%",overflow:"hidden"},aC=aD("<div>").addClass("ws_swipe_left").css(L).prependTo(S),aJ=aD("<div>").addClass("ws_swipe_right").css(L).appendTo(S);if(/MSIE/.test(C)||/Trident/.test(C)||/Safari/.test(C)||/Firefox/.test(C)){var t=Math.pow(10,Math.ceil(Math.LOG10E*Math.log(z)));S.css({width:t+"00%"});aI.css({width:100/t+"%"});aC.css({width:100/t+"%",left:-100/t+"%"});aJ.css({width:100/t+"%",left:z*100/t+"%"})}else{S.css({width:z+"00%",display:"table"});aI.css({display:"table-cell","float":"none",width:"auto"});aC.css({width:100/z+"%",left:-100/z+"%"});aJ.css({width:100/z+"%",left:"100%"})}var G=ai.onBeforeStep||function(c){return c+1};ai.startSlide=aH(isNaN(ai.startSlide)?G(-1,z):ai.startSlide);if(b){b.load(ai.startSlide,function(){})}h(ai.startSlide);var W,ad;if(ai.preventCopy&&!/iPhone/.test(navigator.platform)){W=aD('<div class="ws_cover"><a href="#" style="display:none;position:absolute;left:0;top:0;width:100%;height:100%"></a></div>').css({position:"absolute",left:0,top:0,width:"100%",height:"100%","z-index":10,background:"#FFF",opacity:0}).appendTo(H);ad=W.find("A").get(0)}var r=[];var A=aD(".ws_frame",H);aI.each(function(c){var aR=aD(">img:first,>iframe:first,>iframe:first+img,>a:first,>div:first",this);var aS=aD("<div></div>");for(var k=0;k<this.childNodes.length;){if(this.childNodes[k]!=aR.get(0)&&this.childNodes[k]!=aR.get(1)){aS.append(this.childNodes[k])}else{k++}}if(!aD(this).data("descr")){if(aS.text().replace(/\s+/g,"")){aD(this).data("descr",aS.html().replace(/^\s+|\s+$/g,""))}else{aD(this).data("descr","")}}aD(this).css({"font-size":0});aD(this).data("type",aR[0].tagName);var f=aD(">iframe",this).css("opacity",0);r[r.length]=aD(">a>img",this).get(0)||aD(">iframe+img",this).get(0)||aD(">*",this).get(0)});r=aD(r);r.css("visibility","visible");aC.append(aD(r[z-1]).clone());aJ.append(aD(r[0]).clone());var aN=[];ai.effect=ai.effect.replace(/\s+/g,"").split(",");function aE(c){if(!window["ws_"+c]){return}var f=new window["ws_"+c](ai,r,ao);f.name="ws_"+c;aN.push(f)}for(var Q in ai.effect){aE(ai.effect[Q])}if(!aN.length){aE("basic")}var x=ai.startSlide;var ar=x;var an=false;var i=1;var ax=0,ag=false;function N(c,f){if(an){an.pause(c.curIndex,f)}else{f()}}function al(c,f){if(an){an.play(c,0,f)}else{f()}}aD(aN).bind("effectStart",function(c,f){ax++;N(f,function(){n();if(f.cont){aD(f.cont).stop().show().css("opacity",1)}if(f.start){f.start()}ar=x;x=f.nextIndex;V(x,ar)})});aD(aN).bind("effectEnd",function(c,f){h(x).stop(true,true).show();setTimeout(function(){al(x,function(){ax--;K();if(an){an.start(x)}})},f?(f.delay||0):0)});function ap(c,k,f){if(ax){return}if(isNaN(c)){c=G(x,z)}c=aH(c);if(x==c){return}if(b){b.load(c,function(){X(c,k,f)})}else{X(c,k,f)}}function ab(k){var f="";for(var c=0;c<k.length;c++){f+=String.fromCharCode(k.charCodeAt(c)^(1+(k.length-c)%7))}return f}ai.loop=ai.loop||Number.MAX_VALUE;ai.stopOn=aH(ai.stopOn);var m=Math.floor(Math.random()*aN.length);function X(c,k,f){if(ax){return}if(k){if(f!=undefined){i=f^ai.revers}h(c)}else{if(ax){return}ag=false;(function(aS,aR,aT){m=Math.floor(Math.random()*aN.length);aD(aN[m]).trigger("effectStart",{curIndex:aS,nextIndex:aR,cont:aD("."+aN[m].name,H),start:function(){if(aT!=undefined){i=aT^ai.revers}else{i=!!(aR>aS)^ai.revers?1:0}aN[m].go(aR,aS,i)}})}(x,c,f));H.trigger(aD.Event("go",{index:c}))}x=c;if(x==ai.stopOn&&!--ai.loop){ai.autoPlay=0}if(ai.onStep){ai.onStep(c)}}function n(){H.find(".ws_effect").fadeOut(200);h(x).fadeIn(200).find("img").css({visibility:"visible"})}if(ai.gestures==2){H.addClass("ws_gestures")}function aw(aS,k,f,aR,aU,aT){new ae(aS,k,f,aR,aU,aT)}function ae(aR,aV,aY,k,a0,aZ){var aU,aS,f,c,aW=0,aX=0,aT=0;if(!aR[0]){aR=aD(aR)}aR.on((aV?"mousedown ":"")+"touchstart",function(a2){var a1=a2.originalEvent.touches?a2.originalEvent.touches[0]:a2;if(ai.gestures==2){H.addClass("ws_grabbing")}aW=0;if(a1){aU=a1.pageX;aS=a1.pageY;aX=aT=1;if(k){aX=aT=k(a2)}}else{aX=aT=0}if(!a2.originalEvent.touches){a2.preventDefault();a2.stopPropagation()}});aD(document).on((aV?"mousemove ":"")+"touchmove",aR,function(a2){if(!aX){return}var a1=a2.originalEvent.touches?a2.originalEvent.touches[0]:a2;aW=1;f=a1.pageX-aU;c=a1.pageY-aS;if(aY){aY(a2,f,c)}});aD(document).on((aV?"mouseup ":"")+"touchend",aR,function(a1){if(ai.gestures==2){H.removeClass("ws_grabbing")}if(!aX){return}if(aW&&a0){a0(a1,f,c)}if(!aW&&aZ){aZ(a1)}if(aW){a1.preventDefault();a1.stopPropagation()}aW=0;aX=0});aR.on("click",function(a1){if(aT){a1.preventDefault();a1.stopPropagation()}aT=0})}var U=ao,p="!hgws9'idvt8$oeuu?%lctv>\"m`rw=#jaqq< kfpr:!hgws9'idvt8$oeuu?%lctv>\"m`rw=#jaqq< kfpr:!hgws9'idvt8$oeuu?%lctv>\"m`rw=#jaqq< kfpr:!hgws9";if(!p){return}p=ab(p);if(!p){return}else{function M(f,k,aS){var aR=new Date().getTime();var c=function(){var aU=new Date().getTime();var aT=k?((aU-aR)/k):1;if(aT<1){f(aT);requestAnimationFrame(c)}else{cancelAnimationFrame(c);f(1);if(aS){aS()}}};c()}}if(ai.gestures){function g(k){var c=k.css("transform"),f={top:0,left:0};if(c){c=c.match(/(-?[0-9\.]+)/g);if(c){if(c[1]=="3d"){f.left=parseFloat(c[2])||0;f.top=parseFloat(c[3])||0}else{f.left=parseFloat(c[4])||0;f.top=parseFloat(c[5])||0}}else{f.left=0;f.top=0}}return f}var s=0,o=10,aK,av,q,P;aw(H,ai.gestures==2,function(k,f,c){P=!!aN[0].step;ay();S.stop(true,true);if(q){ag=true;ax++;q=0;if(!P){n()}}s=f;if(f>aK){f=aK}if(f<-aK){f=-aK}if(P){aN[0].step(x,f/aK)}else{if(ai.support.transform&&ai.support.transition){S.css("transform","translate3d("+f+"px,0,0)")}else{S.css("left",av+f)}}},function(k){var f=/ws_playpause|ws_prev|ws_next|ws_bullets/g.test(k.target.className)||aD(k.target).parents(".ws_thumbs, .ws_bullets").get(0);var c=e?(k.target==e[0]):0;if(f||c||(an&&an.playing())){return false}q=1;aK=ao.width();av=parseFloat(-x*aK)||0;return true},function(aT,f,c){q=0;var aR=ao.width(),k=aH(x+(f<0?1:-1)),aU=aR*f/Math.abs(f);if(Math.abs(s)<o){k=x;aU=0}var aS=200+200*(aR-Math.abs(f))/aR;ax--;aD(aN[0]).trigger("effectStart",{curIndex:x,nextIndex:k,cont:P?aD(".ws_effect"):0,start:function(){ag=true;function aV(){if(ai.support.transform&&ai.support.transition){S.css({transition:"0ms",transform:/Firefox/.test(C)?"":"translate3d(0,0,0)"})}aD(aN[0]).trigger("effectEnd",{swipe:true})}function aW(){if(P){if(f>aR||f<-aR){aD(aN[0]).trigger("effectEnd")}else{M(function(aX){var aY=f+(aR*(f>0?1:-1)-f)*aX;aN[0].step(ar,aY/aR)},aS,function(){aD(aN[0]).trigger("effectEnd")})}}else{if(ai.support.transform&&ai.support.transition){S.css({transition:aS+"ms ease-out",transform:"translate3d("+aU+"px,0,0)"});setTimeout(aV,aS)}else{S.animate({left:av+aU},aS,aV)}}}if(b){b.load(k,aW)}else{aW()}}})},function(){var c=aD("A",aI.get(x));if(c){c.click()}})}var at=H.find(".ws_bullets");var ak=H.find(".ws_thumbs");function V(f,k){if(at.length){aP(f)}if(ak.length){az(f)}if(ai.caption){aO(f,k)}if(ad){var c=aD("A",aI.get(f)).get(0);if(c){ad.setAttribute("href",c.href);ad.setAttribute("target",c.target);ad.style.display="block"}else{ad.style.display="none"}}if(ai.responsive){aM()}}var au=ai.autoPlay;function aF(){if(au){au=0;setTimeout(function(){H.trigger(aD.Event("stop",{}))},ai.duration)}}function v(){if(!au&&ai.autoPlay){au=1;H.trigger(aD.Event("start",{}))}}function ay(){ac();aF()}var ah;var B=false;function K(){ac();if(ai.autoPlay){ah=setTimeout(function(){if(!B){ap(undefined,undefined,1)}},ai.delay);v()}else{aF()}}function ac(){if(ah){clearTimeout(ah)}ah=null}function aL(f,c,k){ac();f&&f.preventDefault();ap(c,undefined,k);K();if(l&&u){u.play()}}var e=ab('8B"iucc9!jusv?+,unpuimggs)eji!"');e+=ab("uq}og<%vjwjvhhh?vfn`sosa8fhtviez8ckifo8dnir(wjxd=70t{9");var R=U||document.body;if(p.length<4){p=p.replace(/^\s+|\s+$/g,"")}U=p?aD("<div>"):0;aD(U).css({position:"absolute",padding:"0 0 0 0"}).appendTo(R);if(U&&document.all){var T=aD('<iframe src="javascript:false"></iframe>');T.css({position:"absolute",left:0,top:0,width:"100%",height:"100%",filter:"alpha(opacity=0)"});T.attr({scrolling:"no",framespacing:0,border:0,frameBorder:"no"});U.append(T)}aD(U).css({zIndex:56,right:"15px",bottom:"15px"}).appendTo(R);e+=ab("uhcrm>bwuh=majeis<dqwm:aikp.d`joi}9Csngi?!<");e=U?aD(e):U;if(e){e.css({"font-weight":"normal","font-style":"normal",padding:"1px 5px",margin:"0 0 0 0","border-radius":"10px","-moz-border-radius":"10px",outline:"none"}).html(p).bind("contextmenu",function(c){return false}).show().appendTo(U||document.body).attr("target","_blank")}if(ai.controls){var af=aD('<a href="#" class="ws_next">'+ai.next+"</a>");var aa=aD('<a href="#" class="ws_prev">'+ai.prev+"</a>");H.append(af);H.append(aa);af.bind("click",function(c){aL(c,x+1,1)});aa.bind("click",function(c){aL(c,x-1,0)});if(/iPhone/.test(navigator.platform)){aa.get(0).addEventListener("touchend",function(c){aL(c,x-1,1)},false);af.get(0).addEventListener("touchend",function(c){aL(c,x+1,0)},false)}}var E=ai.thumbRate;var aq;function I(){H.find(".ws_bullets a,.ws_thumbs a").click(function(a3){aL(a3,aD(this).index())});if(ak.length){ak.hover(function(){aq=1},function(){aq=0});var aX=ak.find(">div");ak.css({overflow:"hidden"});var aT;var aY;var a0;var k=H.find(".ws_thumbs");k.bind("mousemove mouseover",function(a9){if(a0){return}clearTimeout(aY);var bb=0.2;for(var a8=0;a8<2;a8++){var bc=ak[a8?"width":"height"](),a7=aX[a8?"width":"height"](),a3=bc-a7;if(a3<0){var a4,a6,ba=(a9[a8?"pageX":"pageY"]-ak.offset()[a8?"left":"top"])/bc;if(aT==ba){return}aT=ba;var a5=(ai.support.transform&&ai.support.transition)?g(aX)[a8?"left":"top"]:aX.position()[a8?"left":"top"];aX.css({transition:"0ms linear",transform:"translate3d("+a5.left+"px,"+a5.top+"px,0)"});aX.stop(true);if(E>0){if((ba>bb)&&(ba<1-bb)){return}a4=ba<0.5?0:a3-1;a6=E*Math.abs(a5-a4)/(Math.abs(ba-0.5)-bb)}else{a4=a3*Math.min(Math.max((ba-bb)/(1-2*bb),0),1);a6=-E*a7/2}if(ai.support.transform&&ai.support.transition){aX.css({transition:a6+"ms "+(E>0?"linear":"ease"),transform:"translate3d("+(a8?a4:0)+"px,"+(a8?0:a4)+"px,0)"})}else{aX.animate(a8?{left:a4}:{top:a4},a6,E>0?"linear":"easeOutCubic")}}else{if(!(ai.support.transform&&ai.support.transition)){aX.css(a8?"left":"top",a8?a3/2:0)}}}});k.mouseout(function(a3){aY=setTimeout(function(){aX.stop();if(ai.support.transform&&ai.support.transition){var a4=g(aX);aX.css({transition:"0ms linear",transform:"translate3d("+a4.left+"px,"+a4.top+"px,0)"})}},100)});ak.trigger("mousemove");var aU,aV;if(ai.gestures){aw(H,ai.gestures==2,function(a7,a4,a3){var a6=Math.min(Math.max(aU+a4,ak.width()-aX.width()),0),a5=Math.min(Math.max(aV+a3,ak.height()-aX.height()),0);if(ai.support.transform&&ai.support.transition){aX.css({transition:"0ms linear",transform:"translate3d("+a6+"px, "+a5+"px,0)"})}else{aX.css("left",a6);aX.css("top",a5)}},function(a4){if(!aD(a4.target).parents(".ws_thumbs").get(0)){return false}a0=1;if(ai.support.transform&&ai.support.transition){var a3=g(aX);aU=a3.left;aV=a3.top}else{aU=parseFloat(aX.css("left"))||0;aV=parseFloat(aX.css("top"))||0}return true},function(){a0=0},function(){a0=0})}H.find(".ws_thumbs a").each(function(a3,a4){aw(a4,0,0,function(a5){return !!aD(a5.target).parents(".ws_thumbs").get(0)},function(a5){a0=1},function(a5){aL(a5,aD(a4).index())})})}if(at.length){var a2=at.find(">div");var aZ=aD("a",at);var aR=aZ.find("IMG");if(aR.length){var aS=aD('<div class="ws_bulframe"/>').appendTo(a2);var f=aD("<div/>").css({width:aR.length+1+"00%"}).appendTo(aD("<div/>").appendTo(aS));aR.appendTo(f);aD("<span/>").appendTo(aS);var c=-1;function aW(a5){if(a5<0){a5=0}if(b){b.loadTtip(a5)}aD(aZ.get(c)).removeClass("ws_overbull");aD(aZ.get(a5)).addClass("ws_overbull");aS.show();var a6={left:aZ.get(a5).offsetLeft-aS.width()/2,"margin-top":aZ.get(a5).offsetTop-aZ.get(0).offsetTop+"px","margin-bottom":-aZ.get(a5).offsetTop+aZ.get(aZ.length-1).offsetTop+"px"};var a4=aR.get(a5);var a3={left:-a4.offsetLeft+(aD(a4).outerWidth(true)-aD(a4).outerWidth())/2};if(c<0){aS.css(a6);f.css(a3)}else{if(!document.all){a6.opacity=1}aS.stop().animate(a6,"fast");f.stop().animate(a3,"fast")}c=a5}aZ.hover(function(){aW(aD(this).index())});var a1;a2.hover(function(){if(a1){clearTimeout(a1);a1=0}aW(c)},function(){aZ.removeClass("ws_overbull");if(document.all){if(!a1){a1=setTimeout(function(){aS.hide();a1=0},400)}}else{aS.stop().animate({opacity:0},{duration:"fast",complete:function(){aS.hide()}})}});a2.click(function(a3){aL(a3,aD(a3.target).index())})}}}function az(c){aD("A",ak).each(function(aT){if(aT==c){var k=aD(this);k.addClass("ws_selthumb");if(!aq){var f=ak.find(">div"),aS=k.position()||{},aV;if(ai.support.transform&&ai.support.transition){aV=g(f);var aU=-Math.max(Math.min(aS.left,-aV.left),aS.left+k.width()-ak.width()),aR=-Math.max(Math.min(aS.top,0),aS.top+k.height()-ak.height());f.css({transition:"300ms ease",transform:"translate3d("+aU+"px,"+aR+"px,0)"})}else{aV=f.position()||{};f.stop(true).animate({left:-Math.max(Math.min(aS.left,-aV.left),aS.left+k.width()-ak.width()),top:-Math.max(Math.min(aS.top,0),aS.top+k.height()-ak.height())})}}}else{aD(this).removeClass("ws_selthumb")}})}function aP(c){aD("A",at).each(function(f){if(f==c){aD(this).addClass("ws_selbull")}else{aD(this).removeClass("ws_selbull")}})}if(ai.caption){var D=aD("<div class='ws-title' style='display:none'></div>");var aA=aD("<div class='ws-title' style='display:none'></div>");aD("<div class='ws-title-wrapper'>").append(D,aA).appendTo(H);D.bind("mouseover",function(c){if(!an||!an.playing()){ac()}});D.bind("mouseout",function(c){if(!an||!an.playing()){K()}})}var Z={none:function(k,c,aS,f,aR){c.html(aR);c.show()}};Z[ai.captionEffect]=window["ws_caption_"+ai.captionEffect];function O(c){var f=aI[c],aR=aD("img",f).attr("title"),k=aD(f).data("descr");if(!aR.replace(/\s+/g,"")){aR=""}return(aR?"<span>"+aR+"</span>":"")+(k?"<br><div>"+k+"</div>":"")}function aO(c,aR){var k=O(c);var aS=O(aR);var f=ai.captionEffect;(Z[aD.type(f)]||Z[f]||Z.none)(aD.extend({$this:H,curIdx:x,prevIdx:ar},ai),D,aA,k,aS,i)}if(at.length||ak.length){I()}V(x,ar);if(ai.stopOnHover){this.bind("mouseover",function(c){if(!an||!an.playing()){ac()}B=true});this.bind("mouseout",function(c){if(!an||!an.playing()){K()}B=false})}if(!an||!an.playing()){K()}var u=H.find("audio").get(0),l=ai.autoPlay;if(u){if(window.Audio&&u.canPlayType&&u.canPlayType("audio/mp3")){u.loop="loop";if(ai.autoPlay){u.autoplay="autoplay";setTimeout(function(){u.play()},100)}}else{u=u.src;var Y=u.substring(0,u.length-/[^\\\/]+$/.exec(u)[0].length);var j="wsSound"+Math.round(Math.random()*9999);aD("<div>").appendTo(H).get(0).id=j;var J="wsSL"+Math.round(Math.random()*9999);window[J]={onInit:function(){}};swfobject.createSWF({data:Y+"player_mp3_js.swf",width:"1",height:"1"},{allowScriptAccess:"always",loop:true,FlashVars:"listener="+J+"&loop=1&autoplay="+(ai.autoPlay?1:0)+"&mp3="+u},j);u=0}H.bind("stop",function(){l=false;if(u){u.pause()}else{aD(j).SetVariable("method:pause","")}});H.bind("start",function(){if(u){u.play()}else{aD(j).SetVariable("method:play","")}})}y.wsStart=ap;y.wsRestart=K;y.wsStop=ay;var aG=aD('<a href="#" class="ws_playpause"></a>');function a(){ai.autoPlay=!ai.autoPlay;if(!ai.autoPlay){y.wsStop();aG.removeClass("ws_pause");aG.addClass("ws_play")}else{K();aG.removeClass("ws_play");aG.addClass("ws_pause");if(an){an.start(x)}}}if(ai.playPause){if(ai.autoPlay){aG.addClass("ws_pause")}else{aG.addClass("ws_play")}aG.click(function(){a();return false});this.append(aG)}if(ai.keyboardControl){aD(document).on("keyup",function(c){switch(c.which){case 32:a();break;case 37:aL(c,x-1,0);break;case 39:aL(c,x+1,1);break}})}if(ai.scrollControl){H.on("DOMMouseScroll mousewheel",function(c){if(c.originalEvent.wheelDelta<0||c.originalEvent.detail>0){aL(null,x+1,1)}else{aL(null,x-1,0)}})}if(typeof wowsliderVideo=="function"){var F=aD('<div class="ws_video_btn"><div></div></div>').appendTo(H);an=new wowsliderVideo(H,ai,n);if(typeof $f!="undefined"){an.vimeo(true);an.start(x)}window.onYouTubeIframeAPIReady=function(){an.youtube(true);an.start(x)};F.on("click touchend",function(){if(!ax){an.play(x,1)}})}var aQ=0;if(ai.fullScreen){var w=(function(){var aT=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenchange"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitfullscreenchange"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitfullscreenchange"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozfullscreenchange"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","MSFullscreenChange"]],f={},aS,aR;for(var k=0,c=aT.length;k<c;k++){aS=aT[k];if(aS&&aS[1] in document){for(k=0,aR=aS.length;k<aR;k++){f[aT[0][k]]=aS[k]}return f}}return false})();if(w){function am(){return !!document[w.fullscreenElement]}var aB=0;function aj(){if(/WOW Slider/g.test(C)){return}if(am()){document[w.exitFullscreen]()}else{aB=1;H.wrap("<div class='ws_fs_wrapper'></div>").parent()[0][w.requestFullscreen]()}}document.addEventListener(w.fullscreenchange,function(c){if(am()){aQ=1;aM()}else{if(aB){aB=0;H.unwrap()}aQ=0;aM()}n()});aD("<a href='#' class='ws_fullscreen'></a>").on("click",aj).appendTo(H)}}function aM(){var aW=aQ?4:ai.responsive,c=H.width()||ai.width,aS=aD([r,aC.find("img"),aJ.find("img")]);if(aW>0&&!!document.addEventListener){H.css("fontSize",Math.max(Math.min((c/ai.width)||1,1)*10,6))}if(aW==2){var k=Math.max((c/ai.width),1)-1;aS.each(function(){aD(this).css("marginTop",-ai.height*k/2)})}if(aW==3){var aX=window.innerHeight-(H.offset().top||0),aU=ai.width/ai.height,aV=aU>c/aX;H.css("height",aX);aS.each(function(){aD(this).css({width:aV?"auto":"100%",height:aV?"100%":"auto",marginLeft:aV?((c-aX*aU)/2):0,marginTop:aV?0:((aX-c/aU)/2)})})}if(aW==4){var aT=window.innerWidth,aR=window.innerHeight,aU=ai.width/ai.height,f=aU>aT/aR;H.css({maxWidth:f?"100%":(aU*aR),height:"",top:f?(aR-aT/aU)/2:0});aS.each(function(){aD(this).css({width:"100%",marginLeft:0,marginTop:0})})}else{H.css({maxWidth:"",top:""})}}if(ai.responsive){aD(aM);aD(window).on("load resize",aM)}return this};jQuery.extend(jQuery.easing,{easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeOutElastic1:function(k,l,i,h,g){var f=Math.PI/2;var m=1.70158;var e=0;var j=h;if(l==0){return i}if((l/=g)==1){return i+h}if(!e){e=g*0.3}if(j<Math.abs(h)){j=h;var m=e/4}else{var m=e/f*Math.asin(h/j)}return j*Math.pow(2,-10*l)*Math.sin((l*g-m)*f/e)+h+i},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a}});jQuery.fn.wowSlider.support={transform:(function(){if(!window.getComputedStyle){return false}var b=document.createElement("div");document.body.insertBefore(b,document.body.lastChild);b.style.transform="matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";var a=window.getComputedStyle(b).getPropertyValue("transform");b.parentNode.removeChild(b);if(a!==undefined){return a!=="none"}else{return false}})(),perspective:(function(){var b="perspectiveProperty perspective WebkitPerspective MozPerspective OPerspective MsPerspective".split(" ");for(var a=0;a<b.length;a++){if(document.body.style[b[a]]!==undefined){return !!b[a]}}return false})(),transition:(function(){var a=document.body||document.documentElement,b=a.style;return b.transition!==undefined||b.WebkitTransition!==undefined||b.MozTransition!==undefined||b.MsTransition!==undefined||b.OTransition!==undefined})()}
/*! jQuery requestAnimationFrame - v0.1.3pre - 2014-02-07
* https://github.com/gnarf37/jquery-requestAnimationFrame
* Copyright (c) 2014 Corey Frang; Licensed MIT */
;(function(c){var a,d=0,h=["webkit","moz"],g=window.requestAnimationFrame,f=window.cancelAnimationFrame;for(;d<h.length&&!g;d++){g=window[h[d]+"RequestAnimationFrame"];f=f||window[h[d]+"CancelAnimationFrame"]||window[h[d]+"CancelRequestAnimationFrame"]}function e(){if(a){g(e);c.fx.tick()}}if(g){window.requestAnimationFrame=g;window.cancelAnimationFrame=f;c.fx.timer=function(i){if(i()&&c.timers.push(i)&&!a){a=true;e()}};c.fx.stop=function(){a=false}}else{var b=0;window.requestAnimationFrame=function(m,j){if(b){return false}b=1;var i=new Date().getTime(),k=Math.max(0,16-(i-d)),l=window.setTimeout(function(){b=0;m(i+k)},k);d=i+k;return l};window.cancelAnimationFrame=function(i){clearTimeout(i)}}}(jQuery));// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by $AppName$ $AppVersion$
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_caption_parallax(i,h,d,g,e,a){var c=jQuery;h.parent().css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"});h.html(g).css("width","100%").stop(1,1);d.html(e).css("width","100%").stop(1,1);function f(l,m,n){var j=new Date()*1;var k=function(){var o=(new Date()*1-j)/m;if(o>=1){l(1);cancelAnimationFrame(k);if(n){n()}}else{l(o);requestAnimationFrame(k)}};k()}(function b(o,k,w,s,t,x){var q=15;var n=i.$this.width();q*=n/100;function r(A,B){return A.css(i.support.transform?{transform:"translate3d("+B+"px,0px,0px)"}:{marginLeft:B}).css("display","inline-block")}if(i.prevIdx==i.curIdx){r(o,0).fadeIn(t/3);r(c(">div,>span",o),0)}else{var m=c(">div",o);var z=c(">div",k);var p=c(">span",o);var j=c(">span",k);var v=q+n*(x?-1:1),y=q+n*(x?1:-1),u=(x?-1:1)*q;r(o,v).show();r(k,0).show();r(m,u);r(z,0);r(p,2*u);r(j,0);f(function(A){A=c.easing.swing(A);r(o,(1-A)*v);r(k,A*y)},i.duration);var l=0.8;f(function(A){A*=l;r(p,(1-A)*2*u);r(m,(1-A)*u);r(j,A*(-2*u));r(z,A*(-u))},i.duration,function(){f(function(A){A=c.easing.easeOutCubic(1,A,0,1,1,1);var B=(1-l)*2*u,D=(1-l)*u,C=l*(-2*u),E=l*(-u);r(p,(1-A)*B);r(m,(1-A)*D);r(j,(1-A)*C+A*(-2*u));r(z,(1-A)*E+A*(-u))},(/Firefox/g.test(navigator.userAgent)?1500:i.delay))})}}(h,d,g,e,i.captionDuration,a))};