
import { Fillials } from "../components/contactsPage/filials/Fillials";
import { Contacts } from "../components/contactsPage/contacts/Contacts";
import { Map } from "../components/contactsPage/map/Map";
import { Breadcrumbs } from "../components/breadcrumbs/Breadcrumbs";
import { FeedbackBanner } from "../components/banners/feedback_banner/FeedbackBanner";
export const ContactsPage = () => {
    return (
        <>
            <Breadcrumbs items={[
                { title: "Главная", link: "/" },
                { title: "Контакты", link: "/contacts" }
            ]} />
            <div className="container">
                <h1>Контакты</h1>
            </div>
            <Fillials />
            <Contacts />
            <Map />
            <FeedbackBanner />
        </>
    );
}