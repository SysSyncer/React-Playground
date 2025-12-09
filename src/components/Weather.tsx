const Weather = ({temperature} : {temperature: number}) => {
    return (
        <div>
            {
                temperature < 15 ? (<p>It's cold outside!</p>) :
                    temperature >= 15 && temperature <= 25 ? (<p>It's nice outside!</p>) :
                        (<p>It's hot outside!</p>)
            }
        </div>
    )
}
export default Weather;