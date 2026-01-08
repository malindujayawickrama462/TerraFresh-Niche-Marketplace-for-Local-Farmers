import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandinPage from './pages/LandinPage';
import Home from './pages/Home';


function App() {
  

  return (
    <BrowserRouter>
     <div className="min-h-screen bg-app">
         <NavBar/>
          <div className="pt-20">
            <Routes>
              <Route path='/' element={<LandinPage/>}/>
              <Route path='/home' element={<Home/>}/>
            </Routes>
          </div>
     </div>
   
    </BrowserRouter>
  );
}

export default App
