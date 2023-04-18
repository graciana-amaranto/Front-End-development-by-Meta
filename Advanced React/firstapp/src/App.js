import { useState } from "react";
import "./App.css";
import DessertsList from "./components/DessertsList";
import FeedbackForm from "./components/forms/FeedbackForm";
import Form from "./components/forms/Form";
import RegistrationForm from "./components/forms/registrationform/RegistrationForm";
import Switch from "./components/SwitchTheme";
import { ThemeProvider, useTheme} from "./components/ThemeContext";
import GoalForm from "./components/hooks/goalsList/GoalForm";
import ListOfGoals from "./components/hooks/goalsList/ListOfGoals";
import GiftCard from "./components/hooks/giftcard/GiftCard";
import WelcomeMessage from "./components/hooks/WelcomeMessage";

const DessertStyle = ({children}) => {
  const {theme} = useTheme();
  return (
    <h2
      style={{
      color: theme === "light" ? "black" : "white"
    }}
    >
      {children}
    </h2>
  );
};

const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

//Ejercicio create a light-dark theme switcher
const Title = ({children}) => {
  const {theme} = useTheme();
  return(
    <h2
      style={{
        color: theme === "light" ? "black" : "white"
      }}
    >
      {children}
    </h2>
  );
};

const Paragraph = ({children}) => {
  const {theme} = useTheme();
  return(
    <p
      style={{
        color: theme === "light" ? "black" : "white",
        borderColor: "red"
      }}
    >
      {children}
    </p>
  );
};

const Content = () => {
  return(
    <div>
      <Paragraph> 
        We are a pizza loving family. And for years, I searched and searched and
        searched for the perfect pizza dough recipe. I tried dozens, or more.
        And while some were good, none of them were that recipe that would
        make me stop trying all of the others.
      </Paragraph>
    </div>
  ); //no le agrego theme a componentes especificos, sino que lo hago en cada seccion default }(paragraph)
};

const Header = () => {
  return(
    <header>
      <Title>Little Lemon 🍕</Title>
      <Switch />
    </header>
  );
};

const Page = () => {
  return(
    <div className="Page">
      <Title>When it comes to dough</Title>
      <Content />
    </div>
  );
};

//<DessertsList data={desserts} />
function App() {   //primero uso map, y dentro pongo lo que quiero mostrar de la lista
  const listItems = desserts.map(dessert => {
    const itemText = `${dessert.name} - ${dessert.createdAt}`
    return <li>{itemText}</li>
  });

  const {theme} = useTheme();

  const [allGoals, updateAllGoals] = useState([]);
  function addGoal(goal) {updateAllGoals([...allGoals, goal]); }

  return (
    <div className="App" style={{backgroundColor: theme === "light" ? "white" : "black"}}>
      <Header />
      <WelcomeMessage />
      <Page />
      <DessertStyle>
        <h2>List of all desserts and created dates:</h2>
        {listItems}
      </DessertStyle>
       <h2>List of low calorie desserts:</h2> 
      <DessertsList data={desserts}/> 
      <GoalForm onAdd={addGoal} />
      <ListOfGoals allGoals={allGoals} />
      <GiftCard style={Paragraph}/>
      <Form />
      <FeedbackForm />
      <RegistrationForm />
    </div>
  ); //DessertsList no apica el theme porque no está dentro del componente que contiene el themeContext 
};

function Root(){
  return(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

export default Root;
