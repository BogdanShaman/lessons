'use strict'
let start = document.getElementById('start'),
    values = document.querySelectorAll('div[class$="value"]'),
    expenses = document.getElementsByClassName('expenses-item'),
    btn = document.getElementsByTagName('button'),
    expensesBtn = btn[0],
    optionalExpensesBtn = btn[1],
    countBudgetBtn = btn[2],
    optionalExpenses = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    savings = document.querySelector('[type="checkbox"]'),
    sum = document.querySelector('.choose-sum'),
    percent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');


console.log(expenses); 
    