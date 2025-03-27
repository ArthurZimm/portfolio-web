import './About.css'
import RiveAbout from '../RiveAbout'

const About = () => {
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
                            <p>Olá, eu sou Arthur Zimmermann de Oliveira, tenho 22 anos e sou desenvolvedor FullStack.
                                Atualmente estou cursando o último ano de Engenharia de Computação na Universidade Federal de Itajubá (UNIFEI).
                                Atualmente estou cursando o último ano de Engenharia de Computação na Universidade Federal de Itajubá (UNIFEI).
                                Atualmente estou cursando o último ano de Engenharia de Computação na Universidade Federal de Itajubá (UNIFEI).
                                Atualmente estou cursando o último ano de Engenharia de Computação na Universidade Federal de Itajubá (UNIFEI).
                                Atualmente estou cursando o último ano de Engenharia de Computação na Universidade Federal de Itajubá (UNIFEI).
                                Atualmente estou cursando o último ano de Engenharia de Computação na Universidade Federal de Itajubá (UNIFEI).
                                Atualmente estou cursando o último ano de Engenharia de Computação na Universidade Federal de Itajubá (UNIFEI).
                                Atualmente estou cursando o último ano de Engenharia de Computação na Universidade Federal de Itajubá (UNIFEI).
                                Atualmente estou cursando o último ano de Engenharia de Computação na Universidade Federal de Itajubá (UNIFEI).
                                Sou apaixonado por tecnologia e sempre busco aprender coisas novas. Tenho experiência com desenvolvimento de software,
                                principalmente em aplicações web. Atualmente estou estudando React e NodeJS, e pretendo me aprofundar mais em desenvolvimento mobile.</p>
                        </div>
                        <RiveAbout />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;