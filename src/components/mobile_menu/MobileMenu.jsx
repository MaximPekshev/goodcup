import { Drawer } from 'antd';
import { NavLink } from 'react-router'; 
import sprite from '../../assets//img/icons/sprites/sprite.svg';
import { Button } from '../button/Button';

export const MobileMenu = ({ isOpen, onClose }) => {
    return (
        <Drawer
            closeIcon={null}
            open={isOpen}
            placement="left"
            styles={{
                header: {
                    paddingBottom: 0,
                }
            }}
        >
            <div className="header_mobile_menu">
                <div className="header_mobile_menu_top">
                    <Button 
                        iconName={"close"}
                        onClick={onClose}
                        className={"header_mobile_menu_close"}
                    />
                </div>
                <div className="header_mobile_menu_wrapper">
                    <div className="header_mobile_menu_center">
                        <NavLink onClick={onClose} to="/catalog">
                            <span>Каталог</span>
                        </NavLink>
                        <NavLink onClick={onClose} to="/about">
                            <span>О компании</span>
                        </NavLink>
                        <NavLink onClick={onClose} to="/delivery">
                            <span>Оплата и доставка</span>
                        </NavLink>
                        <NavLink onClick={onClose} to="/contacts">
                            <span>Контакты</span>
                        </NavLink>
                    </div>
                    <div className="header_mobile_menu_bottom">
                        <div className="header_address">
                            <svg>
                                <use xlinkHref={sprite + "#location"}></use>
                            </svg>
                            <a href="#">Москва </a>
                            <span>ул. Московская, 7к1</span>
                        </div>
                        <div className="header_contacts">
                            <a href="tel:+880055519608">
                                <span>8 (800) 551-96-08</span>
                            </a>
                            <a href="mailto:market@goodcup.ru">
                                <span>market@goodcup.ru</span>
                            </a>
                        </div>
                        <Button 
                            children="Обратная связь"
                            className="btn_main callback_btn"
                            iconName={"arrow-right"}
                            onClick={() => {console.log('Обратная связь clicked');}}
                        />
                        <p>Режим работы: пн-пт с 8-00 до 17-00</p>
                        <p>Перерыв: с 12-00 до 13-00</p>
                    </div>
                </div>
            </div>
      </Drawer> 
    );
}