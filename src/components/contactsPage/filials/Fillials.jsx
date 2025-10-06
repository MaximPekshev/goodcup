import sprite from '../../../assets/img/icons/sprites/sprite.svg';
export const Fillials = () => {
    return (
        <div className="contacts_branches bg_light">
            <div className="container">
                <h2>Филиалы</h2>
                <div className="contacts_branches_wrapper">
                    <div className="highlight_block">
                        <h3 className="title">6 городов</h3>
                        <div className="info">
                            <p>Каждый филиал оборудован собственным складом, что обеспечивает быструю обработку заказов и минимизацию сроков доставки.</p>
                        </div>
                    </div>
                    <table className="contacts_branches_list">
                        <tbody>
                            <tr className="contacts_branches_item">
                                <td>
                                    <h4 className="title">Белгород</h4>
                                </td>
                                <td>
                                    <div className="address">Россия, г. Москва, 
                                        <br />Спортивная ул., д. 9 кв.190
                                    </div>
                                </td>
                                <td>
                                    <div className="contacts_branches_item_time">
                                        <svg width="15" height="15">
                                            <use xlinkHref={`${sprite}#clock`}></use>
                                        </svg>
                                        <p>Пн-Пт: с 8:00 до 18:00</p>
                                    </div>
                                </td>
                            </tr>
                            <tr className="contacts_branches_item">
                                <td>
                                    <h4 className="title">Москва</h4>
                                </td>
                                <td>
                                    <div className="address">Россия, г. Москва, 
                                        <br />Спортивная ул., д. 9 кв.190
                                    </div>
                                </td>
                                <td>
                                    <div className="contacts_branches_item_time">
                                        <svg width="15" height="15">
                                            <use xlinkHref={`${sprite}#clock`}></use>
                                        </svg>
                                        <p>Пн-Пт: с 8:00 до 18:00</p>
                                    </div>
                                </td>
                            </tr>
                            <tr className="contacts_branches_item">
                                <td>
                                    <h4 className="title">Рязань</h4>
                                </td>
                                <td>
                                    <div className="address">г. Санкт-Петербург, 
                                        <br />Вешняковская ул, 18А
                                    </div>
                                </td>
                                <td>
                                    <div className="contacts_branches_item_time">
                                        <svg width="15" height="15">
                                            <use xlinkHref={`${sprite}#clock`}></use>
                                        </svg>
                                        <p>Пн-Пт: с 8:00 до 18:00</p>
                                    </div>
                                </td>
                            </tr>
                            <tr className="contacts_branches_item">
                                <td>
                                    <h4 className="title">Курск</h4>
                                </td>
                                <td>
                                    <div className="address">Россия, г. Москва, 
                                        <br />Спортивная ул., д. 9 кв.190
                                    </div>
                                </td>
                                <td>
                                    <div className="contacts_branches_item_time">
                                        <svg width="15" height="15">
                                            <use xlinkHref={`${sprite}#clock`}></use>
                                        </svg>
                                        <p>Пн-Пт: с 8:00 до 18:00</p>
                                    </div>
                                </td>
                            </tr>
                            <tr className="contacts_branches_item">
                                <td>
                                    <h4 className="title">Воронеж</h4>
                                </td>
                                <td>
                                    <div className="address">г. Санкт-Петербург, 
                                        <br />Вешняковская ул, 18А
                                    </div>
                                </td>
                                <td>
                                    <div className="contacts_branches_item_time">
                                        <svg width="15" height="15">
                                            <use xlinkHref={`${sprite}#clock`}></use>
                                        </svg>
                                        <p>Пн-Пт: с 8:00 до 18:00</p>
                                    </div>
                                </td>
                            </tr>
                            <tr className="contacts_branches_item">
                                <td>
                                    <h4 className="title">Батайск</h4>
                                </td>
                                <td>
                                    <div className="address">г. Санкт-Петербург, 
                                        <br />Вешняковская ул, 18А
                                    </div>
                                </td>
                                <td>
                                    <div className="contacts_branches_item_time">
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