import './App.css';
import NavBar from './components/HomePage/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Itineraries from './pages/Itineraries';
import Itinerary from './pages/Itinerary';
import City from './pages/City';
import Accommodation from './pages/Accommodation';

function App() {
  return (
  <>
  <BrowserRouter>
      <NavBar />
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/itineraries' element={<Itineraries />}/>
        <Route path='/itinerary' element={<Itinerary />}/>
        <Route path='/city' element={<City />}></Route>
        <Route path='/accommodation' element={<Accommodation />}></Route>
    </Routes>
  </BrowserRouter>
  </>
  );
}


export default App;
