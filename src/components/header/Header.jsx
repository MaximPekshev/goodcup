import logo from '../../assets/img/logo.svg';
import sprite from '../../assets/img/icons/sprites/sprite.svg';
import { NavLink } from 'react-router';
import { MobileMenu } from '../mobile_menu/MobileMenu';
import { useState } from 'react';

export const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <header className="header">
            <div className="container">
                <div className="header_wrapper">
                    <button className="burger" type="button" onClick={() => toggleMobileMenu()}>
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
                                    <NavLink to="/catalog">Каталог</NavLink>
                                </li>    
                                <li>
                                    <NavLink to="/about">О компании</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/delivery">Оплата и доставка</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contacts">Контакты</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header_bottom">
                        <div className="logo">
                            <NavLink to="/">
                                <img src={logo} alt="Goodcup" />
                            </NavLink>
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
            <MobileMenu 
                isOpen={isMobileMenuOpen} 
                onClose={() => {toggleMobileMenu();}} 
            />
        </header>    
    );
}