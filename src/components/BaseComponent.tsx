import ComponentA from "./ComponentA.tsx";
import {useContext} from "react";
import {ThemeContext} from "../contexts";

const BaseComponent = () => {
    const theme = useContext(ThemeContext);
    return (
        <div>
            <h1>useContext</h1>
            <small>{theme}</small>
            <ComponentA/>
        </div>
    )
}
export default BaseComponent
