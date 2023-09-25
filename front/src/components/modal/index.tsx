import { Backdrop, ModalStyle } from "./style";
import { ModalProps } from "./models";

const Modal:React.FC<ModalProps> = ({
    visible,
    children
}) => {
    return !visible ? <></> : (
        <Backdrop>
            <ModalStyle>
                { children }
            </ModalStyle>
        </Backdrop>
    )
}

export default Modal;