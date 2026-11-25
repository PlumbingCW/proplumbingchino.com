(function(){
var d=document,de=d.documentElement;
de.className=de.className.replace('nojs','').trim();
var dr=d.getElementById('mob-drawer'),ov=d.getElementById('mob-overlay'),tg=d.getElementById('nav-toggle');
function setMenu(open){if(!dr)return;dr.classList.toggle('open',open);ov.classList.toggle('open',open);tg.setAttribute('aria-expanded',open?'true':'false');de.style.overflow=open?'hidden':'';}
if(tg){tg.addEventListener('click',function(){setMenu(!dr.classList.contains('open'));});}
if(ov){ov.addEventListener('click',function(){setMenu(false);});}
var cl=d.getElementById('mob-close');if(cl){cl.addEventListener('click',function(){setMenu(false);});}
if(dr){dr.addEventListener('click',function(e){if(e.target.closest('a')){setMenu(false);}});}
d.addEventListener('keydown',function(e){if(e.key==='Escape'){setMenu(false);}});
var mq=window.matchMedia('(min-width:769px)');
function onMq(){if(mq.matches){setMenu(false);}}
if(mq.addEventListener){mq.addEventListener('change',onMq);}else if(mq.addListener){mq.addListener(onMq);}
var qs=d.querySelectorAll('.faq-q');
for(var i=0;i<qs.length;i++){qs[i].addEventListener('click',function(){
var it=this.parentNode,a=it.querySelector('.faq-a'),open=it.classList.toggle('open');
this.setAttribute('aria-expanded',open?'true':'false');
a.style.maxHeight=open?a.scrollHeight+'px':'0px';});}
})();