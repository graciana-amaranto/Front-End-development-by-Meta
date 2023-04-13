import "./App.css";
import DessertsList from "./components/DessertsList";
import FeedbackForm from "./components/forms/FeedbackForm";
import Form from "./components/forms/Form";
import RegistrationForm from "./components/forms/registrationform/RegistrationForm";

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

//<DessertsList data={desserts} />
function App() {   //primero uso map, y dentro pongo lo que quiero mostrar de la lista
  const listItems = desserts.map(dessert => {
    const itemText = `${dessert.name} - ${dessert.createdAt}`
    return <li>{itemText}</li>
  })

  return (
    <div className="App">
      <h2>List of all desserts and created dates:</h2>
      {listItems}
      <h2>List of low calorie desserts:</h2>
      <DessertsList data={desserts}/>
      <Form />
      <FeedbackForm />
      <RegistrationForm />
    </div>
  );
}

export default App;
