import AboutMainImg from '../../materials/img/banners/about_main/about_main.jpg';
import { Button } from '../button/Button';
export const AboutMain = () => {
    return (
        <section>
            <div className="container">
                <h2>О компании</h2>
                <div className="about_main">
                    <div className="left_block">
                        <div className="video_block">
                            <div className="video_block">
                                <img src={AboutMainImg} alt="О компании на главной" />
                            </div>
                        </div>
                    </div>
                    <div className="right_block">
                        <h3>Компания Good Cup работает с 2010 года и на данный момент представлена филиалами в нескольких городах</h3>
                        <p>При производстве и продаже бумажных стаканчиков мы обеспечиваем наших клиентов продукцией высокого качества по доступным ценам. Вы можете заказать и купить бумажные стаканы для горячих напитков и других продуктов в Москве и по всей России.</p>
                        <Button
                            className="btn_main"
                            children="Подробнее"
                            onClick={() => {console.log('Button clicked!')}}
                            iconName="arrow-right"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}