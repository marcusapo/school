import { ContainerProps } from "./models"
import { ContainerStyle } from "./style";

const Container: React.FC<ContainerProps> = ({
    children
}) => {
    return (
        <ContainerStyle>{children}</ContainerStyle>
    )
}

export default Container;