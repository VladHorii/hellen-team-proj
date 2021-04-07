import $ from 'jquery';
import img1 from '../images/reviews/Ellipse-9.png';
import img2 from '../images/reviews/Ellipse-10.png';
import img3 from '../images/reviews/Ellipse-11.png';
import img4 from '../images/reviews/Ellipse-12.png';
import img5 from '../images/reviews/Ellipse-13.png';
import img6 from '../images/reviews/Ellipse-14.png';
import img7 from '../images/reviews/Ellipse-15.png';

const img = [img1, img2, img3, img4, img5, img6, img7];
let curSlide = -1;

$(document).ready(function () {
  $('.js-slider').slick({
    dots: true,
    onAfterChange: function (slider, index) {
      console.log('+');
      console.log($(slider.$slides.get(index)).data('caption'));
    },
  });
});
const createImg = source => `<img
      class="reviews__image-slider"
      src="${source}"
      alt="Фотография выпускника"
      width="54"
      height="54" />`;
//
//

const renderMobileDots = () => {
  const dotsRefs = document.querySelectorAll('.slick-dots li');
  const currentDotRef = document.querySelector('.slick-dots li.slick-active button');

  // console.log(currentDotRef.data('role'));
  // const numOfCurrentDot = currentDotRef.getAttribute('aria-controls');
  const jqueryElem = $('.slick-dots li.slick-active button');
  console.log('renderMobileDots ~ jqueryElem', jqueryElem);
  const numOfCurrentDot = jqueryElem.data('role');
  console.log('renderMobileDots ~ numOfCurrentDot', numOfCurrentDot);
  // const numOfCurrentDot = Number(currentDotRef.textContent) - 1;
  // console.log('numOfCurrentDot', numOfCurrentDot);
  return;
  if (curSlide === numOfCurrentDot) {
    return console.log('curSlide === numOfCurrentDot');
  }

  dotsRefs.forEach((el, index) => {
    // console.log(index);
    // console.log(index === numOfCurrentDot);
    // console.log(index === numOfCurrentDot - 1);
    // console.log(index === numOfCurrentDot + 1);
    // console.log('=====');

    if (
      index === numOfCurrentDot ||
      index === numOfCurrentDot - 1 ||
      index === numOfCurrentDot + 1
    ) {
      console.log('good', index);
      const elWithImg = createImg(img[index]);
      el.firstChild.innerHTML = elWithImg;
      el.classList.remove('visually-hidden');
    } else {
      console.log('bad', index);
      el.classList.add('visually-hidden');
    }
    if (numOfCurrentDot === 0 && index === 2) {
      const elWithImg = createImg(img[index]);
      el.firstChild.innerHTML = elWithImg;
      el.classList.remove('visually-hidden');
    }
    if (numOfCurrentDot === img.length - 1 && index === img.length - 3) {
      const elWithImg = createImg(img[index]);
      el.firstChild.innerHTML = elWithImg;
      el.classList.remove('visually-hidden');
    }
  });
  curSlide = numOfCurrentDot;
  // console.log('render mobile dots end');
};
$('.js-slider').on('afterChange', function () {
  renderMobileDots();
  console.log('afterChange');
});
$('.js-slider').on('init', function (event, slick) {
  const dotsRefs = document.querySelectorAll('.slick-dots li');

  if (window.matchMedia('(min-width: 768px)').matches) {
    dotsRefs.forEach((el, index) => {
      const elWithImg = createImg(img[index]);
      el.firstChild.innerHTML = elWithImg;
    });
  } else {
    renderMobileDots();
  }
});
