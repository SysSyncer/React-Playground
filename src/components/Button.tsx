import {useState} from "react";

const Button = () => {
    const [isHover, setIsHover] = useState(false);
    const styles = {
        backgroundColor: isHover ? "DarkRed" : "Red",
        color: "white",
        borderRadius: "20px",
        padding: "5px 10px",
        transition: "background-color 0.15s ease-in",
    };

    const copyHandler = (event: {preventDefault() : void}) => {
        event.preventDefault();
        window.alert("Stop stealing my content!!!");
    }

    return (
        <>
            <button style={styles} onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}>Click
            </button>
            <p onCopyCapture={copyHandler}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                ea rebum. Stet clita kasd gubergren, no sea takimata.
            </p>
        </>
    )
}
export default Button
