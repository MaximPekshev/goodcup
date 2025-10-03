import { Outlet } from "react-router";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
export const Layout = () => {
    return (
        <div className="page_wrapper">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}