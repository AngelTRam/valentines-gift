import '../style/Fotos.css';
import Fondo from './Fondo';
export const Fotos = () => {

    return (
        <div>
            <h1>Besitos</h1>
            <div className='masonry'>
                <div class="item">
                    <img src={require("../img/5.jpeg")} alt="5" />
                    Besito de nuestro último 14 de febrero 🥰
                </div>
                <div class="item">
                    <img src={require("../img/1.jpg")} alt="1" />
                    Besito de segundo aniversario 💖
                </div>
                <div class="item">
                    <img src={require("../img/2.jpg")} alt="2" />
                    Besito de nuestro úlimo aniversario 💖
                </div>
                <div class="item">
                    <img src={require("../img/3.jpg")} alt="3" />
                    Te miras tan linda cuando me besas 💘
                </div>
                <div class="item">
                    <img src={require("../img/4.jpeg")} alt="4" />
                    Besito en una de nuestras citas en el carro 😘
                </div>
                <div class="item">
                    <img src={require("../img/6.jpg")} alt="6" />
                    Besito contigo usando el sueter que te regalé jeje 😋
                </div>
            </div>
        </div>
    )
}