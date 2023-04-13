import { useRef, useState } from "react";

//Uncontrolled inputs

const Form = () => {
    return (
        <div>
            <input type="text" />
        </div>
    );
};

//They remember exactly what you typed, being the DOM itself that maintains that internal
// state. How can you then get their value? The answer is by using a React ref.

//In the code below, you can see how a ref is used to access the value of the input 
//whenever the form is submitted.

const Form2 = () => {
    const inputRef = useRef(null);

    const handleSubmit = () => {
        const inputValue = inputRef.current.value;
        //do something with the value
    }
    return (
        <form onSubmit={handleSubmit}>
            <input ref={inputRef} type="text" />
        </form>
    );
};
//In other words, you must pull the value from the field when needed.


//Controlled Input
/*
Controlled inputs accept their current value as a prop and a callback to change that
 value. That implies that the value of the input has to live in the React state 
 somewhere. Typically, the component that renders the input (like a form component)
  saves that in its state:

*/

const Form3 = () =>{
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value)
    }
    return(
        <form>
            <input
                value={value}
                onChange={handleChange} //cada vez que escribo la funcion handleChange se ejecuta, recibe el nuevo valor y lo pone en state. 
                type="text" 
            />
        </form>
    )
}
//Every time you type a new character, the handleChange function is executed. 
//It receives the new value of the input, and then it sets it in the state.
/*
This flow pushes the value changes to the form component instead of pulling like the
 ref example from the uncontrolled version. Therefore, the Form component always has 
 the input's current value without needing to ask for it explicitly.

As a result, your data (React state) and UI (input tags) are always in sync.
*/



//the file input type

//es un uncontrolled component porque su valor es de solo lectura. 
const Form4 = () => {
    const fileInput = useRef(null);

    const handleSubmit = (e) =>{
        e.preventDefault();
        const files = fileInput.current.files;
        //do something with the files here
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                ref={fileInput}
                type="file"
            />
        </form>
    );
};