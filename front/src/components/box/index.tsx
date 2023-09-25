import { blue } from "@/styles/colors"
import Text from "../text"
import { IndexProps } from "./models"
import { BoxStyle } from "./style"

const Box: React.FC<IndexProps> = ({
    children,
    color,
    size,
    onClick
}) => {
    return (
        <BoxStyle color={color} size={size} onClick={onClick}>
            { children }
        </BoxStyle>
    )
}

export default Box