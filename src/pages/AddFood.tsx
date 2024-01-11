import { StyledContainer, StyledHeadline, StyledInput, StyledSection, StyledTitle } from "components/styled";
import { HTMLInputTypeAttribute } from "react";
import { InputType } from "zlib";

function AddFood() {
    return(
        <StyledContainer>
            <StyledSection>
                <StyledTitle>음식추가</StyledTitle>
            </StyledSection>
            <StyledSection>
                <StyledHeadline>이름</StyledHeadline>
                <StyledInput />
            </StyledSection>
            <StyledSection>
                <StyledHeadline>재료</StyledHeadline>
                <StyledInput />
            </StyledSection>
            <StyledSection>
                <StyledInput type="submit"/>
            </StyledSection>
        </StyledContainer>
    )
}

export default AddFood;