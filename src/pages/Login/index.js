import React, { useState, useEffect } from 'react';

function Header() {
    const activestyle = {
        fontWeight: 'bold',
        color: 'red',
    };

    return (
        <header>
            <div className="logo-container">
                    <h1 className='logo-name'>La Veneta</h1>
                    <div className="logo-container">
                        <img src="/images/logo.png" alt="Logo La Veneta" className="logo" />
                    </div>
            </div>
        </header>
    )
}
function LoginForm() {
        const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleLogin = async (event) => {
      event.preventDefault();
  
      try {
        const response = await fetch('http://localhost:3333/session', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
  
        const data = await response.json();
        if (data.success) {
          // Login válido
          console.log(data.user.name);
        } else {
          // Login inválido
          setLoginError(data.message);
        }
      } catch (error) {
        console.error('Ocorreu um erro ao fazer login:', error);
      }
    };
  
    return (
      <div>
        <h2>Login</h2>
        {loginError && <p>{loginError}</p>}
        <form onSubmit={handleLogin}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div>
            <label>Senha:</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  };
  
function Login() {
    return (
    <div>
        <Header/>
        <LoginForm/>
    </div>
    );
}
export default Login;