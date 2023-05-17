import { Link } from 'react-router-dom';

function Header() {
    const activeStyle = {
        fontWeight: 'bold',
        color: 'red',
    };

    return (
        <header>
            <div className="logo-container">
                <Link exact to="/" activeStyle={activeStyle}>
                    <h1 className='logo-name'>La Veneta</h1>
                    <div className="logo-container">
                        <img src="/images/logo.png" alt="Logo La Veneta" className="logo" />
                    </div>
                </Link>
            </div>
            <Link to="/reservas" className="nav-link" activeStyle={activeStyle}>
                Reservas
            </Link>
            <Link to="/pedidos" className="nav-link" activeStyle={activeStyle}>
                Pedidos
            </Link>
            <Link to="/chef" className="nav-link" activeStyle={activeStyle}>
                Chef
            </Link>
            <Link to="/comanda" className="nav-link" activeStyle={activeStyle}>
                Comanda
            </Link>

        </header>
    )
}
export default Header;
