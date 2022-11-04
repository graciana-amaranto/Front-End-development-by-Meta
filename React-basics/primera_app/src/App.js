import './App.css';
import Nav from './components/Nav';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Promo from './components/Promo';
import Footer from './components/Footer';
import Bag from './components/children_ejemplo/Bag';
import Apples from './components/children_ejemplo/Apples';
import Pears from './components/children_ejemplo/Pears';
import Logo from './components/Logo';



function App() {
  return (
    <div className="App">
      <Nav />
      <Promo />
      <Intro1 firstName="Greetings!"/>
      <Intro2 />
      <Intro3 />
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
