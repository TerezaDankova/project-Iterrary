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
import Itinerary2 from './pages/Itinerary2';
import Itinerary3 from './pages/Itinerary3';
import Itinerary4 from './pages/Itinerary4';
import Itinerary5 from './pages/Itinerary5';
import Itinerary6 from './pages/Itinerary6';
import Itinerary7 from './pages/Itinerary7';
import Itinerary8 from './pages/Itinerary8';
import Footer from './components/HomePage/Footer';


function App() {
  return (
  <>
  <BrowserRouter>
      <NavBar />
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/itineraries' element={<Itineraries />}/>
        <Route path='/itinerary1' element={<Itinerary1 />}/>
        <Route path='/itinerary2' element={<Itinerary2 />}/>
        <Route path='/itinerary3' element={<Itinerary3 />}/>
        <Route path='/itinerary4' element={<Itinerary4 />}/>
        <Route path='/itinerary5' element={<Itinerary5 />}/>
        <Route path='/itinerary6' element={<Itinerary6 />}/>
        <Route path='/itinerary7' element={<Itinerary7 />}/>
        <Route path='/itinerary8' element={<Itinerary8 />}/>
        <Route path='/city' element={<City />}></Route>
        <Route path='/accommodation' element={<Accommodation />}></Route>
        <Route path='/accommodationPage' element={<AccommodationPage/>}></Route>
        <Route path='/tripAdvisor' element={<TripAdvisor />}></Route>
    </Routes>
      <Footer />
  </BrowserRouter>
  </>
  );
}


export default App;
