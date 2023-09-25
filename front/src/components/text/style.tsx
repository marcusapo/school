import {styled} from 'styled-components'
import { MainStyledProps } from './models'

export const H1 = styled.h1<MainStyledProps>`
    font-size: 60px;
    color: ${({ color }) => color}
`

export const H2 = styled.h2<MainStyledProps>`
    font-size: 40px;
    color: ${({ color }) => color}
`

export const H3 = styled.h3<MainStyledProps>`
    font-size: 25px;
    color: ${({ color }) => color}
`

export const H4 = styled.h4<MainStyledProps>`
    font-size: 15px;
    color: ${({ color }) => color}
`