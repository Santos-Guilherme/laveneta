import {Link} from 'react-router-dom';
import React, { useState } from 'react';


function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        if (username === props.user && password === props.password) {
            setLoggedIn(true);
        }
        else {
            setLoggedIn(false);
        }
    }

    return (
        <header>
            <div id="login">
                <form className="card">
                    <div className="card-content">
                        <div className="card-content-area">
                            <label htmlFor="usuario">Usuário</label>
                            <input type="text" id="usuario" autoComplete="off" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="card-content-area">
                            <label htmlFor="password">Senha</label>
                            <input type="password" id="password" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className="card-footer">
                        <input type="button" value="Login" className="submit" onClick={handleLogin} />
                        {loggedIn && <Link to="/">Home</Link>}
                    </div>
                </form>
            </div>
        </header>
    );
}

export default Login;
