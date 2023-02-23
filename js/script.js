//      CARSOL SLIDER AUTO MOVE

let counter = 1;
        setInterval(function(){
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if(counter > 3){
            counter = 1;
        }
        }, 8000);

let numberColor = document.getElementsByClassName("line-bottom");
let numberCount = document.querySelectorAll(".content-numbers .count");
let numbersSection = document.querySelector(".numbers-sec");
let started = false;

window.onscroll = function (){
    if (window.scrollY >= numbersSection.offsetHeight) {
      if (!started) {
        for (let i = 0; i < numberCount.length; i++) {
          startCount(i);
        }
      }
      started = true;
    }
};

function startCount(i){
    let goal = numberCount[i].dataset.goal;
    let count = setInterval(()=>{
        numberCount[i].textContent++;
        numberColor[i].classList.add("line-bottom-full");
        if (numberCount[i].textContent == goal) {
            clearInterval(count);
        }
    }, 3000/goal)
}



function coloring(){
  this.style.add('background-color','yellow');
}
