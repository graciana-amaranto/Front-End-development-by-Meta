import { useState} from "react";

function RegisterForm(){
    const [form, setForm] = useState({
        firstName: 'Luke',
        lastName: 'Jones',
        email: 'lukeJones@sculpture.com'
    });
    //Puedo poner el estado de varias cosas en una sola variable, en forma de objeto.

    return (
        <>
            <label>
                First Name:
                <input value={form.firstName} onChange={e => {setForm({...form, firstName: e.target.value})}} />
            </label>
            <label>
                Last Name:
                <input value={form.lastName} onChange={e => {setForm({...form, lastName: e.target.value})}} />
            </label>
            <label>
                Email:
                <input value={form.email} onChange={e => {setForm({...form, email: e.target.value})}} />
            </label>
            <p>
                {form.firstName}{' '}
                {form.lastName}{' '}
                ({form.email})
            </p>
        </>
    );
}
export default RegisterForm;