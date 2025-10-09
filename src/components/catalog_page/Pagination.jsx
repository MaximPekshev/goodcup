import { NavLink } from "react-router";
import { Button } from "../button/Button";
import { useState, useEffect } from "react";
import styles from './pagination.module.css';
import { useSearchParams } from "react-router";
import { useGetProductsQuery } from "../../redux/services/api";
import { PaginationSkeleton } from "./PaginationSkeleton";

export const Pagination = () => {

    const qtyOnPage = 25;
    const page = useSearchParams()[0].get('page') || 1;
    const { data: products, error, isLoading, isFetching } = useGetProductsQuery(page);
    
    const [count, setCount] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const [ pagesBefore, setPagesBefore ] = useState([]);
    const [ pagesAfter, setPagesAfter ] = useState([]);

    const calculateTotalPages = () => {
        if (count % qtyOnPage > 0) {
            setTotalPages(Math.floor(count / qtyOnPage) + 1);
        } else {
            setTotalPages(count / qtyOnPage);
        }
    };

    const calculatePagination = () => {
        const before = [];
        const after = [];
        for (let i = 1; i <= totalPages; i++) {
            if (i < page) {
                before.push(i);
            } else if (i > page) {
                after.push(i);
            }
        }
        setPagesBefore(before.slice(-2));
        setPagesAfter(after.slice(0, 2));
    };

    useEffect(() => {
        if (!isLoading && !error) {
            calculateTotalPages();
            calculatePagination();
            setCount(products.count || 0);
        }
    }, [isLoading, error, page, totalPages]);


    if ( isLoading || isFetching ) {
        return <PaginationSkeleton />;
    };

    return (
        <>
        <div className="pagination">
            <Button
                className={"prev"}
                onClick={() => { console.log('click prev'); }}
                iconName={"arrow-left"}
            />
            { page > 3 &&
                <NavLink key={1} to={`?page=1`} className={styles.link}>
                    <Button
                        className={"pagination__item"}
                        children={"1"}
                    />
                </NavLink>
            }
            { page > 4 && 
                <Button
                    className={"pagination__item pagination__separator"}
                    children={"..."}
                />
            }
            { pagesBefore.length > 0 && pagesBefore.map((p) => (
                <NavLink key={p} to={`?page=${p}`} className={styles.link}>
                    <Button
                        className={"pagination__item"}
                        children={p}
                    />
                </NavLink>
            )) }
            <Button
                className={"pagination__item active"}
                children={page}
            />
            { pagesAfter.length > 0 && pagesAfter.map((p) => (
                <NavLink key={p} to={`?page=${p}`} className={styles.link}>
                    <Button
                        className={"pagination__item"}
                        children={p}
                    />
                </NavLink>
            )) }
            { totalPages - page > 3 &&
                <Button
                    className={"pagination__item pagination__separator"}
                    children={"..."}
                />
            }
            { totalPages - page > 2 &&
                <NavLink key={totalPages} to={`?page=${totalPages}`} className={styles.link}>
                    <Button
                        className={"pagination__item"}
                        children={totalPages}
                    />
                </NavLink>
            }
            <Button
                className={"next"}
                onClick={() => { console.log('click next'); }}
                iconName={"arrow-right"}
            />
        </div>
        </>
    );
}