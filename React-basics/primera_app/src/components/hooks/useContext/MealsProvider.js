import { createContext, useContext, useState} from "react";

const MealsContext = createContext();

const todayMeals = ["Baked Beans", "Baked Sweet Potatoes", "Baked Potatoes"];

const MealsProvider = ({children}) => {
    const [meals, setMealsList] = useState(todayMeals);

    return(
        <MealsContext.Provider value={{meals}} >
            {children} 
        </MealsContext.Provider>  //{children} muestra toda la info de mealslist y counter dentro de MealsProvider
    )
}

export const useMealsListContext = () => useContext(MealsContext); //esto es lo que necesito para usarlo en otros componentes
export default MealsProvider;