import string from "./css.js"

const player = {
    id:undefined,
    n:1,
    time:100,
    ui:{
        demo :document.querySelector('#demo'),
        demo2 :document.querySelector('#demo2')
    },
    events : {
        '#btnPause':'pause',
        '#btnPlay':'play',
        '#btnSlow':'slow',
        '#btnNormal':'normal',
        '#btnFast': 'fast'
    },
    init:()=>{
        player.ui.demo.innerText = string.substring(0,player.n)
        player.ui.demo2.innerHTML = string.substring(0,player.n)
        player.bindEvents()
        player.play()
        
    },
    bindEvents : ()=>{
        for(let key in player.events){
            if(player.events.hasOwnProperty(key)){
                const value = player.events[key]
                document.querySelector(key).onclick = player[value]
    
            }
        }
    },
    run :()=>{
        if(player.n>string.length){
            window.clearInterval(player.id)
            return
        }
        player.n+=1
        player.ui.demo.innerText = string.substring(0,player.n)
        player.ui.demo2.innerHTML = string.substring(0,player.n)
        player.ui.demo.scrollTop = player.ui.demo.scrollHeight
    },
    play : ()=>{
        player.id = setInterval(player.run,player.time)
    },
    pause : ()=>{
        window.clearInterval(player.id)
    },
    slow : ()=>{
        player.time = 300
        player.pause()
        player.play()
    },
     normal : ()=>{
        player.time = 100
        player.pause()
        player.play()
    },
     fast : ()=>{
        player.time = 10
        player.pause()
        player.play()
    }
    
}
player.init()

 

