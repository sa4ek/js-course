"use strict"

let budget = prompt("Ваш бюджет на месяц?");
let date = prompt("Введите дату в формате YYYY-MM-DD");

console.log(budget);
console.log(date);

let appData = {
    budget : budget,
    timeData : date,
    expenses : {},
    optionalExpenses :{} ,
    income : [],
    savings : false
}

let first_first = prompt("Введите обязательную статью расходов в этом месяце");
let first_second = +prompt("Во сколько обойдется?");
let second_first = prompt("Введите обязательную статью расходов в этом месяце");
let second_second = +prompt("Во сколько обойдется?");

appData.expenses.first_first = first_second;
appData.expenses.second_first = second_second;

alert((first_second + second_second) / 30);
