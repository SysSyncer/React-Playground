import {cartItems} from "../constants";
import {useMemo, useState} from "react";

interface ICart {
    id: number;
    name: string;
    price: string;
}

const Cart = () => {
    const [cart, setCart] = useState<ICart[]>(cartItems);

    const deleteItem = (idToDelete: number) => {
        const updatedItems = cart.filter(({id}) => id != idToDelete);
        setCart(updatedItems);
    };

    const total = useMemo(() => {
        return cart
            .reduce((acc, {price}) => acc + Number.parseFloat(price), 0)
            .toFixed(2);
    }, [cart]);

    return (
        <div>
            <h1 className="mb-3 underline">Cart Items</h1>
            {cart.length > 0 ? (
                <>
                    <div className="overflow-y-scroll h-[250px] min-w-fit border-b-2 border-green-500">
                        {cart.map(({id, name, price}) => (
                            <div key={id} className="grid-cols-[1fr_80px_75px] mb-2 align-middle grid gap-4 text-left">
                                <h3 className="m-0">{name}</h3>
                                <p className="m-0 font-bold">${price}</p>
                                <button onClick={() => deleteItem(id)} className="btn btn-danger">Delete</button>
                            </div>
                        ))}
                    </div>
                    <p>Total {total}</p>
                </>

            ) : (<p className="text-2xl">Cart is Empty</p>)
            }
        </div>
    )
}

export default Cart;
