/* 
Expressions as props
*/ 

const bool = false;
const str1 = "just";

function Example(props) {
    return (
        <div>
            <h2>
                The value of the toggleBoolean prop is:{props.toggleBoolean.toString()}
            </h2>
            <p>The value of the math prop is: <em>{props.math}</em></p>
            <p>The value of the str prop is: <em>{props.str}</em></p>
        </div>
    );
};

export default function App() {
    return (
        <div className="App">
            <Example
                toggleBoolean={!bool}     /*usa las variables como props*/ 
                math={(10 + 20) / 3}
                str={str1 + ' another ' + 'string'}
            />
        </div>
    );
};



/* Ternary operators and functions in JSX */

let namee = 'Bob';
if (namee == 'Bob') {
    console.log('Hello, Bob');
} else {
    console.log('Hello, Friend');
};
/*Expresado en operador ternario: */
let name = 'Bob';
name == 'Bob' ? console.log('Hello, Bob') : console.log('Hello, Friend');



/* Using function calls in JSX 

Another way to work with an expression in JSX is to invoke a function. 
Function invocation is an expression because every expression returns a value, 
and function invocation will always return a value, even when 
that return value is undefined.
*/

function Example2() {
    return (
        <div className="heading">
            <h1>Here's a random number from 0 to 10: 
                { Math.floor(Math.random() * 10) + 1 }
            </h1>
        </div>
    );
};
//You can also extract this functionality into a separate function:
function Example3() {

    const getRandomNum = () => Math.floor(Math.random() * 10) + 1

    return (
        <div className="heading">
            <h1>Here's a random number from 0 to 10: { getRandomNum() }</h1>
        </div>
    );
};
/*The getRandomNum() function can also be written as a function declaration, or as a function expression. 
It does not have to be an arrow function. 
*/

//Function expression:
const getRandomNum = function() {
    return Math.floor(Math.random() * 10) + 1
} ;

//Function declaration:
function getRandomNum() {
    return Math.floor(Math.random() *10) + 1
};



/* Styling JSX elements:*/
function Promo(props) {
    return (
        <div className="promo-section">
            <div>
                <h1>{props.heading}</h1>
            </div>
            <div>
                <h2>{props.promoSubHeading}</h2>
            </div>
        </div>
    );
}
/*In CSS:
.promo-section {
    font-weight: bold;
    line-height: 20px;
}*/

//Another way to add CSS styles to components is using inline styles:
function Promo(props) {
    return (
        <div className="promo-section">
            <div>
                <h1 style={{color:"tomato", fontSize:"40px", fontWeight:"bold"}}>
                    {props.heading}
                </h1>
            </div>
            <div>
                <h2>{props.promoSubHeading}</h2>
            </div>
        </div>
    );
}

//Besides inlining a style object literal, you can also save it in a variable, 
//and then use that variable instead of passing an object literal:
function Promo(props) {

    const styles = {
        color: "tomato",
        fontSize: "40px"
    }
    
    return (
            <div className="promo-section">
                <div>
                    <h1 style={styles}>
                        {props.heading}
                    </h1>
                </div>
                <div>
                    <h2>{props.promoSubHeading}</h2>
                </div>
            </div>
        );
    }