import { useState } from 'react';
import './App.css';

import Intro1 from './components/Intro1';
import Footer from './components/Footer';
import Bag from './components/children_ejemplo/Bag';
import Apples from './components/children_ejemplo/Apples';
import Pears from './components/children_ejemplo/Pears';
import ModeToggler from './components/ModeToggler';
import NumberGuessing from './components/NumberGuessing';
import Promo from './components/data flow/Promo';
import RegisterForm from './components/hooks/useState/RegisterForm';
import TextInputWithFocusButton from './components/hooks/TextInputWithFocusButton';
import MealsProvider from './components/hooks/useContext/MealsProvider';
import MealsList from './components/hooks/useContext/MealsList';
import Counter from './components/hooks/useContext/Counter';
import Wallet from './components/hooks/Wallet';
import Fruits from './components/ejercicio-state-stateless/Fruits';
import FruitsCounter from './components/ejercicio-state-stateless/FruitsCounter';
import Navbar from './components/navbar/Navbar';
import HappyDays from './components/conditional-rendering/HappyDays';
import ImportImg3Ways from './components/ImportImg3ways';
import MyVideo from './components/MyVideo';
import MyAudio from './components/MyAudio';



function App() {

  const [fruits] = useState([
    {fruitName: 'apple', id: '1'},
    {fruitName: 'apple', id: '2'},
    {fruitName: 'plum', id:'3'}
    ])

  return (
    <div className="App">
      <Navbar />
      <Intro1 firstName="Greetings!"/>
      <HappyDays />
      <Promo />
      <NumberGuessing />
      <RegisterForm />
      <TextInputWithFocusButton />
      <ModeToggler />
      <ImportImg3Ways />
      <MyVideo />
      <MyAudio />
      <MealsProvider>
        <MealsList />
        <Counter />
      </MealsProvider>
      <h1>Where should the state go?</h1>
      <Fruits fruits={fruits} />
      <FruitsCounter fruits={fruits} />
      <Wallet />
      <Bag>
        <Apples color="yellow" number="5" />
        <Pears friend="Peter" />
      </Bag>
      <Footer />
    </div>
  );
}

export default App;
