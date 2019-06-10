"use strict"

let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", ""),
    expense = prompt("Введите обязательную статью расходов в этом месяце", ""),
    value =  prompt("Во сколько обойдется?", "");
let appData = {
    budget: money,
    timeData: time,
    expenses: {
        expense : expense,
        value : value
    },
    optionalExpenses: {},
    income: [],
    savings: false
}
alert("Ваш бюджет на 1 день: " + Math.round((money/30) * 100) / 100 + " UAH");