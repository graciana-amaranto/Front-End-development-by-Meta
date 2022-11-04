import './App.css';
import Nav from './components/Nav';
import Intro1 from './components/Intro1';
import Footer from './components/Footer';
import Bag from './components/children_ejemplo/Bag';
import Apples from './components/children_ejemplo/Apples';
import Pears from './components/children_ejemplo/Pears';
import Logo from './components/Logo';
import ModeToggler from './components/ModeToggler';
import NumberGuessing from './components/NumberGuessing';
import Promo from './components/data flow/Promo';
import RegisterForm from './components/hooks/RegisterForm';
import TextInputWithFocusButton from './components/hooks/TextInputWithFocusButton';



function App() {
  return (
    <div className="App">
      <Nav />
      <Promo />
      <Intro1 firstName="Greetings!"/>
      <NumberGuessing />
      <RegisterForm />
      <TextInputWithFocusButton />
      <ModeToggler />
      <Bag>
        <Apples color="yellow" number="5" />
        <Pears friend="Peter" />
      </Bag>
      <Logo />
      <Footer />
    </div>
  );
}

export default App;
