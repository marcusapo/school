import { ReactNode } from "react";

export interface DatePaymentProps {
    date:string;
    dayNumber:number;
    dayString:string;
    children?: ReactNode | ReactNode[];
}