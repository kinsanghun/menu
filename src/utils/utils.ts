import { Food } from "types/food";

export function generateCalendarDays(year:number=new Date().getFullYear(), month:number=new Date().getMonth() + 1): number[][] {
    const date = new Date(year, month - 1, 1);
    const daysInMonth = new Date(year, month, 0).getDate();
    const firstDayOfWeek = date.getDay();

    let calendar: number[][] = Array.from({ length: Math.ceil((daysInMonth + firstDayOfWeek) / 7) }, () => []);

    let dayCount = 1;
    for (let week = 0; week < calendar.length; week++) {
        for (let day = 0; day < 7; day++) {
            if (week === 0 && day < firstDayOfWeek) {
                calendar[week][day] = -1;
            } else if (dayCount <= daysInMonth) {
                calendar[week][day] = dayCount;
                dayCount++;
            } else {
                calendar[week][day] = -1;
            }
        }
    }

    return calendar;
}

export function getFoodCalories(food:Food) {
    return function(gram:number) {

    }
}