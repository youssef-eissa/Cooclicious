import { Route, Routes } from 'react-router';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import Menu from './components/Menu';
import SingleMeal from './components/SingleMeal';
import Gallery from './components/Gallery';
import Contact from './components/Contact';


function App() {
  return (
    <div className='overflow-hidden position-relative'>
      <Nav />
      <Routes>
        <Route path='/cooclicious/' element={<Home />} />
        <Route path='/cooclicious/about' element={<About />} />
        <Route path='/cooclicious/menu' element={<Menu />} />
        <Route path='/cooclicious/singlemeal' element={<SingleMeal />} />
        <Route path='/cooclicious/Gallery' element={<Gallery />} />
        <Route path='/cooclicious/Contact' element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
