function Bag(props){
    const bag = {
        padding: "20px",
        border: "1px solid gray",
        background: "#fff",
        margin: "20px 0"
    }

    return (
        <div style={bag}>
            {props.children}  {/*Muestra el contenido de todos
                                los children dentro de <Bag />, en App.js*/}
        </div>
    )
};

export default Bag;