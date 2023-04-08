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







///////////////////////////////////////////////
// cardsContainer.animate({ scrollY: 0 }, 600);


// $('#gallery').slick({
//     slidesToShow: 6,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 0,
//     speed: 8000,
//     pauseOnHover: false,
//     cssEase: 'linear'
// });




// cardsContainer.addEventListener('wheel', (event) => {
//   event.preventDefault();

//   const scrollAmount = event.deltaY;
//   const currentScrollPosition = cardsContainer.scrollLeft;
//   const newScrollPosition = currentScrollPosition + scrollAmount;

//   const maxScrollPosition = cardsContainer.scrollWidth - cardsContainer.clientWidth;
//   const minScrollPosition = 0;

//   const smoothScroll = (start, end, duration) => {
//     let currentTime = 0;
//     const increment = 20;

//     const animateScroll = () => {
//       currentTime += increment;
//       const position = easeInOutQuad(currentTime, start, end - start, duration);
//       cardsContainer.scrollLeft = position;
//       if (currentTime < duration) {
//         requestAnimationFrame(animateScroll);
//       }
//     };

//     animateScroll();
//   };

//   const easeInOutQuad = (t, b, c, d) => {
//     t /= d / 2;
//     if (t < 1) return c / 2 * t * t + b;
//     t--;
//     return -c / 2 * (t * (t - 2) - 1) + b;
//   };

//   if (newScrollPosition < minScrollPosition) {
//     smoothScroll(currentScrollPosition, minScrollPosition, 500);
//   } else if (newScrollPosition > maxScrollPosition) {
//     smoothScroll(currentScrollPosition, maxScrollPosition, 500);
//   } else {
//     smoothScroll(currentScrollPosition, newScrollPosition, 500);
//   }
// });
///////

// buttonRight.onclick = () => {
//     // event.preventDefault();
//     let card = document.querySelector("#cardsContainer div.speaker-card");
//     let scrollAmount = card.offsetWidth;
//   const currentScrollPosition = cardsContainer.scrollLeft;
//   const newScrollPosition = currentScrollPosition + scrollAmount;

//   const maxScrollPosition = cardsContainer.scrollWidth - cardsContainer.clientWidth;
//   const minScrollPosition = 0;

//   const smoothScroll = (start, end, duration) => {
//     let currentTime = 0;
//     const increment = 20;

//     const animateScroll = () => {
//       currentTime += increment;
//       const position = easeInOutQuad(currentTime, start, end - start, duration);
//       cardsContainer.scrollLeft = position;
//       if (currentTime < duration) {
//         requestAnimationFrame(animateScroll);
//       }
//     };

//     animateScroll();
//   };

//   const easeInOutQuad = (t, b, c, d) => {
//     t /= d / 2;
//     if (t < 1) return c / 2 * t * t + b;
//     t--;
//     return -c / 2 * (t * (t - 2) - 1) + b;
//   };

//   if (newScrollPosition < minScrollPosition) {
//     smoothScroll(currentScrollPosition, minScrollPosition, 500);
//   } else if (newScrollPosition > maxScrollPosition) {
//     smoothScroll(currentScrollPosition, maxScrollPosition, 500);
//   } else {
//     smoothScroll(currentScrollPosition, newScrollPosition, 500);
//   }
// };

// buttonLeft.onclick = function () {
//     let card = document.querySelector("#cardsContainer div.speaker-card");
//     let cardWidth = card.offsetWidth;
//     const currentScrollPosition = cardsContainer.scrollLeft;
//     const newScrollPosition = currentScrollPosition - (cardWidth*3);
//     cardsContainer.scrollTo({
//         left: newScrollPosition,
//         behavior: 'smooth'
//     });
// };