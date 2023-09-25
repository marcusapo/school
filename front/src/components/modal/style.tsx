import {styled} from 'styled-components'

export const Backdrop = styled.section`
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .4);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ModalStyle = styled.div `
    background-color:#294D7D;
    width:750px;
    height:750px;
    border-radius:20px;
    box-shadow: 0px 0px 22px rgba(0, 0, 0, 0.5); 
`