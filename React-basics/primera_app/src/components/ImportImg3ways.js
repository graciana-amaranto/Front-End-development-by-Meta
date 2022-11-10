import foto1 from "../assets/foto1.jpg";

function ImportImg3Ways(){
    const randomImageUrl = "https://picsum.photos/id/14/367/267"

    return(
        <div>
            <h1> Task: add three images with some styling</h1>
            <img 
                height={200}
                src= {foto1}
                alt="a mountain"
            />

            <img 
                height={200}
                src={require("../assets/foto1.jpg")} //no necesito usar el import
                alt="a mountain"
            />

            <img  
                src={ randomImageUrl }
                height={200}
                alt="the sea"
            />
        </div>
    )
}
export default ImportImg3Ways;