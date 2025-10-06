import sprite from '../../../assets/img/icons/sprites/sprite.svg';
export const Fillials = () => {
    return (
        <div class="contacts_branches bg_light">
            <div class="container">
                <h2>Филиалы</h2>
                <div class="contacts_branches_wrapper">
                    <div class="highlight_block">
                        <h3 class="title">6 городов</h3>
                        <div class="info">
                            <p>Каждый филиал оборудован собственным складом, что обеспечивает быструю обработку заказов и минимизацию сроков доставки.</p>
                        </div>
                    </div>
                    <table class="contacts_branches_list">
                        <tbody>
                            <tr class="contacts_branches_item">
                                <td>
                                    <h4 class="title">Белгород</h4>
                                </td>
                                <td>
                                    <div class="address">Россия, г. Москва, 
                                        <br />Спортивная ул., д. 9 кв.190
                                    </div>
                                </td>
                                <td>
                                    <div class="contacts_branches_item_time">
                                        <svg width="15" height="15">
                                            <use xlinkHref={`${sprite}#clock`}></use>
                                        </svg>
                                        <p>Пн-Пт: с 8:00 до 18:00</p>
                                    </div>
                                </td>
                            </tr>
                            <tr class="contacts_branches_item">
                                <td>
                                    <h4 class="title">Москва</h4>
                                </td>
                                <td>
                                    <div class="address">Россия, г. Москва, 
                                        <br />Спортивная ул., д. 9 кв.190
                                    </div>
                                </td>
                                <td>
                                    <div class="contacts_branches_item_time">
                                        <svg width="15" height="15">
                                            <use xlinkHref={`${sprite}#clock`}></use>
                                        </svg>
                                        <p>Пн-Пт: с 8:00 до 18:00</p>
                                    </div>
                                </td>
                            </tr>
                            <tr class="contacts_branches_item">
                                <td>
                                    <h4 class="title">Рязань</h4>
                                </td>
                                <td>
                                    <div class="address">г. Санкт-Петербург, 
                                        <br />Вешняковская ул, 18А
                                    </div>
                                </td>
                                <td>
                                    <div class="contacts_branches_item_time">
                                        <svg width="15" height="15">
                                            <use xlinkHref={`${sprite}#clock`}></use>
                                        </svg>
                                        <p>Пн-Пт: с 8:00 до 18:00</p>
                                    </div>
                                </td>
                            </tr>
                            <tr class="contacts_branches_item">
                                <td>
                                    <h4 class="title">Курск</h4>
                                </td>
                                <td>
                                    <div class="address">Россия, г. Москва, 
                                        <br />Спортивная ул., д. 9 кв.190
                                    </div>
                                </td>
                                <td>
                                    <div class="contacts_branches_item_time">
                                        <svg width="15" height="15">
                                            <use xlinkHref={`${sprite}#clock`}></use>
                                        </svg>
                                        <p>Пн-Пт: с 8:00 до 18:00</p>
                                    </div>
                                </td>
                            </tr>
                            <tr class="contacts_branches_item">
                                <td>
                                    <h4 class="title">Воронеж</h4>
                                </td>
                                <td>
                                    <div class="address">г. Санкт-Петербург, 
                                        <br />Вешняковская ул, 18А
                                    </div>
                                </td>
                                <td>
                                    <div class="contacts_branches_item_time">
                                        <svg width="15" height="15">
                                            <use xlinkHref={`${sprite}#clock`}></use>
                                        </svg>
                                        <p>Пн-Пт: с 8:00 до 18:00</p>
                                    </div>
                                </td>
                            </tr>
                            <tr class="contacts_branches_item">
                                <td>
                                    <h4 class="title">Батайск</h4>
                                </td>
                                <td>
                                    <div class="address">г. Санкт-Петербург, 
                                        <br />Вешняковская ул, 18А
                                    </div>
                                </td>
                                <td>
                                    <div class="contacts_branches_item_time">
                                        <svg width="15" height="15">
                                            <use xlinkHref={`${sprite}#clock`}></use>
                                        </svg>
                                        <p>Пн-Пт: с 8:00 до 18:00</p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}