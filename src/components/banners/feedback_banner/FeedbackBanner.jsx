import FeedbackBannerImg from '../../../materials/img/banners/feedback_banner/feedback_img.png';
import { Button } from '../../button/Button';
export const FeedbackBanner = () => {
    return (
        <section className="feedback_banner">
            <div className="container">
                <div className="feedback_banner_wrapper">
                    <h3>Нужны бумажные
                        <br /> стаканчики?
                    </h3>
                    <Button 
                        className="btn_main orange"
                        children="Оставить заявку"
                        onClick={() => {console.log('Button clicked!')}}
                        iconName="arrow-right"
                    />
                    <div className="feedback_highlight">
                        <img src={FeedbackBannerImg} alt="" />
                        <div className="feedback_highlight_wrapper">
                            <p>Если у вас возникли
                            <br /> вопросы, вы также
                            <br /> можете связаться с нами
                            </p>
                            <ul>
                            <li>по номеру телефона
                                <br />
                                <a href="tel:+880055519608">8 (800) 551-96-08</a>
                            </li>
                            <li>по почте
                                <br />
                                <a href="mailto:market@goodcup.ru">market@goodcup.ru</a>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}