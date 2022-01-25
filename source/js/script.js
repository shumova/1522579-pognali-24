// показ/скрытие главного меню

let pageHeader = document.querySelector('.page-header');
let headerToggle = document.querySelector('.page-header__toggle');

pageHeader.classList.remove('page-header--no-js');

headerToggle.addEventListener('click', function() {
  if (pageHeader.classList.contains('page-header--main-menu-open')) {
    pageHeader.classList.remove('page-header--main-menu-open');
  } else {
    pageHeader.classList.add('page-header--main-menu-open');
  }
});

// открытие попапа на главной странице

let pagePopup = document.querySelector('.page-main__popup');
let popupOpen = document.querySelector('.services__link');
let popupClose = document.querySelector('.popup-services__close');

if (pagePopup) {
  popupOpen.addEventListener('click', function(open) {
    pagePopup.classList.toggle('page-main__popup--open');
    open.preventDefault();
    return false;
  });

  popupClose.addEventListener('click', function() {
      pagePopup.classList.remove('page-main__popup--open');
    }
  );
}

// изогнутая линия для рейтинга в карточках попутчиков

let canvas = document.querySelectorAll('.level__rate-line');

if (canvas) {
  for (let i = 0; i < canvas.length; i++) {
    let rate = canvas[i].dataset.rate;
    let context = canvas[i].getContext('2d');
    let x = canvas[i].width / 2;
    let y = canvas[i].height / 2
    let radius = (canvas[i].width / 2) - 2;
    let startAngle = Math.PI * 1.5;
    let endAngle = (Math.PI * rate * 1.5 / 100) - 0.2;

    // Код ниже проверю на сверке по pixel perfect
    // if (canvas[i].width == 60) {
    //   context.lineWidth = 4;
    // } else if (canvas[i].width == 45) {
    //   context.lineWidth = 3;
    // }

    if (canvas[i].width == 45) {
      context.lineWidth = 3;
    } else if (canvas[i].width == 100) {
      context.lineWidth = 3;
    } else context.lineWidth = 4;

    context.lineCap = "round";
    context.strokeStyle = "#ff8d30";

    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle, false);
    context.stroke();
  }
}

// показ/скрытие фильтра по стране на странице catalog (Попутчики)

let countryFilter = document.querySelector('.country-filter');
let countryFilterToggle = document.querySelector('.country-filter__toggle');
let countryFilterHideBtn = document.querySelector('.country-filter__hide-countries');

if (countryFilter) {
  countryFilter.classList.remove('country-filter--no-js');

  countryFilterToggle.addEventListener('click', function() {
    countryFilter.classList.toggle('country-filter--open');
  });

  countryFilterHideBtn.addEventListener('click', function() {
    countryFilter.classList.remove('country-filter--open');
  });
}
