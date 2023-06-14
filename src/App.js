import './styles/App.css';
import Header from './components/Header';
import Home from './components/Home';
import Featured from './components/Featured';
import Carousels from './components/Carousels';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Header />
    <Home/>
    <Featured/>
    <Carousels/>
    <Footer/>
    </>
  );
}

export default App;
