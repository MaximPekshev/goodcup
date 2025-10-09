import { Breadcrumbs } from "../breadcrumbs/Breadcrumbs";
import { CatalogHeader } from "./CatalogHeader";
import { CatalogWrapper } from "./CatalogWrapper";
import { Pagination } from "./Pagination";

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
                <div className="container">
                    <h1>Каталог</h1>
                    <CatalogWrapper />
                </div>
                <Pagination />
            </div>
        </>
    );
}