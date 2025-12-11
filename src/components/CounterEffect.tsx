import {useEffect, useState} from "react";
import Btn from "./Btn.tsx";

const CounterEffect = () => {
    const [countCommon, setCountCommon] = useState<number>(0);
    const [countSpecific, setCountSpecific] = useState<number>(0);

    useEffect(() => {
        console.log(`Common Count!!!`)
    });

    useEffect(() => {
        console.log(`Specific Count!!!`)
    }, [countSpecific]);

    return (
        <div className="flex flex-col gap-2">
            <h2>useEffect</h2>
            <Btn onClick={() => setCountCommon(prevState => prevState + 1)}>Non-specific Render Count {countCommon}</Btn>
            <Btn onClick={() => setCountSpecific(prevState => prevState + 1)}>Specific Render Count {countSpecific}</Btn>
        </div>
    )
}
export default CounterEffect
