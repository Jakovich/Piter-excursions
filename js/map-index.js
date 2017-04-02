ymaps.ready(init);
    var myMap,
        myPlacemark;

    function init(){
        myMap = new ymaps.Map("index-map", {
            center: [59.936985, 30.314880],
            zoom: 13,
            controls: []
        });

        myPlacemark1 = new ymaps.Placemark([59.938732, 30.332286], {
            hintContent: 'Русский музей',
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map/tooltip-home.svg',
            iconImageSize: [93, 76],
            iconImageOffset: [-93, -76]
        });
        myPlacemark2 = new ymaps.Placemark([59.934096, 30.324385], {
            hintContent: 'Казанский собор',
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map/tooltip-home.svg',
            iconImageSize: [93, 76],
            iconImageOffset: [-93, -76]
        });
        myPlacemark3 = new ymaps.Placemark([59.934204, 30.306703], {
            hintContent: 'Исаакиевский собор',
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map/tooltip-home.svg',
            iconImageSize: [93, 76],
            iconImageOffset: [-93, -76]
        });
        myPlacemark4 = new ymaps.Placemark([59.941023, 30.313271], {
            hintContent: 'Эрмитаж',
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map/tooltip-home.svg',
            iconImageSize: [93, 76],
            iconImageOffset: [-93, -76]
        });
        myPlacemark5 = new ymaps.Placemark([59.925506, 30.295589], {
            hintContent: 'Эрмитаж',
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map/tooltip-home.svg',
            iconImageSize: [93, 76],
            iconImageOffset: [-93, -76]
        });
        myPlacemark6 = new ymaps.Placemark([59.949503, 30.316570], {
            hintContent: 'Первопавловская крепость',
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map/tooltip-home.svg',
            iconImageSize: [93, 76],
            iconImageOffset: [-93, -76]
        });


        myPlacemark7 = new ymaps.Placemark([59.927527, 30.348057], {
            hintContent: '',
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map/tooltip-map.svg',
            iconImageSize: [93, 76],
            iconImageOffset: [-93, -76]
        });

        myPlacemark8 = new ymaps.Placemark([59.934804, 30.348229], {
            hintContent: 'Литейный проспект',
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map/tooltip-pointer.svg',
            iconImageSize: [93, 76],
            iconImageOffset: [-93, -76]
        });

        myPlacemark9 = new ymaps.Placemark([59.941253, 30.357885], {
            hintContent: '',
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map/tooltip-man.svg',
            iconImageSize: [93, 76],
            iconImageOffset: [-93, -76]
        });

        myPlacemark10 = new ymaps.Placemark([59.938497, 30.272140], {
            hintContent: '',
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map/tooltip-note.svg',
            iconImageSize: [93, 76],
            iconImageOffset: [-93, -76]
        });

        myPlacemark11 = new ymaps.Placemark([59.936964, 30.303008], {
            hintContent: '',
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map/tooltip-pointer.svg',
            iconImageSize: [93, 76],
            iconImageOffset: [-93, -76]
        });




        myMap.geoObjects
        .add(myPlacemark11)
        .add(myPlacemark1)
        .add(myPlacemark2)
        .add(myPlacemark3)
        .add(myPlacemark4)
        .add(myPlacemark5)
        .add(myPlacemark6)
        .add(myPlacemark7)
        .add(myPlacemark8)
        .add(myPlacemark9)
        .add(myPlacemark10);
    }
