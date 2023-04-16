import { useState } from "react";

function GoalForm(props) {
    const [formData, setFormData] = useState({goal: "", by: ""});

    function changeHandler(e){
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    function submitHandler(e) {
        e.preventDefault();
        props.onAdd(formData);  //onAdd es una funcion que recibe un goal y actualiza una lista de goals (array)
        setFormData({goal: "", by: ""});
    };
    return(
        <>
            <h1>My Little Lemon Goals</h1>
            <form onSubmit={submitHandler}>
                <input type="text" name="goal" placeholder="Goal" value={formData.goal} onChange={changeHandler} />
                <input type="text" name="by" placeholder="By..." value={formData.by} onChange={changeHandler} />
                <button>Submit Goal</button>
            </form>
        </>
    );
}
export default GoalForm;