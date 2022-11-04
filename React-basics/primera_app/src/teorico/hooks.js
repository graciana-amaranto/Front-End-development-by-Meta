/*Import of the useState */
import {useState} from "react";

/*declarar una state variable:
const [state, setState] = useState(initialState);

const [showMenu, setShowMenu] = useState(false);
//useState setea el valor inicial de showMenu como falso*/

//ejemplo1:
function LittleLemon() {
    const [word, setWord] = useState("Eat");

    function handleClick(){
        setWord("Drink")
    }

    return(
        <>
            <Heading message={word + "at Little Lemon"} /> 
            <button onClick={handleClick}>Click here</button>
        </>
    )  //al principio dice Eat at Little Lemon. 
    //Cuando apreto el boton, setea el Eat a "Drink", por el evento.
}


//ejemplo2:

function InputComponent(){
    const [inputText, setText] = useState('hello');

    function handleChange(e){
        setText(e.target.value);
    }

    return (
        <>
            <input value={inputText} onChange={handleChange} /> 
            <p>You typed: {inputText}</p>
            <button onClick={() => setText('hello again')}>Reset </button>
        </>
    )
};

/*El input arranca diciendo 'hello' como primera vez. Si empiezo a escribir
me llama la funcion handleChange que setea el texto con lo que estoy escribiendo.
Si hago click en el boton, se borra lo que escribi y se setea el texto a 'hello again' */

/*Hooks also come with a set of rules, that you need to follow while using them. 
This applies to all React hooks, including the useState hook that you just learned:

You can only call hooks at the top level of your component or your own hooks. 
You cannot call hooks inside loops or conditions. 
You can only call hooks from React functions, and not regular JavaScript functions.  */