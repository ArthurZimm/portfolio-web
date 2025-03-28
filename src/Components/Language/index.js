import RiveLanguage from '../RiveLanguage';
import './Language.css';


const Language = () => {
    return (
        <section className='section-language'>
            <div className='language-title'>
                <h1 id='language-title'>Ferramentas e Tecnologias</h1>
                <hr id='hr-language' />
            </div>
            <div className='container-language'>
                <div className='language-content'>
                    <div className='language-text-img'>
                        <div className='language-img'>
                            <RiveLanguage />
                        </div>
                        <div className='language-text'>
                            <div className='language-text-technologies'>
                                <span><img className='img-technologies' src='./imagens/CS.svg' /></span>
                                <span><img className='img-technologies' src='./imagens/DotNet.svg' /></span>
                                <span><img className='img-technologies' src='./imagens/Angular-Dark.svg' /></span>
                                <span><img className='img-technologies' src='./imagens/React-Dark.svg' /></span>
                                <span><img className='img-technologies' src='./imagens/Bootstrap.svg' /></span>
                                <span><img className='img-technologies' src='./imagens/TypeScript.svg' /></span>
                                <span><img className='img-technologies' src='./imagens/HTML.svg' /></span>
                                <span><img className='img-technologies' src='./imagens/CSS.svg' /></span>
                                <span><img className='img-technologies' src='./imagens/JavaScript.svg' /></span>
                                <span><img className='img-technologies' src='./imagens/PostgreSQL-Dark.svg' /></span>
                                <span><img className='img-technologies' src='./imagens/MySQL-Dark.svg' /></span>
                                <span><img className='img-technologies' src='./imagens/SQLite.svg' /></span>
                                <span><img className='img-technologies' src='./imagens/MongoDB.svg' /></span>
                                <span><img className='img-technologies' id='img-correct-size' src='./imagens/oracle.png' /></span>
                                <span><img className='img-technologies' src='./imagens/Git.svg' /></span>
                                <span><img className='img-technologies' src='./imagens/Docker.svg' /></span>
                                <span><img className='img-technologies' id='img-correct-size' src='./imagens/cleanarchitecture.png' /></span>
                                <span><img className='img-technologies' id='img-correct-size' src='./imagens/solid.png' /></span>
                                <span><img className='img-technologies' src='./imagens/ddd.png' /></span>
                                <span><img className='img-technologies' id='img-correct-size' src='./imagens/tdd.jpg' /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Language;