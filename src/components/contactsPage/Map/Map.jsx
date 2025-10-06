import sprite from "../../../assets/img/icons/sprites/sprite.svg";
export const Map = () => {
    return (
        <div class="container">
            <h2>Адреса</h2>
            <div class="contact_map">
                <div class="contact_map_wrapper">
                    <h3>Адрес производства</h3>
                    <div class="contact_map_address">
                        <svg>
                            <use xlinkHref={sprite + "#location_outline"}></use>
                        </svg>
                        <p>г. Белгород, ул. Майская</p>
                    </div>
                    <hr />
                    <div class="partners">
                        <h3>Адреса партнеров </h3>
                        <div class="tooltip">
                            <svg>
                                <use xlinkHref={sprite + "#info"}></use>
                            </svg>
                            <div class="tooltip_wrapper">
                                <span>Подсказка</span>
                            </div>
                        </div>
                    </div>
                    <h4>Деловые Линии</h4>
                    <div class="contact_map_address">
                        <svg>
                            <use xlinkHref={sprite + "#location_outline"}></use>
                        </svg>
                        <p>ул. Подольских Курсантов, 17, корп. 2, Москва</p>
                    </div>
                    <h4>ПЭК</h4>
                    <div class="contact_map_address">
                        <svg>
                            <use xlinkHref={sprite + "#location_outline"}></use>
                        </svg>
                        <p>1-й Вязовский пр-д., 4, стр. 19, Москва</p>
                    </div>
                    <h4>Cts Group</h4>
                    <div class="contact_map_address">
                        <svg>
                            <use xlinkHref={sprite + "#location_outline"}></use>
                        </svg>
                        <p>Лианозовский пр., 8А, Москва</p>
                    </div>
                    <h4>DPD</h4>
                    <div class="contact_map_address">
                        <svg>
                            <use xlinkHref={sprite + "#location_outline"}></use>
                        </svg>
                        <p>Москва, р-он Восточный, Главная улица, 29</p>
                    </div>
                </div>
            </div>
        </div>
    );
}