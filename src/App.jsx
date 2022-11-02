import './App.css';
import NavBar from './components/HomePage/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Itineraries from './pages/Itineraries';
import Itinerary1 from './pages/Itinerary1';
import City from './pages/City';
import Accommodation from './pages/Accommodations';
import AccommodationPage from './pages/AccommodationPage';
import TripAdvisor from './pages/TripAdvisor';

function App() {
  return (
  <>
  <BrowserRouter>
      <NavBar />
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/itineraries' element={<Itineraries />}/>
        <Route path='/itinerary1' element={<Itinerary1 />}/>
        <Route path='/city' element={<City />}></Route>
        <Route path='/accommodation' element={<Accommodation />}></Route>
        <Route path='/accommodationPage' element={<AccommodationPage/>}></Route>
        <Route path='/tripAdvisor' element={<TripAdvisor />}></Route>
    </Routes>
  </BrowserRouter>
  </>
  );
}


export default App;
