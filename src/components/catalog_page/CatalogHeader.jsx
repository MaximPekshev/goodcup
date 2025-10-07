import sprite from '../../assets/img/icons/sprites/sprite.svg';
export const CatalogHeader = () => {
    return (
        <div className="catalog_header">
            <div className="catalog_links">
                <a className="catalog_link" href="./catalog2.html">
                    <svg width="40" height="40">
                        <use xlinkHref={sprite + "#icon_menu1"}></use>
                    </svg>
                <span>Бумажные стаканы</span>
                </a>
                <a className="catalog_link" href="./catalog2.html">
                    <svg width="40" height="40">
                        <use xlinkHref={sprite + "#icon_menu2"}></use>
                    </svg>
                    <span>Крышки</span>
                </a>
                <a className="catalog_link" href="./catalog2.html">
                    <svg width="40" height="40">
                        <use xlinkHref={sprite + "#icon_menu20"}></use>
                    </svg>
                    <span>Размешиватель</span>
                </a>
                <a className="catalog_link" href="./catalog2.html">
                    <svg width="40" height="40">
                        <use xlinkHref={sprite + "#icon_menu5"}></use>
                    </svg>
                    <span>Трубочки</span>
                </a>
                <a className="catalog_link" href="./catalog2.html">
                    <svg width="40" height="40">
                        <use xlinkHref={sprite + "#icon_menu6"}></use>
                    </svg>
                    <span>Стаканы для холодных напитков</span>
                </a>
                <div className="filter_show_toggle">
                    <svg>
                        <use xlinkHref={sprite + "#arrow-down"}></use>
                    </svg>
                </div>
            </div>
        </div>
    );
}