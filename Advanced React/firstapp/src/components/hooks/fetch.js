import { useState, useEffect, useReducer } from "react";

export default function App() {
    const [btcData, setData] = useState({});
    useEffect(() => {
        fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
            .then((response) => response.json())
            .then((jsonData) => setBtcData(jsonData.bpi.USD))
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <h1>Current BTC/USD data</h1>
            <p>Code: {btcData.code}</p>
            <p>Symbol: {btcData.symbol}</p>
            <p>Rate: {btcData.rate}</p>
            <p>Description: {btcData.description}</p>
            <p>Rate Float: {btcData.rate_float}</p>
        </>
    );
}
//otra forma mas clara y organizada:
export default function App2() {
    const [btcData2, setBtcData] = useState({});

    const fetchData = () => {
        fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
            .then((response) => response.json())
            .then((jsonData) => setBtcData(jsonData.bpi.USD))
            .catch((error) => console.log(error));
    };

    //crea una funcion donde hace fetch, y la llama dentro de useEffect
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <h1>Current BTC/USD data</h1>
            <p>Code: {btcData.code}</p>
            <p>Symbol: {btcData.symbol}</p>
            <p>Rate: {btcData.rate}</p>
            <p>Description: {btcData.description}</p>
            <p>Rate Float: {btcData.rate_float}</p>
        </>
    );
}

//puedo hacer dos renders dependiendo del estado del fetch

return someStateVariable.length > 0 ? (
    <div>
        <h1>Data returned: </h1>
        <h2>{someStateVariable.results[0].price}</h2>
    </div>
) : (
    <h1>Data pending...</h1>
); //si es mayor que cero, trae la data, sino queda en data pending... hasta que length > 0