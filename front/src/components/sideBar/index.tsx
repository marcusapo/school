import { SideInfo } from "./style";
import { SideBarProps } from "./models";

const SideBar: React.FC<SideBarProps> = ({
children
}) => {
    return (
        <SideInfo>
            {children}
        </SideInfo>
    )
}

export default SideBar;