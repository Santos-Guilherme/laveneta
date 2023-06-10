import { Link } from 'react-router-dom';

function Header() {
    const activestyle = {
        fontWeight: 'bold',
        color: 'red',
    };

    return (
        <header>
            <div className="logo-container">
                <Link to="/" activestyle={activestyle}>
                    <h1 className='logo-name'>La Veneta</h1>
                    <div className="logo-container">
                        <img src="/images/logo.png" alt="Logo La Veneta" className="logo" />
                    </div>
                </Link>
            </div>
            <Link to="/reservas" className="nav-link" activestyle={activestyle}>
                Reservas
            </Link>
            <Link to="/pedidos" className="nav-link" activestyle={activestyle}>
                Pedidos
            </Link>
            <Link to="/chef" className="nav-link" activestyle={activestyle}>
                Chef
            </Link>
            <Link to="/comanda" className="nav-link" activestyle={activestyle}>
                Comanda
            </Link>

        </header>
    )
}
export default Header;
