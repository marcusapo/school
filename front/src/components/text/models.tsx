import { ReactNode } from "react";

export interface MainProps {
    children: ReactNode | ReactNode[];
    type: TextType
    color?: string
    onclick?: () => void;
}

type TextType = 'H1' | 'H2' | 'H3' | 'H4' | 'H5'

export type MainStyledProps = {
    color: string
}