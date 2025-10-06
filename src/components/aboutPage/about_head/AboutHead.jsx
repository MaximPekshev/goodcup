import AboutImg from '../../../materials/img/about_page/about_head.jpg';
import { Breadcrumbs } from '../../breadcrumbs/Breadcrumbs';
export const AboutHead = () => {
    return (
        <div className="about_head">
            <img src={AboutImg} alt="about_head" />
            <Breadcrumbs items={[
                { title: "Главная", link: "/" },
                { title: "О компании", link: "/about" }
            ]} />
            <div className="container">
                <h1>О компании</h1>
                <p className="about_desc">Компания Good Cup работает в индустрии производства и оптовой реализации бумажных стаканов с 2010 года. Компания зарекомендовала себя как надёжный партнёр кофеен, ресторанов и гипермаркетов.</p>
            </div>
        </div>
    );
}