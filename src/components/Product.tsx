interface IProductProp {
    name: string;
    price: string;
}

const Product = ({name, price}: IProductProp) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>{price}</p>
        </div>
    )
}
export default Product;
