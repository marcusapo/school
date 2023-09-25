import {styled} from 'styled-components'
import { MainStyledProps } from '../text/models'

export const ButtonStyle = styled.button<MainStyledProps> `
    color:#fff;
    width:150px;
    height:40px;
    border-radius:10px;
    border:none;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    margin-top:15px;
    background-color: ${({ color }) => color};
    font-size:17px;
    transition: 0.5s;
    cursor: pointer;
    white-space:nowrap;

    &:hover {
        scale:1.05;
        font-size:18px;
    }
`