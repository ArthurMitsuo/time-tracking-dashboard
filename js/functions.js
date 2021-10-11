
// const daily = document.querySelector(".daily-text-user");
// const weekly = document.querySelector(".weekly-text-user");
// const monthly = document.querySelector(".monthly-text-user");

// const nameTags = document.querySelectorAll(".name-tag");

// const hoursCurrent = document.querySelectorAll(".hours-tag-quantity-number");
// const currentHrs = document.querySelectorAll(".hrs-main");

// const previousName = document.querySelectorAll(".previous-hours");
// const previousTime = document.querySelectorAll(".time-hours-previous");
// const previousHrs = document.querySelectorAll(".hours-previous");
const hrOrHrs = (hrs) =>{
    if(hrs !== 0 && hrs !== 1){
        return "hrs";
    }else{
        return "hr";
    }
}
const removeClass = (daily, weekly, monthly)=>{
    let array = [daily, weekly, monthly];
    for(let i = 0; i < array.length; i++){
        array[i].classList.remove("text-user-focus");
    }  
}
export const weeklyTagInitialValues = (data, nameTags, hoursCurrent, currentHrs, previousName, previousTime, previousHrs) =>{
    for(let i = 0; i < data.length; i++){
        if(data[i]["title"] == nameTags[i].innerHTML){
            let currentTimeData = data[i]["timeframes"]["weekly"]["current"];
            let previousTimeData = data[i]["timeframes"]["weekly"]["previous"];

            hoursCurrent[i].innerHTML = currentTimeData;
            currentHrs[i].innerHTML = hrOrHrs(currentTimeData);

            previousName[i].innerHTML = "Last Week";
            previousTime[i].innerHTML = previousTimeData;
            previousHrs[i].innerHTML = hrOrHrs(previousTimeData);
        }  
    };
};

export const weeklyTagValues = (data, nameTags, hoursCurrent, currentHrs, previousName, previousTime, previousHrs, daily, weekly, monthly)=>{
    removeClass(daily, weekly, monthly);
    weekly.classList.add("text-user-focus");
    weeklyTagInitialValues(data, nameTags, hoursCurrent, currentHrs, previousName, previousTime, previousHrs);
}
export const dailyTagValues = (data, nameTags, hoursCurrent, currentHrs, previousName, previousTime, previousHrs, daily, weekly, monthly)=>{
    removeClass(daily, weekly, monthly);
    daily.classList.add("text-user-focus");
    for(let i = 0; i < data.length; i++){
        if(data[i]["title"] == nameTags[i].innerHTML){
            let currentTimeData = data[i]["timeframes"]["daily"]["current"];
            let previousTimeData = data[i]["timeframes"]["daily"]["previous"];

            hoursCurrent[i].innerHTML = currentTimeData;
            currentHrs[i].innerHTML = hrOrHrs(currentTimeData);

            previousName[i].innerHTML = "Yesterday";
            previousTime[i].innerHTML = previousTimeData;
            previousHrs[i].innerHTML = hrOrHrs(previousTimeData);
        }
    }
}

export const monthlyTagValues = (data, nameTags, hoursCurrent, currentHrs, previousName, previousTime, previousHrs, daily, weekly, monthly)=>{
    removeClass(daily, weekly, monthly);
    monthly.classList.add("text-user-focus");
    for(let i = 0; i < data.length; i++){
        if(data[i]["title"] == nameTags[i].innerHTML){
            let currentTimeData = data[i]["timeframes"]["monthly"]["current"];
            let previousTimeData = data[i]["timeframes"]["monthly"]["previous"];

            hoursCurrent[i].innerHTML = currentTimeData;
            currentHrs[i].innerHTML = hrOrHrs(currentTimeData);

            previousName[i].innerHTML = "Last Month";
            previousTime[i].innerHTML = previousTimeData;
            previousHrs[i].innerHTML = hrOrHrs(previousTimeData);
        }
    }
}

export const eventListers = (data, nameTags, hoursCurrent, currentHrs, previousName, previousTime, previousHrs, daily, weekly, monthly)=>{
    daily.addEventListener("click", () => dailyTagValues(data, nameTags, hoursCurrent, currentHrs, previousName, previousTime, previousHrs, daily, weekly, monthly));
    monthly.addEventListener("click", ()=> monthlyTagValues(data, nameTags, hoursCurrent, currentHrs, previousName, previousTime, previousHrs, daily, weekly, monthly));
    weekly.addEventListener("click", ()=> weeklyTagValues(data, nameTags, hoursCurrent, currentHrs, previousName, previousTime, previousHrs, daily, weekly, monthly));
}