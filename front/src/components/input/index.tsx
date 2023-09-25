import BoxCommon from "../boxCommon";
import { InputProps } from "./models"
import { BoxInput, InputStyle } from "./style"

const Input: React.FC<InputProps> = ({
    maxlenght,
    onChange,
    placeholder,
    text,
    type,
    value,
    name,
}) => {
    return (
        <BoxCommon>
            <InputStyle
                value={value}
                name={name}
                type={type}
                placeholder={placeholder}
                maxLength={maxlenght}
                text={text}
                onChange={onChange}
            />
        </BoxCommon>
    )
}

export default Input;