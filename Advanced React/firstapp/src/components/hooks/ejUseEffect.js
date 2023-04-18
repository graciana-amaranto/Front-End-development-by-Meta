import { useEffect, useState } from "react";

//Funciones impuras: algo externo que generan un side effect, puede ser un console.log,
//fetch o geolocation. Cuando llamo uno de estos, la funcion depende de algo externo para funcionar.

function ShoppingCart(props) {
    const total = props.count * props.price;
    //console.log(total); esto me genera un efecto de algo EXTERNO a mi funcion: functiones impuras
    
    useEffect(function() {
        console.log(total);
    }, [])  // useEffect contiene estas acciones impuras, tienen su propia área. 
    //useEffecto recibe dos parametros: una funcion y un array que puede estar vacio.
    useEffect(() => console.log(total), []) //es mas comun usar arrow functions. 
    return <h1>Total: {total}</h1> 
}

function App() {
    return(
        <ShoppingCart items={5} pricePerItem={10} />
    )
}

/* The code you place inside the useEffect hook always runs after your component mounts or, in other words, after React has updated the DOM.
In addition, depending on your configuration via the dependencies array, your effects can also run when certain state variables or props change. 
By default, if no second argument is provided to the useEffect function, the effect will run after every render.
*/

useEffect(() => { 
    document.title = 'Little Lemon';
});  //reneriza siempre porque no tiene segundo parametro.

/* the integer variable version is passed as the second parameter. That means that 
the effect will only be re-run if the version number changes between renders. */
useEffect(() => { 
    document.title = `Little Lemon, ${version}`;
}, [version]); // Only re-run the effect if version changes 

//Use multiple Effects to Separate Concerns

/* React doesn’t limit you in the number of effects your component can have. In fact, it encourages you to 
group related logic together in the same effect and break up unrelated logic into different effects. */

function MenuPage(props){
    const [data, setData] = useState([]);

    useEffect(() => {
        document.title = 'Little Lemon';
    }, []);

    useEffect(() => {
        fetch(`https://littlelemon/menu/${id}`)
            .then(response => response.json())
            .then(json => setData(json));
    }, [props.id]); //si cambia el id, me hace el fetch que me devuelve un json seteado en setData
}

/* Effects with Cleanup
Some side effects may need to clean up resources or memory that is not required anymore, avoiding any memory leaks that could slow down your applications.
For example, you may want to set up a subscription to an external data source. In that scenario, it is vital to perform a cleanup after the effect finishes its execution.
How can you achieve that? In line with the previous point of splitting the code based on what it is doing, the useEffect hook has been designed to keep the code for adding and removing a subscription together, since it’s tightly related. 
If your effect returns a function, React will run it when it’s time to clean up resources and free unused memory. */

function LittleLemonChat(props) {
    const [status, chatStatus] = useState('offline');

    useEffect(() => {
        LemonChat.subscribeToMessages(props.chatId, () => chatStatus('online') )

        return () => {  //retorno una funcion que limpia
            chatStatus('offline');
            LemonChat.unsusbribeFromMessages(props.chatId);
        };
    }, []);
}

