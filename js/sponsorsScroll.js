const sliderTrack = document.getElementById("sposponsorsSlider");
let containerWidth = sliderTrack.clientWidth,
    currentIndex = 0,
    stopLimit = sliderTrack.querySelectorAll(".comp-logo").length,
    duration = 2000;
const currentScrollPosition = () => sliderTrack.scrollLeft;
function incrementIndex(){
    currentIndex++;
    if (currentIndex == stopLimit) {
        currentIndex = 0;
    }
    scrolling(currentIndex);
}
function scrolling(i) {
    const newScrollPosition = (containerWidth * 0.32) * i;
    
    sliderTrack.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
    });
}
sliderTrack.addEventListener('touchmove',(e)=>{
    e.preventDefault();
})
sliderTrack.addEventListener('wheel',(e)=>{ 
    e.preventDefault();
})
let going = setInterval(()=>{
    incrementIndex()
},duration)