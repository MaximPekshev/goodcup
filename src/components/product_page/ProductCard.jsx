import { Breadcrumbs } from "../breadcrumbs/Breadcrumbs";
import { useParams } from "react-router";
import { useGetProductQuery } from "../../redux/services/api";
import sprite from '../../assets/img/icons/sprites/sprite.svg';
import productImage from '../../materials/img/catalog/0.jpg';
import { Button } from "../button/Button";
import { ProductCardDelivery } from "./ProductCardDelivery";
export const ProductCard = () => {
    const { slug } = useParams();
    const { data: product, isLoading, isFetching, error } = useGetProductQuery(slug);

    if (isLoading || isFetching) return <div>Loading...</div>;
    if (error) return <div>Error loading product</div>;

    return (
        <>
            <Breadcrumbs
                items={[
                    { title: 'Главная', link: '/' },
                    { title: 'Каталог', link: '/catalog' },
                    { title: 'Продукт', link: `/catalog/${slug}` }
                ]}
            />
            <div className="container">
                <div className="prodcard_detail">
                    <div className="prodcard_img">
                        <div className="swiper-main">
                            <div className="product_action">
                                <button className="prod_card_like">
                                    <svg width="26" height="26">
                                        <use xlinkHref={sprite + "#like"}></use>
                                    </svg>
                                </button>
                                <button className="prod_card_share">
                                    <svg width="26" height="26">
                                        <use xlinkHref={sprite + "#share"}></use>
                                    </svg>
                                </button>
                            </div>
                            <img src={productImage} alt={product.title} />
                        </div>
                    </div>
                    <div className="prodcard_info">
                        <div className="prodcard_status">
                            {product.balance > 0 && (
                                <div className="prod_card_status_item">
                                    <i className="green"></i>
                                    <span>В наличии</span>
                                </div>
                            )}
                            {product.balance <= 0 && (
                                <div className="prod_card_status_item">
                                    <i className="gray"></i>
                                    <span>Под заказ</span>
                                </div>
                            )}
                            <h1>
                                {product.name}
                            </h1>
                            <div className="characteristics_col">
                                <div className="characteristic">
                                    <div className="name">Артикул</div>
                                    <div className="value">188964446</div>
                                </div>
                                <div className="characteristic">
                                    <div className="name">Количество в коробке</div>
                                    <div className="value">1000 шт</div>
                                </div>
                                <div className="characteristic">
                                    <div className="name">Материал</div>
                                    <div className="value">Бумага</div>
                                </div>
                                <div className="characteristic">
                                    <div className="name">Объем</div>
                                    <div className="value">110 мл</div>
                                </div>
                                <div className="characteristic">
                                    <div className="name">Назначение</div>
                                    <div className="value">Стакан</div>
                                </div>
                                <div className="characteristic">
                                    <div className="name">Страна производства</div>
                                    <div className="value">Россия</div>
                                </div>
                            </div>
                            <div className="prodcard_price">
                                <div className="current_price">{product.price} ₽</div>
                                <div className="per_one">{(product.price / 1000).toFixed(2)}₽ за шт</div>
                            </div>
                            <div className="prod_card_action">
                                <Button 
                                    className="btn_main rounded add_to_cart"
                                    onClick={() => { console.log('button clicked') }}
                                    iconName={'card_buy'}
                                    children={<span className="btn_text">В корзину</span>}
                                />
                            </div>
                        </div>
                        <ProductCardDelivery />
                    </div>
                    
                </div>
            </div>
        </>
    );
}