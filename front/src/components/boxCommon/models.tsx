import { Alignments } from "@/styles/alignments";
import { Margins, Padding, Position } from "@/styles/spacing";

export interface IndexProps extends Margins, Padding, Position, Alignments {
    width?: string;
    height?: string | number;

    flex?: string | number;
    bgColor?: string | undefined;
    borderRadius?: string | number;
    children: React.ReactNode | React.ReactNode[] | undefined;
}