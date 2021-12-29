// показ/скрытие главного меню

var pageHeader = document.querySelector('.page-header');
var headerToggle = document.querySelector('.page-header__toggle');

pageHeader.classList.remove('page-header--no-js');

headerToggle.addEventListener('click', function() {
  if (pageHeader.classList.contains('page-header--main-menu-open')) {
    pageHeader.classList.remove('page-header--main-menu-open');
  } else {
    pageHeader.classList.add('page-header--main-menu-open');
  }
});

// открытие попапа на главной странице

var pagePopup = document.querySelector('.page-main__popup');
var popupOpen = document.querySelector('.services__link');
var popupClose = document.querySelector('.popup-services__close');

if (pagePopup) {
  popupOpen.addEventListener('click', function(open) {
    if (pagePopup.classList.contains('page-main__popup--open')) {
      pagePopup.classList.remove('page-main__popup--open');
    } else {
      pagePopup.classList.add('page-main__popup--open');
    }
    open.preventDefault();
    return false;
  });

  popupClose.addEventListener('click', function() {
      pagePopup.classList.remove('page-main__popup--open');
    }
  );
}

// изогнутая линия для рейтинга в карточках попутчиков

var canvas = document.querySelectorAll('.level__rate-line');

if (canvas) {
  for (var i = 0; i < canvas.length; i++) {
    var rate = canvas[i].dataset.rate;
    var context = canvas[i].getContext('2d');
    var x = canvas[i].width / 2;
    var y = canvas[i].height / 2
    var radius = 28;
    var startAngle = Math.PI * 1.5;
    var endAngle = (Math.PI * rate * 1.5 / 100) - 0.2;

    context.lineWidth = 4;
    context.lineCap = "round";
    context.strokeStyle = "#ff8d30";

    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle, false);
    context.stroke();
  }
}

// показ/скрытие фильтра по стране на странице catalog (Попутчики)

var countryFilter = document.querySelector('.country-filter');
var countryFilterToggle = document.querySelector('.country-filter__toggle');
var countryFilterHideBtn = document.querySelector('.country-filter__hide-countries');

if (countryFilter) {
  countryFilter.classList.remove('country-filter--no-js');

  countryFilterToggle.addEventListener('click', function() {
    if (countryFilter.classList.contains('country-filter--open')) {
      countryFilter.classList.remove('country-filter--open');
    } else {
      countryFilter.classList.add('country-filter--open');
    }
  });

  countryFilterHideBtn.addEventListener('click', function() {
    countryFilter.classList.remove('country-filter--open');
  });
}
