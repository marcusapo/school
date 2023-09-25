import {styled} from 'styled-components'

export const InputStyle = styled.input `
    background-color:#fff;
    border:none;
    width:300px;
    height:30px;
    font-size:22px;
    padding:10px;
    border-radius:5px;
    &:focus {
        outline:none;
        transition:0.2s
    }
`

export const BoxInput = styled.div `
    padding-bottom:0px;
`