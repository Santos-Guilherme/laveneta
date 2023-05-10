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
                        {loggedIn && <p>Seja Bem-vindo {props.user}!</p>}
                    </div>
                </form>
            </div>
        </header>
    );
}

function SliderDestaque() {

    return (
        <div className="slider-destaque">
            <img src="/images/imagem-slide1.jpg" alt="La Veneta" className="Pizza" />
            <img src="/images/imagem-slide2.jpg" alt="La Veneta" className="logo" />
            <img src="/images/imagem-slide3.jpg" alt="La Veneta" className="logo" />
            <img src="/images/imagem-slide4.jpg" alt="La Veneta" className="logo" />
        </div>
    );
}

function SobreNos() {
    return (
        <section className="container-sobre">
            <div className="container">
                <div className="imagem">
                    <img src="images/imagem-sobre.jpg" alt="Imagem sobre nós" />
                </div>
                <div className="texto">
                    <h2>Sobre Nós</h2>
                    <p>
                        Bem-vindo à Pizzaria La Veneta! Nossa história começa há mais de 20 anos, quando nosso fundador,
                        Alessio, trouxe para o Brasil sua paixão pela culinária italiana. Com dedicação, amor pela comida
                        e um toque de tradição, Alessio abriu as portas da Pizzaria La Veneta com o objetivo de oferecer
                        aos nossos clientes uma experiência única e deliciosa.
                    </p>
                    <p>
                        Nossas pizzas são feitas à mão com receitas tradicionais italianas usando ingredientes selecionados
                        na hora. Além da pizza, oferecemos também uma variedade de pratos clássicos italianos como massas frescas,
                        aperitivos, saladas e sobremesas, todos preparados com a mesma paixão e atenção aos detalhes.
                    </p>
                    <p>
                        Na Pizzaria La Veneta, acreditamos que a comida é uma forma de amor e queremos compartilhar essa paixão
                        com você. Nossa equipe dedicada trabalha incansavelmente para oferecer um serviço excelente e uma experiência
                        gastronômica inesquecível a todos.
                    </p>
                </div>
            </div>

        </section>
    );
}
function Contato() {
    return (
        <section>
            <div className="container">
            </div>
            <div className="texto">
                <p>
                    E-mail: contato@lapizzarialaveneta.com
                </p>
                <p>
                    Telefone: +55 (11) 98765-4321
                </p>
                <p>
                    Endereço: Rua da Pizzaria, 123, Bairro Central, São Paulo - SP, CEP 01234-567
                </p>
            </div>
        </section>
    );
}



function RedesSociais() {
    return (
        <section>
            <h1>Redes Sociais</h1>
            <div className="social-media-icons">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <img src="images/facebook.png" alt="Facebook" className="social-media-icon" />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <img src="images/instagram-logo.png" alt="Instagram" className="social-media-icon" />
                </a>
                <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                    <img src="images/twitter-logo.png" alt="Twitter" className="social-media-icon" />
                </a>
            </div>
        </section>
    );
}
function Home() {
    return (
        <div>
            <Login user={"Gabriel"} password={"1234"} />
            <SliderDestaque />
            <SobreNos />
            <Contato />
            <RedesSociais />
        </div>
    );
}

export default Home;