import type {ReactNode} from "react";

interface ICardProp {
    number: string;
    children: ReactNode;
}

const Card = ({number, children} : ICardProp) => {
    return (
        <div>
            <h1>Card {number}</h1>
            {children}
        </div>
    )
}
export default Card;