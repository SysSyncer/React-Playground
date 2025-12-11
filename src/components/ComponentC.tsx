import {Name} from "../contexts";
import {useContext} from "react";

const ComponentC = () => {
    const name = useContext(Name);
    return (
        <div>
            <h3>{name}</h3>
        </div>
    )
}
export default ComponentC
