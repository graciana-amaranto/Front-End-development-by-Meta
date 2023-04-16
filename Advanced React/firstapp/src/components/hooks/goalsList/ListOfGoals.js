
function ListOfGoals(props){
    return(
        <ul>
            {props.allGoals.map((g) => ( //recibe un array con la lista de goals creado en App (prop)
                <li key={g.goal}>
                    <span>My goal is to {g.goal}, by {g.by}</span>
                </li> 
            ))}
        </ul>
    );
}
export default ListOfGoals;