
//Eventos onClick y onMouseOver

function Btn(){
    const clickHandler = () => console.log('clicked');

    return(
        <button onClick={clickHandler}>Click me!</button>
    )
}

//export default Btn;

function Btn2(){
    const clickHandler2 = () => console.log('on mouse over');

    return(
        <button onMouseOver={clickHandler2} >Button</button>
    )
}


//Handling events using inline anonymous ES5 functions:
/*
<button onClick={function() {console.log('first example')}}>
    An inline anonymous ES5 function event handler
</button>
note: A​lthough it's possible to write your click handlers using this syntax,
 it's not a common approach and you will not find such code very often in React apps.*/


//using inline anonymous ES6 functions (arrow functions):
<button onClick={() => console.log('second example')}>
    An inline anonymous ES6 function event handler
</button>
//Note:T​his approach is much more common then the previous one. If you want to keep all your logic inside the JSX expression assigned to the onClick attribute, use this syntax.


//using separate function declarations:
function App() {
     function thirdExample() {
        console.log('third example');
    };
    return (
    <div className="thirdExample">
       <button onClick={thirdExample}>
          using a separate function declaration
       </button>
    </div>
    );
};
/*note: T​his syntax makes sense to be used when your onClick logic is too complex to easily fit into
 an anonymous function.  */


 // using separate function expressions:
function App() {
    const fourthExample = () => console.log('fourth example');
    
    return (
       <div className="fourthExample">
           <button onClick={fourthExample}>
               using a separate function expression
           </button>
       </div>
    );
};
/*Note:  A way to determine if a function is defined as an expression or a declaration is: if it does not start 
the line with the keyword function, then it’s an expression.
In the following example, you’re assigning an anonymous ES6 arrow function to 
a const variable – hence, this is a function expression.
You’re then using this const variable’s name to handle the onClick event, so this is an example of handling 
events using a separate function expression. */




