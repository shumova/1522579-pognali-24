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
