import {styled} from 'styled-components'
import { IndexStyledProps } from './models'

export const BoxStyle = styled.div<IndexStyledProps>`
    ${({ size }) => size === 'small' && 'width: 150px; height: 100px;'};
    ${({ size }) => size === 'medium' && 'width: 340px; height: 200px;'};
    ${({ size }) => size === 'big' && 'width: 340px; height: 200px;'};
    ${({ size }) => size === 'bigger' && 'width: 450px; height: 200px;'};
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;
    flex-direction:column;
    border-radius:20px;
    background-color: ${({ color }) => color};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5); 
    transition:0.5s;
    cursor: pointer;

    & p {
        opacity:0;
    }

    &&:hover {
        scale:1.1;
    }

    &&:hover p {
        opacity:1;
        transition:0.4s;
    }

`