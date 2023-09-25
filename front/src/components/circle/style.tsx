import {styled} from 'styled-components'

export const CircleStyle = styled.div `
    width:35px;
    height:35px;
    border-radius:30px;
    display:flex;
    align-items:center;
    justify-content:center;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); 
    background-color: ${({ color }) => color};
`