export interface InputProps {
    text?:string;
    maxlenght?:number;
    type?:string;
    placeholder?: string;
    value?:string;
    name?:string;
    onChange?: (e:React.ChangeEvent<HTMLInputElement>) => void
}