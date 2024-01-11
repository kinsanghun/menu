import styled from "styled-components";

export const StyledRootContainer = styled("div")`
    position: relative;
    max-width: 1200px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 80px 20px;
`

export const StyledContainer = styled("div")`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    gap: 40px;
`

export const StyledSection = styled("div")`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

interface GridProps {
    column: number;
    gap?: number;
}

export const GridContainer = styled.div<GridProps>`
    position: relative;
    display: grid;
    grid-template-columns: repeat(${props => props.column}, 1fr);
`


export const StyledUl = styled("ul")`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const StyledLi = styled("li")`
    
`

export const StyledTitle = styled("h1")`
    font-size: 1.5rem;
    font-weight: 600;
`

export const StyledHeadline = styled("h3")`
    font-size: 1.25rem;
    font-weight: 600;
`

export const StyledInput = styled("input")`
    padding: 10px 20px;
    border: 0.5px solid rgba(0,0,0,0.1);
    background: white;
`