import { Link } from 'react-router-dom';

function Header() {
    const activeStyle = {
        fontWeight: 'bold',
        color: 'red',
    };

    return (
        <header>
            <h1 className='logo-name'>La Veneta</h1>
            <div className="logo-container">
                <img src="/images/logo.png" alt="Logo La Veneta" className="logo" />
            </div>
                    <Link exact to="/" className="nav-link" activeStyle={activeStyle}>
                        Home
                    </Link>
                    <Link to="/chef" className="nav-link" activeStyle={activeStyle}>
                        Chef
                    </Link>
                    <Link to="/pedidos" className="nav-link" activeStyle={activeStyle}>
                        Pedidos
                    </Link>
                    <Link to="/reservas" className="nav-link" activeStyle={activeStyle}>
                        Reservas
                    </Link>
        </header>
    )
}
export default Header;
