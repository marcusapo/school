import { ReactNode } from "react";

export interface IndexProps{
    size: SizeType
    children: ReactNode | ReactNode[];
    color?:string;
    onClick?: () => void
}

type SizeType = 'small' | 'medium' | 'big' | 'bigger'

export type IndexStyledProps = {
    size: SizeType
    color?:string;
}