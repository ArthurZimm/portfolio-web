import RiveLanguage from '../RiveLanguage';
import './Language.css';


const Language = () => {
    return (
        <section className='section-language'>
            <div className='language-title'>
                <h1 id='language-title'>Linguagens</h1>
                <hr id='hr-language' />
            </div>
            <div className='container-language'>
                <div className='language-content'>
                    <div className='language-text-img'>
                        <div className='language-img'>
                            <RiveLanguage />
                        </div>
                        <div className='language-text'>
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
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Language;