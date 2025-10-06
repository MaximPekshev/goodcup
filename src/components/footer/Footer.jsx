import paycard_logos from '../../assets/img/paycard_logos.svg';
import logo from '../../assets/img/logo.svg';
import { NavLink } from 'react-router';
export const Footer = () => {
    return (
        <footer className="footer bg_light">
            <div className="container">
                <div className="footer_wrapper">
                    <div className="footer_top">
                        <div className="column">
                            <NavLink to="/">
                                <img src={logo} alt="Goodcup" />
                            </NavLink>
                            <div className="footer_contacts">
                                <a href="tel:+880055519608">8 (800) 551-96-08</a>
                                <a href="mailto:market@goodcup.ru">market@goodcup.ru</a>
                            </div>
                        </div>
                        <div className="column with_nav">
                            <a className="column_title" href="#">Каталог</a>
                            <nav>
                                <ul>
                                    <li>
                                        <a href="#">Стаканы</a>
                                    </li>
                                    <li>
                                        <a href="#">Крышки</a>
                                    </li>
                                    <li>
                                        <a href="#">Размешиватель</a>
                                    </li>
                                    <li>
                                        <a href="#">Трубочки</a>
                                    </li>
                                    <li>
                                        <a href="#">Пищевая упаковка</a>
                                    </li>
                                    <li>
                                        <a href="#">Кофе в зернах</a>
                                    </li>
                                    <li>
                                        <a href="#">Сироп</a>
                                    </li>
                                </ul>
                            </nav>  
                        </div>
                        <div className="column with_nav">
                            <a className="column_title" href="#"> Компания</a>
                            <nav>
                                <ul>
                                    <li>
                                        <NavLink to="/about">О компании</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/delivery">Доставка и оплата</NavLink>
                                    </li>
                                    <li>
                                        <a href="#">Поставщикам</a>
                                    </li>
                                    <li>
                                        <NavLink to="/contacts">Контакты</NavLink>
                                    </li>
                                    <li>
                                        <a href="#">Правила продажи</a>
                                    </li>
                                    <li>
                                        <a href="#">Правила пользования торговой площадкой</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="column">
                            <button className="btn_main" href="#" js-open-modal="feedback_dialog">
                                <span>Обратная связь</span>
                                {/* <svg width="5" height="9">
                                <use xlink:href="./img/sprites/sprite.svg#arrow-right"></use>
                                </svg> */}
                            </button>
                            <p>Режим работы: пн-пт с 8-00 до 17-00</p>
                            <p>Перерыв: с 12-00 до 13-00</p>
                            <p>Адрес: г. Москва, 1-й Вязовский пр-д., 4, стр. 19</p>
                        </div>
                    </div>
                    <div className="footer_bottom">
                        <div className="bottom_item">
                            <p className="copyright">© 2010 – 2024, «ГУДКАП» </p>
                        </div>
                        <div className="bottom_item">
                            <NavLink to="/privacy" target='_blank'>Политика конфиденциальности</NavLink>
                        </div>
                        <div className="bottom_paycard_logos">
                            <img style={{ maxWidth: '250px', height: 'auto' }} src={paycard_logos} alt="paycard_logos" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}