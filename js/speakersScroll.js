const buttonRight = document.getElementById('slideRight');
const buttonLeft = document.getElementById('slideLeft');

buttonRight.onclick = () => {
    let card = document.querySelector("#cardsContainer div.speaker-card");
    let cardWidth = card.offsetWidth;
    const currentScrollPosition = cardsContainer.scrollLeft;
    const newScrollPosition = currentScrollPosition + (cardWidth*3);
    cardsContainer.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
    });
};

buttonLeft.onclick = function () {
    let card = document.querySelector("#cardsContainer div.speaker-card");
    let cardWidth = card.offsetWidth;
    const currentScrollPosition = cardsContainer.scrollLeft;
    const newScrollPosition = currentScrollPosition - (cardWidth*3);
    cardsContainer.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
    });
};
//////////////////////////////////
//  SPEAKERS CARDS TABINDEX

const secTitle = document.querySelector(".speakers-sec .section-title"),
    speakerCards = document.querySelectorAll("#cardsContainer > .speaker-card");

secTitle.addEventListener('keypress', (e)=>{
    console.log(e);
    if (e.key === "Enter") {
        const isOpened = secTitle.getAttribute("aria-expanded") === "true";
        if (isOpened ? closeMenu() : openMenu());
    }
    // Should by the Key of Card KeyClick
    // if (e.key === "e") {
    //     const isOpened = secTitle.getAttribute("aria-expanded") === "true";
    //     if (isOpened ? closeMenu() : openMenu());
    // }
})
function openMenu(){
    secTitle.setAttribute("aria-expanded","true");
    cardsContainer.setAttribute("data-state","opened");
    speakerCards.forEach(c => {
        c.setAttribute("tabindex","0")
    });
}
function closeMenu(){
    secTitle.setAttribute("aria-expanded","false");
    cardsContainer.setAttribute("data-state","closed");
    speakerCards.forEach(c => {
        c.setAttribute("tabindex","-1")
    });
    buttonLeft.setAttribute("tabindex","-1")
    buttonRight.setAttribute("tabindex","-1")
}

speakerCards.forEach(c=>{
    c.addEventListener('click',()=>{
        closeDialog.setAttribute("data-state","open");
        dialog.showModal();
        document.body.style.overflow="hidden";
    })
    c.addEventListener("keypress",(e)=>{
        if (e.key === "Enter") {
            dialog.showModal()
            document.body.style.overflow="hidden"
        }
    })
})
document.getElementById("closeDialog").onclick = ()=> {
    closeDialog.setAttribute("data-state","closing");
    dialog.addEventListener('animationend',()=>{
        dialog.close();
    }, {once: true})
    document.body.style.overflow="auto"
};

// function closeMenu(){
//     dialog.addEventListener('animationend',()=>{
//         dialog.close();
//     }, {once: true})
// }

// function touchAmount() {
//     let ts=0,te=0;
//     dialog.addEventListener('touchstart',(e)=>{
//         console.log("S"+e.touches[0].clientY);
//         ts = e.touches[0].clientY;
//     })
//     dialog.addEventListener('touchmove',(e)=>{
//         console.log(e.touches[0].clientY);
//         ts = e.touches[0].clientY;
//     })
//     console.log(te - ts + "DDD");
//     return te - ts;
// }
dialog.addEventListener('touchmove',(e)=>{
    if (e.touches[0].clientY > (dialog.offsetHeight/2)){
        closeDialog.setAttribute("data-state","closing");
        dialog.addEventListener('animationend',()=>{
            dialog.close();
            document.body.style.overflow="auto"
        }, {once: true})
    }
});