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
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/singlemeal' element={<SingleMeal />} />
        <Route path='/Gallery' element={<Gallery />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
