import {weeklyTagInitialValues, dailyTagValues, monthlyTagValues, weeklyTagValues, eventListers} from "./functions.js"

const daily = document.querySelector(".daily-text-user");
const weekly = document.querySelector(".weekly-text-user");
const monthly = document.querySelector(".monthly-text-user");

const nameTags = document.querySelectorAll(".name-tag");

const hoursCurrent = document.querySelectorAll(".hours-tag-quantity-number");
const currentHrs = document.querySelectorAll(".hrs-main");

const previousName = document.querySelectorAll(".previous-hours");
const previousTime = document.querySelectorAll(".time-hours-previous");
const previousHrs = document.querySelectorAll(".hours-previous");



fetch("../data.json")
    .then(response => response.json())
    .then(data=>{ 
        eventListers(data, nameTags, hoursCurrent, currentHrs, previousName, previousTime, previousHrs, daily, weekly, monthly);
        weeklyTagInitialValues(data, nameTags, hoursCurrent, currentHrs, previousName, previousTime, previousHrs);
    });
