import { useRef } from "react";

//uso del useRef hook: se usa para acceder al child directamente.
//Cuando se invoca en useRef, retorna un objeto "ref". este objeto tiene una propiedad llamada "current"

function TextInputWithFocusButton(){
    const inputEl = useRef(null);
    const onButtonClick = () => {
        // `current` points to the mounted text input element
        console.log(inputEl.current.focus());
    };
    return(
        <>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Focus the input</button>
        </>
    );
}
export default TextInputWithFocusButton;

/*
Using the ref attribute on the input element, I can then access the current value and invoke the focus() method on it,
thereby focusing the input field.
T​here are situations where accessing the DOM directly is needed, and this is where the useRef hook comes into play.
*/