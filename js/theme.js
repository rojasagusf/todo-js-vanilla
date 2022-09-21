"use strict"

const btn = document.querySelector("#theme-btn");
const icon = document.querySelector(".theme-icon");
const backgroundImg = document.querySelector(".background-image");

const inputToDo = document.querySelector("#input-todo");
const sectionToDo = document.querySelector(".section-todo");
const clearBtn = document.querySelector("#clear-btn");


btn.addEventListener('click', () => {


    if (icon.src.split('/')[4] === 'icon-sun.svg') {
        icon.src = '/images/icon-moon.svg';
        backgroundImg.src = '/images/bg-desktop-light.jpg'

    } else {
        icon.src = '/images/icon-sun.svg';
        backgroundImg.src = '/images/bg-desktop-dark.jpg'
    }

});


inputToDo.addEventListener('keydown', (e) => {

    if(e.code == "Enter") {
        const todo = document.createElement('div');
        todo.className = 'todo-card';
        todo.innerText = e.target.value;

        sectionToDo.appendChild(todo);
    }
});

clearBtn.addEventListener('click', () => {
    sectionToDo.childNodes.forEach((child) => {
        child.remove();
    });
});