const menuToggle = document.querySelector(".menu-toggle"),
    langToggle = document.querySelector(".languages-toggle"),
    siteNavigation = document.querySelector(".primary-menu"),
    siteLanguages = document.querySelector(".languages-list");

//      Navigation Menu Toggle      //
menuToggle.addEventListener('click', ()=>{
    const isOpened = menuToggle.getAttribute("aria-expanded") === "true";
    if (isOpened ? closeMenu() : openMenu());
})
//  -Open Menu Event
function openMenu(){
    menuToggle.setAttribute("aria-expanded","true");
    siteNavigation.setAttribute("data-state","opened");
    document.body.style.overflow="hidden";
}
//  -Close Menu Event
function closeMenu(){
    menuToggle.setAttribute("aria-expanded","false");
    siteNavigation.setAttribute("data-state","closing");
    
    siteNavigation.addEventListener('animationend',()=>{
        siteNavigation.setAttribute("data-state", "closed");
        document.body.style.overflow="auto";
    }, {once: true})
}
let moveX, startX, swipeAmount; 
document.body.addEventListener('touchstart',e=>{
    startX = e.touches[0].clientX;
});
document.body.addEventListener('touchmove',e=>{
    swipeAmount = document.body.clientWidth / 4;
    moveX = e.touches[0].clientX;
    const isOpened = menuToggle.getAttribute("aria-expanded") === "true";
    if (startX + swipeAmount < moveX && isOpened) closeMenu();      //  -Close Menu Event
    else if (startX - swipeAmount > moveX && !isOpened) openMenu(); //  -Open Menu Event
});

//    Change Language Menu    //
langToggle.addEventListener('click', ()=>{
    const isOpened = langToggle.getAttribute("aria-expanded") === "true";
    if (isOpened ? closeLang() : openLang());
})
function openLang(){
    langToggle.setAttribute("aria-expanded","true");
    siteLanguages.setAttribute("data-state","opened");
}
function closeLang(){
    langToggle.setAttribute("aria-expanded","false");
    siteLanguages.setAttribute("data-state", "closed");
}

//    Get Current Page    //
const pages = document.querySelectorAll(".menu-item");
pages.forEach((p)=>{
    const a = p.querySelector("a")
    if (a.href == window.location) {
        p.setAttribute("aria-current", "page")
    }
})
