const Greeting = () => {
    const hour = new Date().getHours();
    // const name = window.prompt("Enter your full name: (E.g: John Doe)") || "John Doe";
    const name = "Hari Krishnan";
    return (
        <div>
            <h1 className="text-nowrap">{hour < 12 ? "Good Morning"
                : hour >= 12 && hour < 18 ? "Good Afternoon"
                    : "Good Evening"}
                <br/>
                <span className="bg-green-500  border-l-4 pl-2 inline-block -skew-x-12 relative z-20 border-red-500 select-none text-white">{name.split(" ")[0]}</span>
                <span className="bg-red-500 inline-block border-r-4 border-green-500 translate-y-2 pr-2 -translate-1 select-none -skew-x-12 text-white">{name.split(" ")[1]}</span>
            </h1>
            <p className="pt-1 italic">{new Date().toLocaleDateString()}</p>

        </div>
    )
}
export default Greeting
