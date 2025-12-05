interface IPersonProp {
    name: string;
    age: string;
}

const Person = ({name, age}: IPersonProp) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>{age} years old</p>
        </div>
    )
}

export default Person;