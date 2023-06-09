import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h2>Header</h2>
            <div>
                <Link to="/">Home</Link>
                <Link to="/chef">Chef</Link>
                <Link to="/pedidos">Pedidos</Link>
                <Link to="/reservas">Reservas</Link>
            </div>
        </header>
    )
}
export default Header;
