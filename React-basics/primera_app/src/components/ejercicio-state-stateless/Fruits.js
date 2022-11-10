

/*El ejercicio me pide mover el estado de Fruits a App */

// function Fruits() {
//     const [fruits] = useState([
//         {fruitName: 'apple', id: 1},
//         {fruitName: 'apple', id: 2},
//         {fruitName: 'plum', id: 3}
//     ]);

//     return(
//         <div>
//             {fruits.map(f => <p key={f.id}>{f.fruitName}</p>)}
//         </div>
//     )
// }
// export default Fruits;

//movido el estado a app, el componente me quedaria:
function Fruits(props) {
    return(
        <div>
            {props.fruits.map( f=> <p key={f.id}>{f.fruitName}</p> )}
        </div>
    )
}
export default Fruits;