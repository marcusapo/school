import { MainProps } from "./models";
import { H1, H2, H3, H4 } from "./style";

const Text: React.FC<MainProps> = ({
    children,
    type,
    onclick,
    color = 'black'
}) => {

    const findComponent = () => {
        switch (type) {
            case 'H1':
                return (
                    <H1
                        color={color}
                        onClick={onclick} 
                        style={{cursor:'pointer'}}
                    >
                        { children }
                    </H1>
                )
                case 'H2':
                return (
                    <H2
                        color={color}
                        onClick={onclick}
                    >
                        { children }
                    </H2>
                )
                case 'H3':
                    return (
                        <H3
                            color={color}
                            onClick={onclick}
                        >
                            { children }
                        </H3>
                )
                case 'H4':
                    return (
                        <H4
                            color={color}
                            onClick={onclick}
                        >
                            { children }
                        </H4>
                )
        }
    }

    return findComponent()
}

export default Text;