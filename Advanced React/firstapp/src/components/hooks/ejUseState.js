import {useState} from "react";

//An example of holding state and updating it based on user-generated events
function Ejemplo() {
    const [restaurantName, setRestaurantName] = useState("Lemon");

    function updateRestaurantName() {
        setRestaurantName("Little Lemon");
    };
    return(
        <div>
            <h1>{restaurantName}</h1>
            <button onClick={updateRestaurantName}>
                Update restaurant name
            </button>
        </div>
    )
};
//restaurantName empieza llamandose Lemon
//cuando clickeo en el boton, se llama a la funcion updaterestaurant donde le cambio el nombre a Little Lemon.

//An example of holding state IN AN OBJECT and updating it based on user-generated events
/*
The suggested approach for updating the state object in React when using useState is 
to copy the state object and then update the copy.
This usually involves using the spread operator (...).
*/

function EjemploObjeto() {
    const [greeting, setGreeting] = useState({greet: "Hello world"}); //objeto

    function updateGreeting() {
        const newGreeting = {...greeting} //copio el estado del objeto
        newGreeting.greet = "Hello world wide web";
        setGreeting(newGreeting); //seteo el nuevo estado usando la variable con la copia. 
    }
    return(
        <div>
            <h1>{greeting.greet}</h1>
            <button onClick={updateGreeting}>
                Update greeting
            </button>
        </div>
    )

   /*  MAL: tira error porque greeting es una constante
        function updateGreeting() { 
        greeting = {greet: "Hello, World-Wide Web}; 
        setGreeting(greeting); 
      }  */

      /*  MAL: no tira error pero no actualiza greet
      function updateGreeting() { 
        greeting.greet = "Hello, World-Wide Web; 
        setGreeting(greeting); 
      }  */
}

//Updating the state object using arrow functions
function EjemploArrowFunction() {
    const [greeting, setGreeting] = useState(
        {
            greet: "Hello",
            place: "World"
        }
    );

    function updateGreeting() {
        setGreeting(prevState => {
            return {...prevState, place: "World wide web"}
        }) //llama a todo lo que contiene el estado en "prevState" y actualiza solo place
    }
    return(
        <div>
            <h1>{greeting.greet}, {greeting.place}</h1>
            <button onClick={updateGreeting}>Update greeting</button>
        </div>
    )
}


