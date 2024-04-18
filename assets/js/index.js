const nextDom = document.getElementById("next");
const prevDom = document.getElementById("prev");
const carroselDom = document.querySelector(".carrosel");
const listaItemDom = document.querySelector(".carrosel .lista");
const thumbnailDom = document.querySelector(".carrosel .thumbnail");
const navDom = document.querySelector(".nav")

setTimeout(function() {
    navDom.classList.add('nav-visible');
  }, 2000);


document.addEventListener("DOMContentLoaded", function() {
    var walls = document.querySelectorAll('.Wallpapers');
  
    function showBoxes() {
      walls.forEach(function(wall) {
        var wallPosition = wall.getBoundingClientRect().top;
        var screenPosition = window.innerHeight / 1;
  
        if (wallPosition < screenPosition) {
            wall.style.opacity = '1';
            wall.style.transform = 'translateX(0)';
          } else {
            wall.style.opacity = '0';
            if (wall.classList.contains('left')) {
              wall.style.transform = 'translateX(-100%)';
            } else {
              wall.style.transform = 'translateX(100%)';
            }
        }
      });
    }
  
    showBoxes();
  
    window.addEventListener('scroll', showBoxes);
  });

  document.addEventListener("DOMContentLoaded", function() {
    var eps = document.querySelectorAll('.ep');
  
    function showBoxes() {
      eps.forEach(function(ep) {
        var epPosition = ep.getBoundingClientRect().top;
        var screenPosition = window.innerHeight / 1.5;
  
        if (epPosition < screenPosition) {
            ep.style.opacity = '1';
            ep.style.transform = 'translateY(0)';
          } else {
            ep.style.opacity = '0';
            if (ep.classList.contains('nimated.moveUp')) {
              ep.style.transform = 'translateY(-100%)';
            } 
        }
      });
    }
  
    showBoxes();
  
    window.addEventListener('scroll', showBoxes);
  });


nextDom.onclick = function(){
    showSlider("next");
}

prevDom.onclick = function(){
    showSlider("prev")
}
const timeRunnin = 3000;
const timeAutoNext = 7000;
let runTimeOut;
let runAutoRun = setTimeout(() => {
    nextDom.click();
}, timeAutoNext)

function showSlider(type){
    let itemslider = document.querySelectorAll(".carrosel .lista .itens");
    let itemThumbnail = document.querySelectorAll(".carrosel .thumbnail .item");

    if(type === "next"){
        listaItemDom.appendChild(itemslider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carroselDom.classList.add("next")
    } else {
        let positionLastItem = itemslider.length - 1;
        listaItemDom.prepend(itemslider[positionLastItem])
        thumbnailDom.prepend(itemThumbnail[positionLastItem])
        carroselDom.classList.add("prev")
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carroselDom.classList.remove("next")
        carroselDom.classList.remove("prev")
    }, timeRunnin);

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext)
}




