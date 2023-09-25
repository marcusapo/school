import { ReactNode } from "react";

export interface ButtonProps {
    children:ReactNode | ReactNode[];
    color?:string;
    onClick?: () => void
}

