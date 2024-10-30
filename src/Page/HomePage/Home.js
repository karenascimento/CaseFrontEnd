import React, { useEffect } from "react"; // Importando useEffect
import camaleao from '../../Images/camaleao.png'; // Caminho corrigido
import './Home.css'; // Caminho para o CSS permanece o mesmo
import '@fortawesome/fontawesome-svg-core/styles.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuse } from '@fortawesome/free-brands-svg-icons';

function Home() {
    useEffect(() => {
        console.log("O componente Home foi renderizado!");
    }, []);

    return (
        <div className="bank-page">
            <header className="header">
                <FontAwesomeIcon icon={faSuse} className="icon" size="lg"/>
                <h1>ituberBank</h1>
            </header>

            <div className="content">
                <div className="text-container">
                    <div className="boxTitle">
                        <h2 className="titulo1">Invista no seu futuro hoje!</h2>
                    </div>
                    <div className="boxText">
                        <p>
                            Crie sua conta de forma rápida e segura!<br />
                            A chave para suas conquistas financeiras está aqui: descubra um novo <br /> jeito de bancar sua vida.
                        </p>
                    </div>

                    <div className="boxButton">
                        <button className="action-button">Abra sua conta</button>
                    </div>

                </div>
                <div className="imgPage">
                    <img src={camaleao} alt="Imagem ilustrativa" className="bank-image" /> 
                </div>
            </div>
        </div>
    );
}

export default Home;
