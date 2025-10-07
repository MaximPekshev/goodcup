import sprite from '../../assets/img/icons/sprites/sprite.svg';
import cardImg from '../../materials/img/catalog/0.jpg';
import { Button } from '../button/Button';
export const Card = () => {
    return (
        <a className="prod_card" href="#">
            <div className="prod_card_header">
                <button className="prod_card_like">
                    <svg>
                    <use xlinkHref={sprite + "#like"}></use>
                    </svg>
                </button>
                <div className="prod_card_img">
                    <img src={cardImg} alt="Новый год" />
                </div>
                <div className="prod_card_tags">
                    <span className="hit">ХИТ</span>
                    <span className="sale">-62%</span>
                </div>
                <Button
                    className="btn_main secondary fast_view"
                    children={"Быстрый просмотр"}
                />
            </div>
            <div className="prod_card_body">
                <div className="prod_card_status">
                    <div className="prod_card_status_item">
                    <i className="green"></i>
                    <span>В наличии</span>
                    </div>
                </div>
                <div className="prod_card_text">
                    <h3 className="prod_card_title">Новый год</h3>
                    <p className="prod_card_desc">Стаканы для горячих напитков бумажные подарочные</p>
                </div>
                <div className="prod_card_variants">
                    <label className="prod_card_label">
                        <input type="radio" name="prod_card_unlod77n8s" value="55" onChange={() => {}} />
                        <span>55мл</span>
                    </label>
                    <label className="prod_card_label">
                        <input type="radio" name="prod_card_unlod77n8s" value="200" onChange={() => {}} />
                        <span>200мл</span>
                    </label>
                    <label className="prod_card_label">
                        <input type="radio" name="prod_card_unlod77n8s" value="350" onChange={() => {}} />
                        <span>350мл</span>
                    </label>
                    <label className="prod_card_label">
                        <input type="radio" name="prod_card_unlod77n8s" value="450" onChange={() => {}} />
                        <span>450мл</span>
                    </label>
                    <label className="prod_card_label">
                        <input type="radio" name="prod_card_unlod77n8s" value="550" onChange={() => {}} />
                        <span>550мл</span>
                    </label>
                    <label className="prod_card_label">
                        <input type="radio" name="prod_card_unlod77n8s" value="650" onChange={() => {}} />
                        <span>650мл</span>
                    </label>
                </div>
                <div className="prod_card_bottom">
                    <div className="prod_card_price">
                        <div className="per_one">1000 шт/уп</div>
                        <div className="price">
                            <span className="current">2 280 ₽</span>
                            <span className="old">2 500 ₽</span>
                        </div>
                    </div>
                    <div className="prod_card_action">
                        <button className="btn_main rounded add_to_cart">
                            <div className="quantity">
                                <div className="minus">
                                    <svg>
                                        <use xlinkHref={sprite + "#minus"}></use>
                                    </svg>
                                </div>
                                <input type="number" value="1" onChange={() => {}} />
                                <div className="plus">
                                    <svg>
                                        <use xlinkHref={sprite + "#plus"}></use>
                                    </svg>
                                </div>
                            </div>
                            <span className="btn_text">В корзину</span>
                            <svg>
                                <use xlinkHref={sprite + "#card_buy"}></use>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </a>
    );
}