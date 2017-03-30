$(document).ready(function() {
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

    $('[data-valid=phone]').mask("+7 (999) 999-99-99");



    $('[data-valid=upload]').change(function(){
      var filename = $(this).val().replace(/.*\\/, "");
      alert('eus');
      var uploadItem = $(this).closest('.form__upload');
      uploadItem.find('.form__upload-path').html(filename);
      uploadItem.find('label').hide();
      uploadItem.find('.form__upload-result').fadeIn();
    });

    /*$('.franchise-form__upload-remove').click(function(evt){
      evt.preventDefault();
      var self = $(this);
      $('#popupDialogImg, #dialog-overlay').fadeIn();
      $('#popupConfirmImg').click(function(evt) {
        evt.preventDefault();
        var currentWrp = self.closest('.franchise-form__upload-item');
        currentWrp.find('.franchise-form__upload-wrp').show();
        currentWrp.find('.franchise-form__upload-result').hide();
        currentWrp.find('input[type=file]').val('');
        $('#popupDialogImg, #dialog-overlay').fadeOut();
      });

      $('#popupCancelImg').click(function(evt) {
        $('#popupDialogImg, #dialog-overlay').fadeOut();
    });

    })*/

})
