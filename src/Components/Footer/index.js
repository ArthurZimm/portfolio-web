import './Footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>Desenvolvido por Arthur Zimmermann de Oliveira</p>
                <div className="social-links">
                    <a href="https://github.com/ArthurZimm" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/arthur-zimmermann-de-oliveira/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <MdEmail />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
