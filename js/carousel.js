const carouselControls = document.querySelectorAll(".overview-controls .slide-btn"),
    overviewScroller = document.getElementById("overviewScroller");
let windowWidth = window.outerWidth,
    currentIndex = 0,
    stopLimit = overviewScroller.querySelectorAll(".overview-slide").length,
    duration = 8000;
const currentScrollPosition = () => overviewScroller.scrollLeft;


function incrementIndex(){
    currentIndex++;
    if (currentIndex == 3) {
        currentIndex = 0;
    }
    overviewScrolling(currentIndex);
}

carouselControls.forEach(c=>{
    c.addEventListener('click', btn=> overviewScrolling(btn.target.getAttribute("aria-colindex")))
})

let scrollTimer = null;
overviewScroller.addEventListener('scroll',(e)=>{
    // Clear the timeout if it has been set.
    clearTimeout(scrollTimer);
    // Set a new timeout to fire in 200 milliseconds.
    scrollTimer = setTimeout(function() {
        // Here is where you can put your code to indicate that the scroll event has finished.
        carouselControls.forEach(btn=>btn.classList.remove("current"))
        if(currentScrollPosition() <= (windowWidth / 2)){
            carouselControls[0].classList.add("current")
            currentIndex = 0;
        } else if(currentScrollPosition() > (windowWidth / 2) && currentScrollPosition() <= (windowWidth + (windowWidth / 2))) {
            carouselControls[1].classList.add("current")
            currentIndex = 1;
        } else if(currentScrollPosition() > windowWidth) {
            carouselControls[2].classList.add("current")
            currentIndex = 2;
        }
    }, 100);
})

function overviewScrolling(i) {
    const newScrollPosition = windowWidth * i;
    
    overviewScroller.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
    });
}

setInterval(()=>{
    incrementIndex()
},duration)
