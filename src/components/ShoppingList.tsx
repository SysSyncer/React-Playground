import React from "react";
import {useState} from "react";

interface IItem {
    name: string;
    quantity: number;
}

const ShoppingList = () => {
    const [items, setItems] = useState<IItem[]>([]);
    const [name, setName] = useState<string>("");
    const [quantity, setQuantity] = useState<number>(0);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (name && quantity) {
            const item: IItem = {
                name: name,
                quantity: quantity,
            }
            setItems([...items, item]);
            setName("");
            setQuantity(0);
        }
    }

    return (
        <div>
            <h1>Shopping List</h1>
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
                <input
                    type="text"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
                    value={name}
                    placeholder='name'
                    className="block mt-1"
                />
                <input
                    type="number"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setQuantity(Number.parseInt(event.target.value))}
                    value={quantity}
                    placeholder='quantity'
                    className="block mt-1"
                />
                <input className="my-1" type="submit" value="submit"/>
            </form>
            {
                items.map((i, idx) => (
                    <div key={idx} className="flex justify-around">
                        <p>{i.name}</p>
                        <p>{i.quantity}</p>
                    </div>
                ))
            }
        </div>
    )
}
export default ShoppingList
