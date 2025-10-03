import { Carousel } from 'antd';
import sprite from '../../../assets/img/icons/sprites/sprite.svg';
import BlockRightSliderImg from '../../../materials/img/banners/block_right_slider/brandirovanie.jpg'; 

 const contentStyle = {
    background: '#ffffffff',
    height: '343px',
    padding: '50px 50px 65px',
    borderRadius: '25px',
};
export const BlockRightSlider = () => {
   
    return (
        <section>
            <div className="block_right_slider brs bg_light">
                <div className="container">
                    <div className="brs_wrapper">
                        <div className="left_block">
                            <h2>Нанесение логотипов</h2>
                            <p>Простое брендирование стаканчиков способно повысить продажи, улучшить отношение к компании или выполнить продвижение нового напитка.</p>
                            <a className="btn_main" href="#">
                                <span>Узнать больше</span>
                                <svg width="5" height="9">
                                    <svg>
                                        <use xlinkHref={`${sprite}#arrow-right`}></use>
                                    </svg>
                                </svg>
                            </a>
                        </div>
                        <div className="right_block">
                            <img src={BlockRightSliderImg} alt="bg" />
                            <Carousel autoplay>
                                <div className="swiper-slide">
                                    <div className="brs_item" style={contentStyle}>
                                        <h3>Брендирование стаканчиков способно повысить продажи </h3>
                                        <p>Купить необходимую партию бумажных стаканов с логотипом оптом вы можете в компании Good Cup в Москве. Предлагаем как однослойные, так и двуслойные стаканы с логотипом на заказ. </p>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="brs_item" style={contentStyle}>
                                        <h3>Брендирование стаканчиков способно повысить продажи </h3>
                                        <p>Купить необходимую партию бумажных стаканов с логотипом оптом вы можете в компании Good Cup в Москве. Предлагаем как однослойные, так и двуслойные стаканы с логотипом на заказ. </p>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="brs_item" style={contentStyle}>
                                        <h3>Брендирование стаканчиков способно повысить продажи </h3>
                                        <p>Купить необходимую партию бумажных стаканов с логотипом оптом вы можете в компании Good Cup в Москве. Предлагаем как однослойные, так и двуслойные стаканы с логотипом на заказ. </p>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}