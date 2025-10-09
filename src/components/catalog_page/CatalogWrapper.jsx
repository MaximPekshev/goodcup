
import { Card } from "./Card";
import { useGetProductsQuery } from "../../redux/services/api";
import { useSearchParams } from "react-router";
export const CatalogWrapper = () => {

    const page = useSearchParams()[0].get('page') || 1;
    const { data: products, error, isLoading, isFetching } = useGetProductsQuery(page);

    if ( isLoading || isFetching ) {
        return (
            <div>Loading...</div>
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