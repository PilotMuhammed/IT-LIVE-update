const speakers = [
    {
        name:"ali hasan",
        position:"data anyliser",
        img:"person1.jpg",
        contact:{
            facebook:"https://fb.com",
            instagram:true,
            twitter:false,
            linkdin:false,
            email:false
        },
        presintation:{
            name:"presentation name",
            description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Exercitationem odit quisquam maiores perspiciatis facere eos! Lorem ipsum dolor sit, 
            amet consectetur adipisicing elit.`
        }
    },
    {
        name:"muhammed abd",
        position:"software developer",
        img:"person2.jpg",
        contact:{
            facebook:"https://fb.com",
            instagram:"https://instagram.com",
            twitter:false,
            linkdin:false,
            email:false
        },
        presintation:{
            name:"presentation name",
            description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Impedit explicabo iste eligendi nulla quo optio accusamus numquam, 
            illum laborum voluptatem.delectus molestiae consequuntur nemo dolore. Similique dolor, porro quia quos error qui nisi inventore necessitatibus sed amet totam fugit quis laborum at nobis. 
            Suscipit eius sequi deleniti asperiores quia quas, ullam tenetur quibusdam. Atque odit sed voluptatibus dicta reprehenderit neque quibusdam ad, cupiditate officia! Doloremque, 
            repellat ea impedit eius error voluptate.`
        }
    },
    {
        name:"jamal",
        position:"ux designer",
        img:"person3.jpg",
        contact:{
            facebook:"https://fb.com",
            instagram:"https://instagram.com",
            twitter:false,
            linkdin:false,
            email:"https://gmail.google.com"
        },
        presintation:{
            name:"presentation name",
            description:`Similique dolor, porro quia quos error qui nisi inventore necessitatibus sed amet totam fugit quis laborum at nobis. 
            Suscipit eius sequi deleniti asperiores quia quas, ullam tenetur quibusdam. Atque odit sed voluptatibus dicta reprehenderit neque quibusdam ad, cupiditate officia! Doloremque, 
            repellat ea impedit eius error voluptate.`
        }
    },
    {
        name:"yaseer shakeer",
        position:"nasma CEO, mobile app developer",
        img:"person4.jpg",
        contact:{
            facebook:"https://fb.com",
            instagram:true,
            twitter:false,
            linkdin:false,
            email:false
        },
        presintation:{
            name:"presentation name",
            description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Impedit explicabo iste eligendi nulla quo optio accusamus numquam, 
            illum laborum voluptatem.`
        }
    },
    {
        name:"yaman",
        position:"comunication manager - wePay",
        img:"person1.jpg",
        contact:{
            facebook:"https://fb.com",
            instagram:true,
            twitter:false,
            linkdin:false,
            email:false
        },
        presintation:{
            name:"presentation name",
            description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Impedit explicabo iste eligendi nulla quo optio accusamus numquam, 
            illum laborum voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            delectus molestiae consequuntur nemo dolore. Similique dolor, porro quia quos error qui nisi inventore necessitatibus sed amet totam fugit quis laborum at nobis. 
            Suscipit eius sequi deleniti asperiores quia quas, ullam tenetur quibusdam. Atque odit sed voluptatibus dicta reprehenderit neque quibusdam ad, cupiditate officia! Doloremque, 
            repellat ea impedit eius error voluptate.`
        }
    },
]

const cardsContainer = document.getElementById("cardsContainer");
speakers.forEach(s => {
    cardsContainer.innerHTML += `
    <div class="speaker-card" tabindex="-1">
        <img class="full" src="./assets/images/${s.img}" alt="${s.name} profile picture">
        <div class="speaker-info">
            <h3 class="speaker-name">${s.name}</h3>
            <p class="speaker-position">${s.position}</p>
        </div>
    </div>`
});

//  SPEAKERS CARDS ScrollBouttons 
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
    if (e.key === "Enter") {
        const isOpened = secTitle.getAttribute("aria-expanded") === "true";
        if (isOpened ? closeMenu() : openMenu());
    }
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

//      Show Speaker Profile        //
function openProfile(i){
    closeDialog.setAttribute("data-state","open");
    document.body.style.overflow="hidden";
    speakerProfile.innerHTML = `
    <div class="profile-header">
        <div class="profile-img"><img src="./assets/images/${speakers[i].img}" alt="${speakers[i].name} profile picture" class="full"></div>
        <div class="profile-info">
            <h2 class="profile-name">${speakers[i].name}</h2>
            <strong class="profile-position">${speakers[i].position}</strong>
            <div class="contact">
                <a href="${speakers[i].contact.facebook}" class="contact-icon"><img class="full" src="/assets/icons/facebook.svg" alt=""></a>
                <a href="${speakers[i].contact.instagram}" class="contact-icon"><img class="full" src="/assets/icons/instagram.svg" alt=""></a>
                <a href="${speakers[i].contact.email}" class="contact-icon"><img class="full" src="/assets/icons/email.svg" alt=""></a>
            </div>
        </div>
    </div>
    <div class="profile-bio">
        <h3 class="presentation-name">${speakers[i].presintation.name}</h3>
        <p class="presentation-description">${speakers[i].presintation.description}</p>
    </div>
    `;
    dialog.showModal();
}
//  - Open Event
for (let i = 0; i < speakerCards.length; i++) {
    const c = speakerCards[i];
    c.addEventListener('click',()=> openProfile(i))
    c.addEventListener("keypress",e=>{
        if (e.key === "Enter") openProfile();
        // else if (e.keyCode == 27) {      //  When ProfileCard In-Focus and click Esc on Keyboard, tabIndex of Cards be stoped
        //     const isOpened = secTitle.getAttribute("aria-expanded") === "true";
        //     if (isOpened ? closeMenu() : openMenu());
        // }
    })
}
//  - Close Event
function closeProfile(){
    closeDialog.setAttribute("data-state","close");
    dialog.addEventListener('animationend',()=>{
        dialog.close();
        document.body.style.overflow="auto"
    }, {once: true})
}
let moveY, startY, swipeAmount = dialog.clientHeight / 3; 
dialog.addEventListener('touchstart',e=>{
    startY = e.touches[0].clientY;
});
dialog.addEventListener('touchmove',e=>{
    moveY = e.touches[0].clientY;
    if (startY + (dialog.clientHeight / 3) < moveY) closeProfile();
});
document.getElementById("closeDialog").onclick = ()=>{closeProfile()};
