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
    forFunction(nameTags, data, hoursCurrent, currentHrs, previousName, previousTime, previousHrs, "weekly", "Last Week");
};

export const weeklyTagValues = (data, nameTags, hoursCurrent, currentHrs, previousName, previousTime, previousHrs, daily, weekly, monthly)=>{
    removeClass(daily, weekly, monthly);
    weekly.classList.add("text-user-focus");
    weeklyTagInitialValues(data, nameTags, hoursCurrent, currentHrs, previousName, previousTime, previousHrs);
}
export const dailyTagValues = (data, nameTags, hoursCurrent, currentHrs, previousName, previousTime, previousHrs, daily, weekly, monthly)=>{
    removeClass(daily, weekly, monthly);
    daily.classList.add("text-user-focus");
    forFunction(nameTags, data, hoursCurrent, currentHrs, previousName, previousTime, previousHrs, "daily", "Yesterday");
}

export const monthlyTagValues = (data, nameTags, hoursCurrent, currentHrs, previousName, previousTime, previousHrs, daily, weekly, monthly)=>{
    removeClass(daily, weekly, monthly);
    monthly.classList.add("text-user-focus");
    forFunction(nameTags, data, hoursCurrent, currentHrs, previousName, previousTime, previousHrs, "monthly", "Last Month");
}

const forFunction = (nameTags, data, hoursCurrent, currentHrs, previousName, previousTime, previousHrs, option, previousOption)=>{
    for(let i = 0; i < data.length; i++){
        if(data[i]["title"] == nameTags[i].innerHTML){
            let currentTimeData = data[i]["timeframes"][option]["current"];
            let previousTimeData = data[i]["timeframes"][option]["previous"];

            hoursCurrent[i].innerHTML = currentTimeData;
            currentHrs[i].innerHTML = hrOrHrs(currentTimeData);

            previousName[i].innerHTML = previousOption;
            previousTime[i].innerHTML = previousTimeData;
            previousHrs[i].innerHTML = hrOrHrs(previousTimeData);
        }  
    };
}

export const eventListers = (data, nameTags, hoursCurrent, currentHrs, previousName, previousTime, previousHrs, daily, weekly, monthly)=>{
    daily.addEventListener("click", () => dailyTagValues(data, nameTags, hoursCurrent, currentHrs, previousName, previousTime, previousHrs, daily, weekly, monthly));
    monthly.addEventListener("click", ()=> monthlyTagValues(data, nameTags, hoursCurrent, currentHrs, previousName, previousTime, previousHrs, daily, weekly, monthly));
    weekly.addEventListener("click", ()=> weeklyTagValues(data, nameTags, hoursCurrent, currentHrs, previousName, previousTime, previousHrs, daily, weekly, monthly));
}