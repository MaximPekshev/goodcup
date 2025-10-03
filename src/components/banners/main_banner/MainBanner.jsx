import { Carousel } from 'antd';
import mainBannerSlide1 from '../../../materials/img/banners/0.png';
import mainBannerSlide2 from '../../../materials/img/banners/1.png';
import mainBannerSlide3 from '../../../materials/img/banners/2.png';
import { MainBannerSlide } from './MainBannerSlide';

export const MainBanner = () => {
    return (
        <div className="main_banner">
            <Carousel autoplay adaptiveHeight>
                <MainBannerSlide
                    title="Купить бумажные стаканы оптом в Москве"
                    description="Производство и продажа стаканов оптом недорого"
                    buttonText="Узнать подробнее"
                    imgSrc={mainBannerSlide1}
                />
                <MainBannerSlide
                    title="Купить крышки оптом в оптом в Москве"
                    description="Производство и продажа крышек для стаканов оптом недорого"
                    buttonText="Узнать"
                    imgSrc={mainBannerSlide2}
                />
                <MainBannerSlide
                    title="Купить размешиватели оптом в Москве"
                    description="Производство и продажа размешивателей оптом недорого"
                    buttonText="Узнать про размешиватели"
                    imgSrc={mainBannerSlide3}
                />
            </Carousel>
        </div>
    );
}