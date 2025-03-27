import NavMenu from '../NavMenu';
import './Header.css';

const Header = () => {
    return (
        <header>
            <NavMenu />
            <div className='container'>
                <div className='header-content'>
                    <div className='header-text'>
                        <span className='small-text'>Olá, eu sou</span>
                        <h1 className='header-title'>Arthur Zimmermann de Oliveira</h1>
                        <h2>Desenvolvedor FullStack</h2>
                    </div>
                    <div className='logo-rede-social'>
                        <img className='img-rede-social' src='/imagens/linkedin.png' />
                        <img className='img-rede-social' src='/imagens/instagram.png' />
                        <img className='img-rede-social' src='/imagens/github.png' />
                        <img className='img-rede-social' src='/imagens/gmail.png' />
                    </div>
                </div>
                <img className='img-profile' src='/imagens/FotoGitHub.jpeg' />
            </div>
        </header>
    );
}
export default Header;  