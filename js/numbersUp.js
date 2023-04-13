let numberColor = document.getElementsByClassName("line-bottom"),
  numberCount = document.querySelectorAll(".content-numbers .count"),
  numbersSection = document.querySelector(".numbers-sec"),
  started = false;
window.onscroll = () => {
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
