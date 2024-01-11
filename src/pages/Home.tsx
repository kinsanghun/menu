import Calendar from "components/Calendar";
import { StyledContainer, StyledLi, StyledSection, StyledTitle, StyledUl } from "components/styled";
import { LeftArrow, RightArrow } from "icons/icon";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { color } from "styles/golbal";
import { FoodSchedule, MEAL_TIME } from "types/food";
import { generateCalendarDays } from "utils/utils";

type MoveFlag = 0 | 1;

const tmpList:FoodSchedule[] = [
    {
        sid:1,
        date:"2024.01.04",
        mealTime: MEAL_TIME.BREAK_FIRST,
        food: []
    }
]

function Home() {
    const navigation = useNavigate();
    const [foodList, setFoodList] = useState([]);
    const [year, setYear] = useState(new Date().getFullYear());
    const [month, setMonth] = useState(new Date().getMonth() + 1);

    const moveMonthHandler = (flag: MoveFlag) => {
        if (flag === 0) {
            setMonth((prevMonth) => {
                const newMonth = prevMonth === 1 ? 12 : prevMonth - 1;
                const newYear = prevMonth === 1 ? year - 1 : year;
                setYear(newYear);
                return newMonth;
            });
        } else {
            setMonth((prevMonth) => {
                const newMonth = prevMonth === 12 ? 1 : prevMonth + 1;
                const newYear = prevMonth === 12 ? year + 1 : year;
                setYear(newYear);
                return newMonth;
            });
        }
    };

    const addIngredientHandler = () => {
        navigation("/addIngredient");
    }   
    
    const addFoodHandler = () => {
        navigation("/addFood");
    }

    return (
        <StyledContainer>
            <StyledSection>
                <StyledSection>
                    <StyledTitle>식단표</StyledTitle>
                    <FlexSection>
                        <span onClick={() => moveMonthHandler(0)}><LeftArrow/></span>
                        <strong style={{width: "120px", textAlign:"center"}}>{year}년 {month}월</strong>
                        <span onClick={() => moveMonthHandler(1)}>{<RightArrow />}</span>
                    </FlexSection>
                </StyledSection>
                <CustomGridUl>
                    <ListButton onClick={addIngredientHandler}>재료 추가하기</ListButton>
                    <ListButton onClick={addFoodHandler}>음식 추가하기</ListButton>
                </CustomGridUl>
                <Calendar schedule={tmpList} year={year} month={month}/>
            </StyledSection>
        </StyledContainer>
    )
}

const FlexSection = styled(`div`)`
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 16px;
`

const CustomGridUl = styled(StyledUl)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`

const ListButton = styled(StyledLi)`
    position: relative;
    display: flex;
    padding: 1rem;
    color: ${color.title};
    border: 1px solid ${color.primary};
    border-radius: 12px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export default Home;