import AboutS1Img from '../../materials/img/delivery/about_s1.jpg';
import AboutVideoPosterImg from '../../materials/img/delivery/about_video_poster.jpg'
import BrandirovanieImg from '../../materials/img/delivery/brandirovanie.jpg'
import { Carousel } from "antd";
const contentStyle = {
    background: '#ffffffff',
    borderRadius: '25px',
    objectFit: 'cover',
};
export const Delivery = () => {
    return (
        <section>
            <div className="container">
                <div className="dbl_blocks">
                    <div className="left_block">
                        <h2>450 – 600 ежедневно отгружаемых заказов в разные города России</h2>
                        <p>5 торговых подразделений с собственными складами и транспортом в городах Белгород, Ростов-На-Дону, Воронеж, Рязань, Курск готовые доставить вам бумажные стаканы и другие сопутствующие товары для вас или вашего бизнеса в короткие сроки.</p>
                    </div>
                    <div className="right_block dblock_right_slider">
                        <Carousel autoplay arrows infinite={false}>
                            <div className='swiper-slide' >
                                <img src={AboutS1Img} alt="about_s1"  style={contentStyle}/>
                            </div>
                            <div className='swiper-slide'>
                                <img src={AboutVideoPosterImg} alt="about_video_poster" style={contentStyle} />
                            </div>
                            <div className='swiper-slide'>
                                <img src={BrandirovanieImg} alt="brandirovanie" style={contentStyle} />
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    );
}