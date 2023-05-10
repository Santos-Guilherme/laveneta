import "./style.css";
import "./fonts.css";

import { BrowserRouter, Routes, Route }
    from 'react-router-dom';
import Home from './pages/Home';
import Chef from './pages/Chef';
import Header from './components/Header';
import Footer from './components/Footer'
import Pedidos from './pages/Pedidos';
import Reservas from './pages/Reservas';
import Erro from './pages/Erro';

function RouterApp() {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/chef" element={<Chef />} />
                <Route path="/pedidos" element={<Pedidos />} />
                <Route path="/reservas" element={<Reservas />} />

                <Route path='*' element={<Erro />} />
            </Routes>
        <Footer/>
        </BrowserRouter>
    )
}
export default RouterApp;
