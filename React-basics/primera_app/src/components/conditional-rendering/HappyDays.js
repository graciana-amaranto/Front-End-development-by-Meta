function HappyDays(){
    const time = new Date();
    const day = time.toLocaleString("en-us", { weekday: 'long'}); //me retorna "Lunes", "Martes"...
    const morning = time.getHours() >= 6 && time.getHours() <= 12;
    let dayMessage;

    if (day.toLowerCase() === 'monday'){
        dayMessage = `Happy ${day} `;
    } else if (day.toLowerCase() === 'tuesday'){
        dayMessage = `${day}, four days to go `;
    } else if (day.toLowerCase === 'wednesday'){
        dayMessage = `${day}, half way there `;
    } else if (day === 'Thursday'){ 
        dayMessage = `${day}, start planning the weekend `;
    } else if (day.toLowerCase === 'friday'){
        dayMessage = `${day}, woo woo, the weekend is coming! `;
    } else {
        dayMessage = "Stay calm and keep having fun";
    }

    return(
        <div>
            <h1> {dayMessage} </h1>
            {morning ? <h2>Have you had breakfast yet?</h2> : ''}
        </div>
    )
}
export default HappyDays;