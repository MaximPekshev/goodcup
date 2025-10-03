import AdvantagesImg from '../../materials/img/banners/advantages/advantages_cup.png';
import sprite from '../../assets/img/icons/sprites/sprite.svg';

export const Advantages = () => {
    return (
        <section>
            <div className="container">
                <h2>Преимущества наших&nbsp;стаканов</h2>
                <div className="advantages">
                    <div className="item_main">
                        <div className="item_main_inner">
                            <div className="left_block">
                                <div className="item_text">
                                    <h3>Крышка идеально садится на&nbsp;стакан</h3>
                                    <p>Благодаря новой технологии, которую мы внедрили в проиводство</p>
                                </div>
                                <div className="item_text">
                                    <h3>Стенки не&nbsp;размокают</h3>
                                    <p>Благодаря новой технологии, которую мы внедрили в проиводство</p>
                                </div>
                            </div>
                            <img src={AdvantagesImg} alt="Преимущества стаканов" />
                            <div className="right_block">
                                <div className="item_text">
                                    <h3>Полноцветная печать</h3>
                                    <p>Благодаря новой технологии, которую мы внедрили в проиводство</p>
                                </div>
                                <div className="item_text">
                                    <h3>Лазерная спайка без&nbsp;клея</h3>
                                    <p>Благодаря новой технологии, которую мы внедрили в проиводство</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item item_1">
                        <div className="item_img">
                            <svg>
                                <use xlinkHref={`${sprite}#advantages1`}></use>
                            </svg>
                        </div>
                        <div className="item_text">
                            <h3>Большой ассортимент</h3>
                            <p>При производстве и продаже бумажных стаканчиков мы обеспечиваем наших клиентов продукцией высокого качества по доступным ценам</p>
                        </div>
                    </div>
                    <div className="item item_2">
                        <div className="item_img">
                            <svg>
                                <use xlinkHref={`${sprite}#advantages2`}></use>
                            </svg>
                        </div>
                        <div className="item_text">
                            <h3>Экологичный подход</h3>
                            <p>При производстве и продаже бумажных стаканчиков мы обеспечиваем наших клиентов продукцией высокого качества по доступным ценам</p>
                        </div>
                    </div>
                    <div className="item item_3">
                        <div className="item_img">
                            <svg>
                                <use xlinkHref={`${sprite}#advantages3`}></use>
                            </svg>
                        </div>
                        <div className="item_text">
                            <h3>Качество и надежность</h3>
                            <p>При производстве и продаже бумажных стаканчиков мы обеспечиваем наших клиентов продукцией высокого качества по доступным ценам</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}