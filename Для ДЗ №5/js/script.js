'use strict'
let menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu-item'),
    title = document.getElementById('title'),
    column = document.getElementsByClassName('column'),
    adv = document.querySelector('.adv'),
    userNote = document.getElementById('prompt');

    menu.insertBefore(menuItem[2], menuItem[1]);

let menuItemFive = document.createElement('li');

    menuItemFive.classList.add('menu-item');
    menuItemFive.innerHTML = 'Пятый пункт';
    menu.append(menuItemFive);

    document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';
    title.textContent = 'Мы продаем только подлинную технику Apple';
    column[1].removeChild(adv);
    userNote.textContent = prompt("Какое у Вас отношение к продукту Apple?", "");