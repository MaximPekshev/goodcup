import sprite from '../../assets/img/icons/sprites/sprite.svg';
import mainLinks_0 from '../../materials/img/banners/0.png';
import mainLinks_1 from '../../materials/img/banners/1.png';
import mainLinks_2 from '../../materials/img/banners/2.png';
import mainLinks_3 from '../../materials/img/banners/3.png';
import mainLinks_4 from '../../materials/img/banners/4.png';
import mainLinks_5 from '../../materials/img/banners/5.png';
import mainLinks_6 from '../../materials/img/banners/6.png';
import { Button } from '../button/Button';
export const CategoriesMain = () => {
    return (
        <section>
            <div className="container">
                <div className="section_header">
                    <h2>Каталог</h2>
                    <div className="section_header_links">
                        <Button 
                            className="btn_main" 
                            href="#"
                            children="В каталог"
                            iconName="arrow-right"
                            onClick={() => console.log('Button clicked!')}
                        />
                    </div>
                </div>
                <div className="main_links">
                    <div className="swiper">
                        <div className="swiper-pagination"></div>
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <a className="main_links_item" href="#">
                                    <span>Стаканы</span>
                                    <img src={mainLinks_0} alt="0" />
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a className="main_links_item" href="#">
                                    <span>Крышки</span>
                                    <img src={mainLinks_1} alt="1" />
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a className="main_links_item" href="#">
                                    <span>Размешиватель</span>
                                    <img src={mainLinks_2} alt="2" />
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a className="main_links_item" href="#">
                                    <span>Трубочки</span>
                                    <img src={mainLinks_3} alt="3" />
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a className="main_links_item" href="#">
                                    <span>Пищевая упаковка</span>
                                    <img src={mainLinks_4} alt="4" />
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a className="main_links_item" href="#">
                                    <span>Кофе в зернах</span>
                                    <img src={mainLinks_5} alt="5" />
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a className="main_links_item" href="#">
                                    <span>Сироп</span>
                                    <img src={mainLinks_6} alt="6" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}