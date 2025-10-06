import { NavLink } from "react-router";
export const Breadcrumbs = ({ items }) => {
    return (
        <div class="container">
            <div class="breadcrumbs horizontal-scroll">
                {items.map((item, index) => (
                    <NavLink to={item.link} key={index}>{item.title}</NavLink>
                ))}
            </div>
        </div>
    );
}