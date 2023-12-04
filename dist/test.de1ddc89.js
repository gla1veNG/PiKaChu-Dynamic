const t=`*{box-sizing: border-box;margin: 0;padding: 0;}
*::before,*::after{box-sizing: border-box;}
body{
    background: #ffe600;
    min-height: 100vh;
}

.skin{
    position: relative;
}

.nose{
    position: relative;
    width: 0;
    height: 0;
    border: 10px solid black;
    border-color: black transparent transparent;
    border-bottom: none;
    left: 50%;
    top: 150px;
    margin-left: -10px; 
    z-index: 2;
}
@keyframes wave {
    0%{
        transform: rotate(0deg);
    }
    33%{
        transform: rotate(6deg);
    }
    66%{
        transform: rotate(-6deg);
    }
    100%{
        transform: rotate(0deg);
    }
}
.nose:hover{
    transform-origin: center bottom;
    animation: wave 180ms infinite linear ;
}
.san > .yuan{
    position: absolute;
    width: 20px;
    height: 6px;
    top:-16px;
    left: -10px;
    border-radius:10px 10px 0 0;
    background: black;
}
.eye{
    position: absolute;
    border:2px solid #000;
    width: 64px;
    height: 64px;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background: #2e2e2e;
    border-radius: 50%;
}
.eye::before{
    content: '';
    display: block;
    width: 30px;
    height: 30px;
    border: 3px solid #000;
    background: #fff;
    border-radius: 50%;
    position: relative;
    left: 8px;
    
}
.eye.left{
    transform: translateX(-100px);
}
.eye.right{
    transform: translateX(100px);
}
.mouth{
    position: absolute;
    width: 200px;
    height: 200px;
    /* border: 1px solid red; */
    left: 50%;
    top: 170px;
    margin-left: -100px;
}
.mouth > .up{
    position: relative;
    top:-20px;
    z-index: 1;
}
.mouth > .up >.lip{
    background:#ffe600 
}
.mouth > .up >.lip.left{
    border: 4px solid black;
    height: 30px;
    width: 100px;
    border-radius: 0 0 0 50px ;
    border-top-color: transparent;
    border-right-color: transparent;
    position: relative;
    transform: rotate(-24deg)translateX(-42px);
    position: absolute;
    left: 50%;
    margin-left: -50px;
}
.mouth > .up >.lip.left::before{
    content: '';
    display: block;
    width: 7px;
    height: 30px;
    position: absolute;
    right: -6px;
    bottom: 0;
    background:#ffe600 ;
}
.mouth > .up >.lip.right{
    border: 4px solid black;
    height: 30px;
    width: 100px;
    border-radius: 0 0 50px 0px ;
    border-top-color: transparent;
    border-right-color: transparent;
    position: relative;
    transform: rotate(20deg) translateX(55px);
    position: absolute;
    left: 50%;
    margin-left: -50px;
}
.mouth > .up >.lip.right::before{
    content: '';
    display: block;
    width: 7px;
    height: 30px;
    position: absolute;
    left: -6px;
    bottom: 0;
    background:#ffe600 ;
}
.mouth .down{
    height: 190px;
    position: absolute;
    top:10px;
    width: 100%;
    overflow: hidden;
}
.mouth .down .yuan1{
    border: 4px solid black;
    width: 150px;
    height: 1000px;
    position: absolute;
    left: 50%;
    bottom: 0;
    margin-left: -75px;
    border-radius: 75px/300px;
    background: #9b000a;
    overflow: hidden;
}
.mouth .down .yuan1 .yuan2{
    width: 200px;
    height: 300px;
    position: absolute;
    left: 50%;
    bottom: -150px;
    margin-left: -100px;
    background: #ff485f;
    border-radius: 100px;
}
.face{
    position: absolute;
    border: 3px solid black;
    width: 84px;
    height: 84px;
    left: 50%;
    top: 240px;
    margin-left: -42px;
    border-radius: 50%;
    background: #ff0000;
}
.face.left{
    transform: translateX(160px);
}
.face.right{
    transform: translateX(-160px);
}`,e={id:void 0,time:100,ui:{demo:document.querySelector("#demo"),demo2:document.querySelector("#demo2")},events:{"#btnPause":"pause","#btnPlay":"play","#btnSlow":"slow","#btnNormal":"normal","#btnFast":"fast"},n:1,init:()=>{e.ui.demo.innerText=t.substr(0,e.n),e.ui.demo2.innerHTML=t.substr(0,e.n),e.bindEvents(),e.play()},bindEvents:()=>{for(let t in e.events)if(e.events.hasOwnProperty(t)){let o=e.events[t];document.querySelector(t).onclick=e[o]}},run:()=>{if(e.n+=1,e.n>t.length){window.clearInterval(e.id);return}e.ui.demo.innerText=t.substr(0,e.n),e.ui.demo2.innerHTML=t.substr(0,e.n),e.ui.demo.scrollTop=e.ui.demo.scrollHeight},play:()=>{window.clearInterval(e.id),e.id=setInterval(e.run,e.time)},pause:()=>{window.clearInterval(e.id)},slow:()=>{e.pause(),e.time=300,e.play()},normal:()=>{e.pause(),e.time=100,e.play()},fast:()=>{e.pause(),e.time=0,e.play()}};e.init();
//# sourceMappingURL=test.de1ddc89.js.map
