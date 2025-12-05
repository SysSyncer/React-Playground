import {products} from "../constants";

const productsInfo = products.map((product) => ({
    ...product,
    uKey: crypto.randomUUID(),
}));

const ProductInfo = () => {
    return (
        <div>
            <table className="table text-left table-hover">
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Availability</th>
                </tr>
                </thead>
                <tbody>
                {productsInfo.map(({uKey, name, price, availability}) => (
                    <tr key={uKey}>
                        <td scope="row">{name}</td>
                        <td scope="row">{price}</td>
                        <td scope="row">{availability}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
export default ProductInfo
