import { FoodSchedule } from "types/food";
import { GridContainer } from "./styled";
import { generateCalendarDays } from "utils/utils";
import styled from "styled-components";

type CalendarProps = { 
    schedule:FoodSchedule[];
    year: number;
    month: number;
}

function Calendar({ schedule, year, month }: CalendarProps) {
    const calendar = generateCalendarDays(year, month);

    const calendarItems = calendar.map((row, rIdx) => {
        return row.map((col, cIdx) => {
            const date = col > 0 ? col : "";
            const mealData = schedule.filter((s) => {
                return new Date(s.date).getTime() == new Date(year, month - 1, Number(date)).getTime();
            });
            return (
                <CalendarItem key={`${rIdx}${cIdx}`}>
                {date}
                {
                    mealData.length > 0 && 
                    <div>
                        {mealData.map((data, idx) => <div key={`d_${idx}`}>{data.date}</div>)}
                    </div>
                }
                </CalendarItem>
            );
        })
    })

    return (<GridContainer column={7}>{calendarItems}</GridContainer>);
}

const CalendarItem = styled("div")`
    height: 150px;
    padding: 10px;
    border: 0.1px solid rgba(0, 0, 0, 0.1);
`

const ScheduleItem = styled(`div`)`

`

export default Calendar;