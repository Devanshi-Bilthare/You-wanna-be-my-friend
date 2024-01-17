const img2 = document.querySelector(".img2")
const btn2 = document.querySelector(".btn2")
const btn1 = document.querySelector(".btn1")
const bgimg = document.querySelector(".bgimg")

function moveAway() {
    var newX = Math.random() * (700-window.innerWidth - btn2.clientWidth);
    var newY = Math.random() * (600-window.innerHeight - btn2.clientHeight);
    
    btn2.style.left = newX + "px";
    btn2.style.bottom = newY + "px"
    console.log(newX , newY)
  }


  btn2.addEventListener("mouseover",function(){
    moveAway()
    img2.style.backgroundImage = "url(./peach-and-goma-peach-goma.gif)"
  })

  btn1.addEventListener("click",function(){
    bgimg.style.backgroundImage = "url(./mochi-peachcat-cute-cat.gif)"
    // bgimg.style.backgroundImage = "url(./cute-adorable.gif)"
    bgimg.style.zIndex = 1
    
    setTimeout(function(){
        bgimg.style.backgroundImage = "url(./cat-cats.gif)"
    },3000)
    setTimeout(function(){
        bgimg.style.backgroundImage = "url(./kiss.gif)"
    },8000)

    setTimeout(function(){
        bgimg.style.backgroundImage = "url(./cat-cute.gif)"
    },12000)

    setTimeout(function(){
        bgimg.style.backgroundImage = "url(./cat-love.gif)"
    },16000)

    setTimeout(function(){
        bgimg.style.backgroundImage = "url(./cute.gif)"
    },21000)

    setTimeout(function(){
        bgimg.style.backgroundImage = "url(./cat-sticker-line-sticker.gif)"
    },25000)

    setTimeout(function(){
        bgimg.style.zIndex = -1
    },27000)

  })
 