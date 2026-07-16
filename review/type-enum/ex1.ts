/*
1. Easy
Create an enum called DayOfWeek with the days from Monday to
Sunday. Then create a function isWeekend that receives
a day and returns true if it is Saturday or Sunday.
*/

enum DayOfWeek {
    Sunday, // 0    
    Monday, // 1
    Tuesday, // 2
    Wednesday, // 3
    Thursday, // 4
    Friday, // 5
    Saturday // 6
};

function isWeekend(day: DayOfWeek): boolean {

    if(day === DayOfWeek.Sunday || day === DayOfWeek.Saturday) {
        return true;
    }

    return false
};

console.log(isWeekend(DayOfWeek.Monday))
console.log(isWeekend(DayOfWeek.Saturday))
console.log(isWeekend(DayOfWeek.Tuesday))