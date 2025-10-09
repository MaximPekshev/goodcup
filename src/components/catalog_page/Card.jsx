import sprite from '../../assets/img/icons/sprites/sprite.svg';
import cardImg from '../../materials/img/catalog/0.jpg';
import { Button } from '../button/Button';
export const Card = (item) => {
    return (
        <a className="prod_card" href="#">
            <div className="prod_card_header">
                <button className="prod_card_like">
                    <svg>
                        <use xlinkHref={sprite + "#like"}></use>
                    </svg>
                </button>
                <div className="prod_card_img">
                    <img src={cardImg} alt={item.name} />
                </div>
            </div>
            <div className="prod_card_body">
                <div className="prod_card_status">
                    {item.balance > 0 && 
                        <div className="prod_card_status_item">
                            <i className="green"></i>
                            <span>В наличии</span>
                        </div>
                    }
                    {item.balance <= 0 && 
                        <div className="prod_card_status_item">
                            <i className="gray"></i>
                            <span>Под заказ</span>
                        </div>
                    }
                </div>
                <div className="prod_card_text">
                    <h3 className="prod_card_title">{item.name}</h3>
                    <p className="prod_card_desc">{ item.description }</p>
                </div>
                <div className="prod_card_bottom">
                    <div className="prod_card_price">
                        <div className="price">
                            <span className="current">{item.price} ₽</span>
                        </div>
                    </div>
                    <div className="prod_card_action">
                        <button className="btn_main rounded add_to_cart">
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