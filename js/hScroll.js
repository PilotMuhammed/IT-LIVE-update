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
