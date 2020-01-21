'use strict'

const pricePerDroid = 3000;
let credits = 23580;
let userChoice = prompt(
    'Укажите количество дроидов, которые Вы хотите купить!',
);
let totalPrice = (userChoice = Number(userChoice) * pricePerDroid);

if (userChoice === 0) {
    console.log('Отменено пользователем!');
} else if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
} else {
    credits = credits - totalPrice;
    console.log(
        `Вы купили ${userChoice} дроидов, на счету осталось ${credits} кредитов.`,
    );
}
