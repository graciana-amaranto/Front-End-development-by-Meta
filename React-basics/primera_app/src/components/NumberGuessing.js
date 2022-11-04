function NumberGuessing(){
    function handleClick(){
        let randomNum = Math.floor(Math.random() * 3) + 1;
        console.log(randomNum);
        let userInput = prompt('type a number:');
        alert(`Computer number: ${randomNum}, your guess: ${userInput}`);
    }

    return(
        <div>
            <h1>Task: Add a button and handle a click event</h1>
            <button onClick={handleClick}>Guess!</button>
        </div>
    )
}

export default NumberGuessing;