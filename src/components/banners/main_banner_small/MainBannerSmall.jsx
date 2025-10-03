import mainBannerSmallImg from '../../../materials/img/banners/main_banner_small/main_banner_small.jpg';
import { Button } from '../../button/Button';
export const MainBannerSmall = () => {
    return (
        <div className="main_banner_small">
            <img src={mainBannerSmallImg} alt="" />
            <div className="main_banner_small_text">
                <h3>Поможем провести брендирование под ваш бизнес</h3>
                <p>Стаканы с фирменным логотипом способны повысить продажи, улучшить отношение к компании и выполнить продвижение</p>
                <Button 
                    className="btn_main"
                    onClick={() => console.log('Button clicked!')}
                    children="подробнее"
                    iconName="arrow-right"
                 />
            </div>
        </div>
    );
}