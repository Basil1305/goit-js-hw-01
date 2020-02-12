'use strict';

const china = 'китай';
const chinaPrise = 100;
const chili = 'чили';
const chiliPrise = 250;
const аustralia = ' австралия';
const аustraliaPrise = 170;
const india = 'индия';
const indiaPrise = 80;
const jamaica = 'ямайка';
const jamicaPrise = 120;
let userChoiceCountry = prompt('Введите страну доставки');

if (userChoiceCountry === null) {
    console.log('ничего не введено');
} else {
    switch (userChoiceCountry.toLowerCase()) {
        case china:
            alert(`Доставка в ${china} будет стоить ${chinaPrise} кредитов`);
            break;
        case chili:
            alert(`Доставка в ${chili} будет стоить ${chiliPrise} кредитов`);
            break;
        case аustralia:
            alert(
                `Доставка в ${аustralia} будет стоить ${аustraliaPrise} кредитов`,
            );
            break;
        case india:
            alert(`Доставка в ${india} будет стоить ${indiaPrise} кредитов`);
            break;
        case jamaica:
            alert(`Доставка в ${jamaica} будет стоить ${jamicaPrise} кредитов`);
            break;

        default:
            alert('В Вашей стране доставка не доступна');
    }
}
