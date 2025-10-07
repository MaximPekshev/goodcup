import { Breadcrumbs } from "../breadcrumbs/Breadcrumbs";
import { CatalogHeader } from "./CatalogHeader";
import { Card } from "./Card";
import { Button } from "../button/Button";
export const Catalog = () => {
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
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
                <Button 
                    className={"btn_main mx-a more"}
                    children={"Показать еще"}
                    onClick={() => {console.log('click Показать еще');}}
                    iconName={"arrow-right"}
                />
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