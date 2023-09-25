import { DatePaymentProps } from "./models"
import { DateBoxStyle, Line } from "./style"
import Text from "../text"

const DatePayment: React.FC<DatePaymentProps> = ({
date,
dayNumber,
dayString,
children,
}) => {
    return (
        <DateBoxStyle>
            {children}
            <Text color="white" type="H4">{date}</Text>
            <Text color="black" type="H3">{dayNumber}</Text>
            <Text color="black" type="H4">{dayString}</Text>
        </DateBoxStyle>
    )
}

export default DatePayment;