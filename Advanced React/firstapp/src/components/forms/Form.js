import { useRef, useState } from "react";

function Form (){
    const [name, setName] = useState(""); 

    const handleSubmit = (e) => {
        e.preventDefault();
        setName("");
        console.log("Form submitted!");
    }; //esta funcion se ejecuta cuando apreto el boton submit

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div className="Field">
                        <label htmlFor="name">Name:</label> 
                        <input
                            id="name" //si hago click en el label me focusea el input
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <button disabled={!name} type="submit"> 
                        Submit 
                    </button> 
                </fieldset> 
            </form> 
        </div> //disabled tiene el valor true por defecto, se desactiva si no tiene nombre.
    )
}
export default Form; 