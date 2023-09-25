export type FlexDirection = 'row' | 'column'
export type JustifyContent = 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly' | 'center'
export type AlignItems = 'flex-start' | 'flex-end' | 'center'
export type FlexWrap = 'unset' | 'wrap' | 'wrap-reverse'
export type Rotate = '180deg' | '90deg' | '270deg';
export type Position = 'relative' | 'absolute'

export type Alignments = {
    flexDirection?: FlexDirection;
    justifyContent?: JustifyContent;
    alignItems?: AlignItems;
    gap?: string;
    flexWrap?: FlexWrap;
    position?: Position;
    zIndex?: number;
}