import sprite from '../../assets/img/icons/sprites/sprite.svg';
import brendingImage from '../../materials/img/product_card/about_service.png';
export const ProductCardDelivery = () => {
    return (
        <>
            <div className="prodcard_delivery">
                <div className="item">
                    <h4>Доставка</h4>
                    <ul>
                        <li>
                            <div className="delivery_item">по&nbsp;Москве
                                <small>бесплатно от&nbsp;15&nbsp;000 руб</small>
                            </div>
                        </li>
                        <li>
                            <div className="delivery_item">по&nbsp;МО
                                <small>бесплатно в&nbsp;радиусе 5&nbsp;км, свыше&nbsp;&mdash; 30&nbsp;руб./км</small>
                            </div>
                        </li>
                        <li>
                            <div className="delivery_item">в&nbsp;регионы&nbsp;РФ
                                <small>бесплатно до&nbsp;терминала&nbsp;ТК от&nbsp;15&nbsp;000 руб</small>
                            </div>
                        </li>
                    </ul>
                </div>
                <hr />
                <div className="item">
                    <h4>Оплата</h4>
                    <ul className="two_column">
                        <li>банковской картой</li>
                        <li>безналичный расчет</li>
                    </ul>
                </div>
            </div>
            <div className="about_service">
                <img src={brendingImage} alt="about_service" />
                <div className="about_service_text">
                    <h4>Хотите брендировать?</h4>
                    <p>На данный тип стаканов мы также можем нанести логотипы
                    </p>
                    <a className="service_call" href="#">
                        <span>узнать об услуге</span>
                        <svg width="7" height="11">
                            <use xlinkHref={sprite + "#arrow-right"}></use>
                        </svg>
                    </a>
                </div>
            </div>
        </>
    );
}