import {cartItems} from "../constants";
import {useMemo, useState} from "react";
import {FaCartArrowDown} from "react-icons/fa6";
import {IoTrashBin} from "react-icons/io5";

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
            <h1 className="mb-3 underline flex justify-around items-center">Cart Items <FaCartArrowDown/></h1>
            {cart.length > 0 ? (
                <>
                    <div className="overflow-y-scroll h-[250px] min-w-fit px-3 border-b-2 border-green-500">
                        {cart.map(({id, name, price}) => (
                            <div key={id} className="grid-cols-[1fr_80px_100px] mb-2 align-middle grid gap-4 text-left">
                                <h3 className="m-0">{name}</h3>
                                <p className="m-0">
                                    $
                                    <span className="text-2xl">
                                         {price.split(".")[0]}.
                                    </span>
                                    <span className="text-md font-normal">
                                         {price.split(".")[1]}
                                    </span>
                                </p>
                                <div className="mx-auto mt-1">
                                    <button onClick={() => deleteItem(id)}
                                            className={"bg-red-500 w-fit px-2 py-1 h-fit rounded-2xl! hover:opacity-50 text-white font-medium flex justify-center items-center gap-2"}>
                                        <IoTrashBin/>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="mt-3">
                        Total $
                        <span className="text-2xl">
                            {total.split(".")[0]}.
                        </span>
                        <span className="text-md font-normal">
                            {total.split(".")[1]}
                        </span>
                    </p>
                </>

            ) : (<p className="text-2xl">Cart is Empty</p>)
            }
        </div>
    )
}

export default Cart;
