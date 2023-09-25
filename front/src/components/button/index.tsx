import { green } from "@/styles/colors";
import { ButtonProps } from "./models"
import { ButtonStyle } from "./style"

const Button: React.FC<ButtonProps> = ({
    children,
    color,
    onClick
}) => {

    return (
        <ButtonStyle color={color} onClick={onClick}>{children}</ButtonStyle>
    )
}

export default Button;