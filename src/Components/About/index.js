import './About.css'
import RiveAbout from '../RiveAbout'

const About = () => {
    const year = new Date().getFullYear() - 2002;
    return (
        <section>
            <div className='about-title'>
                <h1 id='about-title'>Sobre</h1>
                <hr id='hr-about' />
            </div>
            <div className='container-about'>
                <div className='about-content'>
                    <div className='about-text-img'>
                        <div className='about-text'>
                            <p>Olá, eu sou <span>Arthur Zimmermann de Oliveira</span>, tenho {year} anos e trabalho como Desenvolvedor.
                                Sou Bacharel em Sistemas de Informação e atualmente estou cursando pós graduação de <strong>Arquitetura de Sistemas .NET com Azure</strong> na
                                <strong> FIAP</strong>.
                                <br />
                            </p>
                        </div>
                        <RiveAbout />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;