import {
    Header,
    Footer,
    MainContent,
    TSXRules,
    Greeting,
    ProductInfo,
    Avatar,
    Person,
    Product,
    Card, Cart
} from "./components";
import "./App.css"

function App() {

    return (
        <div className="text-center font-inconsolata items-center flex flex-col gap-10 p-10">
            <Header/>
            <MainContent/>
            <TSXRules/>
            <Greeting/>
            <ProductInfo/>
            <Avatar name="Hari" imageUrl="https://res.cloudinary.com/dpclcjajc/image/upload/v1762882301/profile_vlb41h.png"/>
            <Person name="Harikrishnan N" age="22"/>
            <Product name="Bike" price="$2000"/>
            <Card number="1">
                <p>This is a Card component</p>
            </Card>
            <Card number="2">
                <p>This is a Card component</p>
            </Card>
            <Card number="3">
                <p>This is a Card component</p>
            </Card>
            <Cart/>
            <Footer/>
        </div>
    )
}

export default App