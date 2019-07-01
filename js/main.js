"use strict"
let startBtn = document.getElementById('start'),

    resultValues = document.querySelectorAll('div[class$="value"]'),
    budgetVal = resultValues[0],
    dayBudgetVal = resultValues[1],
    levelVal = resultValues[2],
    expensesVal = resultValues[3],
    optionalExpensesVal = resultValues[4],
    incomeVal = resultValues[5],
    monthSavingsVal = resultValues[6],
    yearSavingsVal = resultValues[7],

    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('[type="checkbox"]'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');
 
    expensesBtn.disabled = true;
    expensesBtn.style.background = 'silver';
    optionalExpensesBtn.disabled = true;
    optionalExpensesBtn.style.background = 'silver';
    countBudgetBtn.disabled = true;
    countBudgetBtn.style.background = 'silver';

let money, time;
function start() {
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", ""); 
    while(isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetVal.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

    expensesBtn.disabled = false;
    expensesBtn.style.background = '';
    optionalExpensesBtn.disabled = false;
    optionalExpensesBtn.style.background = '';
    countBudgetBtn.disabled = false;
    countBudgetBtn.style.background = '';
}

startBtn.addEventListener('click', start);

expensesBtn.addEventListener('click', function() {
    let sum = 0;
    for( let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
        if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
            appData.expenses[a] = b;
            sum += +b;
        }
        else {
            i = i - 1;
        }
    }
    expensesVal.textContent = sum;
    appData.expensesSum = sum;
});

optionalExpensesBtn.addEventListener('click', function() {
    for(let i = 0; i < optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesVal.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBudgetBtn.addEventListener('click', function() {


    appData.moneyPerDay = ((appData.budget - appData.expensesSum) / 30).toFixed();
    dayBudgetVal.textContent = appData.moneyPerDay;
    if(appData.budget != undefined) {
        if(appData.moneyPerDay < 100) {
            levelVal.textContent = "Минимальный уровень достатка";
        } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelVal.textContent = "Средний уровень достатка";
        } else if(appData.moneyPerDay > 2000) {
            levelVal.textContent = "Высокий уровень достатка";
        } else {
           levelVal.textContent = "Уровень достатка не определен!";
        }
    } else {
        let str = confirm("Начать расчет?");
        if(str) {
            start();
            appData.moneyPerDay = ((appData.budget - appData.expensesSum) / 30).toFixed(); 
            dayBudgetVal.textContent = appData.moneyPerDay;
            return;
        }
        dayBudgetVal.textContent = "Для определения начните расчет!";
    }
});

chooseIncome.addEventListener('input', function() {
    let items = chooseIncome.value;
    appData.income = items.split(', ');
    incomeVal.textContent = appData.income;
});

checkSavings.addEventListener('click', function() {
    if(appData.savings == true) {
        appData.savings = false;
    } else appData.savings = true;
    console.log(appData.savings);
});

sumValue.addEventListener('input', function() {
    if(appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;

            monthSavingsVal.textContent = appData.monthIncome.toFixed(1);
            yearSavingsVal.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function() {
    if(appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;

            monthSavingsVal.textContent = appData.monthIncome.toFixed(1);
            yearSavingsVal.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses : {},
    optionalExpenses: {},
    income: [],
    savings: false
};

