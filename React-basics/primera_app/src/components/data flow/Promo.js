import PromoHeading from "./PromoHeading";

//"Single Source of Truth": pongo la info en el parent, y se la paso a los children para no repetir lo mismo en todos los componentes.
const data = {
    heading: "99% off all items!",
    callToAction: "Everything must go!"
}

function Promo(){
    return(
        <div>
            <PromoHeading 
            heading={data.heading}
            callToAction={data.callToAction} /> 
        </div>
    )
}

export default Promo;