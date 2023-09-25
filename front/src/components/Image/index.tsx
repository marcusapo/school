import { IndexProps } from "./models";
import { Main } from "./style";

const Image: React.FC<IndexProps> = ({
    src
}) => {
    return (
        <Main src={src} />
    )
}

export default Image;