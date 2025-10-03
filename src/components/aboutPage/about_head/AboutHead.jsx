import AboutImg from '../../../materials/img/about_page/about_head.jpg';
import { NavLink } from "react-router";
export const AboutHead = () => {
    return (
        <div className="about_head">
            <img src={AboutImg} alt="about_head" />
            <div className="container">
                <div className="breadcrumbs horizontal-scroll">
                    <NavLink to="/">Главная</NavLink>
                    <NavLink to="/about">О компании</NavLink>
                </div>
            </div>
            <div className="container">
                <h1>О компании</h1>
                <p className="about_desc">Компания Good Cup работает в индустрии производства и оптовой реализации бумажных стаканов с 2010 года. Компания зарекомендовала себя как надёжный партнёр кофеен, ресторанов и гипермаркетов.</p>
            </div>
        </div>
    );
}