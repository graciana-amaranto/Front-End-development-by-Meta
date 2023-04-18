import { useEffect, useState } from "react";

function WelcomeMessage() {
    const [toggle, setToggle] = useState(false);

    const clickHandler = () => {
        setToggle(!toggle);
    }

    useEffect(() => {
        document.title = toggle ? "Welcome to little lemon" : "Using the useEffect hook"; //esto se muestra en la PESTAÑA del browser
    }, [toggle]);

    return(
        <div>
            <h1>Using the useEffect hook</h1>
            <button onClick={clickHandler}>
                Toggle message
            </button>
            {toggle && <h2>Welcome to little lemon</h2>}
        </div>
    );
}
export default WelcomeMessage;