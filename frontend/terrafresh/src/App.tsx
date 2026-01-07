import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';


function App() {
  

  return (
    <BrowserRouter>
    <NavBar/>
    <LandingPage/>
    </BrowserRouter>
  );
}

export default App
