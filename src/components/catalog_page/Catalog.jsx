import { Breadcrumbs } from "../breadcrumbs/Breadcrumbs";
import { CatalogHeader } from "./CatalogHeader";
import { Card } from "./Card";
import { Button } from "../button/Button";
import { useGetProductsQuery } from "../../redux/services/api";
import { useSearchParams } from "react-router";
export const Catalog = () => {
    const page = useSearchParams()[0].get('page') || 1;
    const { data: sampleGoods, error, isLoading } = useGetProductsQuery(page);
    const count = sampleGoods?.count || 0;

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading products</div>;

    return (
        <>
            <Breadcrumbs
                items={[
                    { title: 'Главная', link: '/' },
                    { title: 'Каталог', link: '/catalog' }
                ]}
            />
            <div className="container">
                <h1>Каталог</h1>
                <CatalogHeader />
                <hr />
                <div className="catalog_wrapper">
                    <div className="cards_grid">
                        {sampleGoods.goods.map((item) => (
                            <Card key={item.id} {...item} />
                        ))}
                    </div>
                </div>
                <div className="pagination">
                    <Button
                        className={"prev"}
                        onClick={() => { console.log('click prev'); }}
                        iconName={"arrow-left"}
                    />
                    <Button
                        className={"pagination__item active"}
                        onClick={() => { console.log('click page'); }}
                        children={"1"}
                    />
                    <Button
                        className={"pagination__item"}
                        onClick={() => { console.log('click page'); }}
                        children={"2"}
                    />
                    <Button
                        className={"pagination__item"}
                        onClick={() => { console.log('click page'); }}
                        children={"3"}
                    />
                    <Button
                        className={"pagination__item"}
                        onClick={() => { console.log('click page'); }}
                        children={"4"}
                    />
                    <Button
                        className={"pagination__item"}
                        onClick={() => { console.log('click page'); }}
                        children={"5"}
                    />
                    <Button
                        className={"pagination__item pagination__separator"}
                        onClick={() => { console.log('click page'); }}
                        children={"..."}
                    />
                    <Button
                        className={"pagination__item"}
                        onClick={() => { console.log('click page'); }}
                        children={"35"}
                    />
                    <Button
                        className={"next"}
                        onClick={() => { console.log('click next'); }}
                        iconName={"arrow-right"}
                    />
                </div>
            </div>
        </>
    );
}