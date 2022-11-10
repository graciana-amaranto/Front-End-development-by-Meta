//Conditional rendering

function CurrentMessage(props){
    //const day = new Date().getDay();
    if(props.day >=1 && props.day <=5){
        return <Workdays />
    }
    return <Weekends />
}

/*Instead of calculating it directly, you could use some historical data instead, 
and perhaps get that data from a user via an input, from a parent component. */

//Conditional rendering with the help of elements variables:
function CurrentMessage2({day}){
    const weekday = (day >= 1 && day <= 5);
    const weekend = (day >= 6 && day <= 7);
    let message;
    
    if (weekday){
        message = <Workdays />
    } else if (weekend){
        message = <Weekends />
    } else {
        message = <ErrorComponent />
    }

    return(
        <div>
            {message}
        </div>
    )
}

//Conditional rendering using the logial AND operator:
function LogicalAndExample(){
    const val = prompt('Anything but a 0')

    return(
        <div>
            <h1>Please dont type in a zero</h1>
            {val && <h2>Yay, no 0 was typed in!</h2>}  
        </div> //inserto una linea de codigo js, si val es true, me muestra el h2
    )
}

//Conditional components
/* Let’s say you have two child components called LoginButton and LogoutButton; 
each displaying their corresponding button.
In the parent component, named LogInOutButton, you can check the props passed into 
the parent component and return a different child component based on the value of the props.
In this example, the props contains a property named isLoggedIn. When this is set to 
true, the LogoutButton component is returned. Otherwise, the LoginButton component is returned.*/

function LogInOutButton(props) {
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <LogoutButton />
    } else {
        return <LogInButton />
    }
}
//Then when the LogInOutButton parent component is used, the prop can be passed in:
//<LogInOutButton isLoggedIn ={false} />