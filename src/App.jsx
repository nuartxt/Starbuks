import './App.css';
import Main from './pages/main/Main';
import Header from './components/header/Header';
import Menu from './pages/menu/Menu';
import Delivery from './pages/delivery/Delivery';
import LoyalProg from './pages/loyal-program/LoyalProg';
import Regions from './pages/regions/Regions';
import Official from './pages/official-state/Official';
import Auth from './components/auth/Auth';
import AuthDetails from './components/auth/AuthDetails';
import OurDrinks from './pages/our-drinks/OurDrinks';
import OurFoods from './pages/our-foods/OurFoods';
import Dishes from './pages/dishes/Dishes';
import CoffeeBeans from './pages/coffee_beans/CoffeeBeans';
import Map from './pages/map/Map';
import History from './pages/history/History';
import LoyalProgram from './pages/loyal-program-main/LoyalProgram';



import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <>
      <BrowserRouter>

        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/loyal-program" element={<LoyalProg />} />
          <Route path="/regions" element={<Regions />} />
          <Route path="/official-state" element={<Official />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/auth" element={<AuthDetails />} />
          <Route path="/our-drinks" element={<OurDrinks />} />
          <Route path="/our-foods" element={<OurFoods />} />
          <Route path="/dishes" element={<Dishes />} />
          <Route path="/coffee_beans" element={<CoffeeBeans />} />
          <Route path="/map" element={<Map />} />
          <Route path="/history" element={<History />} />
          <Route path="/loyal-program-main" element={<LoyalProgram />} />
        </Routes>
        {/* <Basket /> */}

      </BrowserRouter>
    </>
  )
}

export default App
