import logo from '../../assets/img/logo.svg';
import sprite from '../../assets/img/icons/sprites/sprite.svg';

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header_wrapper">
                    <button className="burger" type="button">
                        <svg className="normal">
                            <use xlinkHref={`${sprite}#catalog_E`}></use>
                        </svg>
                    </button>
                    <div className="header_top">
                        <div className="header_contacts">
                            <a href="tel:+880055519608">
                                <div className="mobile_icon">
                                    <svg className="normal">
                                        <use xlinkHref={`${sprite}#phone`}></use>
                                    </svg>
                                </div>
                                <span>8 (800) 551-96-08</span>
                            </a>
                            <a href="mailto:market@goodcup.ru">
                                <div className="mobile_icon">
                                    <svg className="normal">
                                        <use xlinkHref={`${sprite}#mail`}></use>
                                    </svg>
                                </div>
                                <span>market@goodcup.ru</span>
                            </a>
                        </div>
                        <nav>
                            <ul>
                                <li>
                                    <a href="#">О компании</a>
                                </li>
                                <li>
                                    <a href="#">Нанесение логотипов</a>
                                </li>
                                <li>
                                    <a href="#">Оплата и доставка</a>
                                </li>
                                <li>
                                    <a href="#">Контакты</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header_bottom">
                        <div className="logo">
                            <a href="#">
                                <img src={logo} alt="Goodcup" />
                            </a>
                        </div>
                        <button className="header_catalog_btn" type="button" alt="Каталог">
                            <svg className="normal">
                                <use xlinkHref={`${sprite}#catalog_E`}></use>
                            </svg>
                        </button>
                        <div className="header_search">
                            <div className="header_search_wrapper">
                                <button className="btn_search_close" type="button" alt="Закрыть">
                                    <svg className="normal">
                                        <use xlinkHref={`${sprite}#close`}></use>
                                    </svg>
                                </button>
                                <form className="search_form">
                                    <button type="submit" alt="Поиск">
                                        <svg className="normal">
                                            <use xlinkHref={`${sprite}#search`}></use>
                                        </svg>
                                    </button>
                                    <input type="text" placeholder="Найти на GoodCap" />
                                </form>
                            </div>
                        </div>
                        <div className="header_actions">
                            <button className="search" type="button" alt="Поиск">
                                <svg className="normal">
                                    <use xlinkHref={`${sprite}#search`}></use>
                                </svg>
                                <span>Поиск</span>
                            </button>
                            <a className="favorite" href="#">
                                <svg className="normal">
                                    <use xlinkHref={`${sprite}#heart`}></use>
                                </svg>
                                <div className="counter">2</div>
                                <span>Избранное</span>
                            </a>
                            <a className="user" href="#">
                                <svg className="normal">
                                    <use xlinkHref={`${sprite}#user`}></use>
                                </svg>
                                <span>Войти</span>
                            </a>
                            <a className="cart" href="#">
                                <svg className="normal">
                                    <use xlinkHref={`${sprite}#cart`}></use>
                                </svg>
                                <span>Корзина</span>
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </header>    
    );
}