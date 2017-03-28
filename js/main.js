/*(function() {
  var menu = document.querySelector(".main-nav__items-wrp");
  var menuClose = menu.querySelector(".main-nav__close");
  var menuToggle = document.querySelector(".main-nav__toggle");


  menuToggle.addEventListener("click", function (event) {
    event.preventDefault;
    menu.classList.add("main-nav__items-wrp--active");
  });

  menuClose.addEventListener("click", function (event){
      event.preventDefault;
    menu.classList.remove("main-nav__items-wrp--active");
  });

    $('[data-valid=phone]').inputmask("+7 (999) 999-9999", {
  });


  $('[data-valid=date]').datepicker();


})();*/


$(document).ready(function(){
  jQuery(function($) {
    $.datepicker.regional['ru'] = {
    closeText: 'Закрыть',
    prevText: '&#x3c;',
    nextText: '&#x3e;',
    currentText: 'Сегодня',
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
      'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ],
    monthNamesShort: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
      'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ],
    dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
    dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
    dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    weekHeader: 'Нед',
    dateFormat: 'dd.mm.yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['ru']);
  });
  $('[data-valid=date]').datepicker();
})
