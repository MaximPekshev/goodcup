import { Breadcrumbs } from "../breadcrumbs/Breadcrumbs";
import { CatalogHeader } from "./CatalogHeader";
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
            </div>
        </>
    );
}