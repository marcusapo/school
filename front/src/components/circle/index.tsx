import { CircleProps } from "./models"
import { CircleStyle } from "./style";

const Circle:React.FC<CircleProps> = ({
    children,
    color
}) => {
    return (
        <CircleStyle color={color}>
            {children}
        </CircleStyle>
    )
}

export default Circle;