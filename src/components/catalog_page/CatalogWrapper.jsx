
import { Card } from "./Card";
import { useGetProductsQuery } from "../../redux/services/api";
import { useSearchParams } from "react-router";
import { CardSkeleton } from "./CardSkeleton";
export const CatalogWrapper = () => {
    const page = useSearchParams()[0].get('page') || 1;
    const { data: products, error, isLoading, isFetching } = useGetProductsQuery(page);
    const loadingQuantityGoods = 25;
    
    if ( isLoading || isFetching ) {
        return (
            <div className="catalog_wrapper">
                <div className="cards_grid">
                    {Array.from({ length: loadingQuantityGoods }).map((_, index) => (
                        <CardSkeleton key={index} />
                    ))}
                </div>
            </div> 
        );
    };
    return (
        <div className="catalog_wrapper">
            <div className="cards_grid">
                {products.goods.map((item) => (
                    <Card key={item.id} {...item} />
                ))}
            </div>
        </div> 
    );
}