import { NavLink } from "react-router";
export const Breadcrumbs = ({ items }) => {
    return (
        <div className="container">
            <div className="breadcrumbs horizontal-scroll">
                {items.map((item, index) => (
                    <NavLink to={item.link} key={index}>{item.title}</NavLink>
                ))}
            </div>
        </div>
    );
}