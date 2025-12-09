import { FaBeer } from "react-icons/fa";

const IconComponent = ({fontSize, color}: {fontSize: string, color: string}) => {
    const styles = {
        fontSize: fontSize,
        color: color,
    }
    return (
        <div>
            <FaBeer style={styles}/>
        </div>
    )
}
export default IconComponent;
