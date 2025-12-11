import {useState, useEffect} from "react";

interface IResponse {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const FetchData = () => {
    const [data, setData] = useState<IResponse[]>([]);
    const url = "https://jsonplaceholder.typicode.com/todos";

    useEffect(() => {
        const renderData = async () => {
            const response = await fetch(url, {method: "GET"});
            const data = await response.json();
            console.log("Fetched Data");
            if (data && data.length) setData(data);
        }
        renderData().then();
    }, []);

    return (
        <div className="flex flex-col gap-2 w-sm text-left h-[250px] overflow-y-scroll p-3">
            <h1>FetchData (fetch API)</h1>
            {
                data?.length == 0 ? (<p>Loading...</p>) :
                data?.map((datum, idx) => (
                    <div key={idx} className="flex justify-between items-start">
                        <p className="w-xs text-wrap">{datum.title}</p>
                        <p>{datum.completed ? "✅" : "❌"}</p>
                    </div>
                ))
            }
        </div>
    )
}
export default FetchData
