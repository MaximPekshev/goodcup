
import { Fillials } from "../components/contactsPage/Filials/Fillials";
import { Contacts } from "../components/contactsPage/Contacts/Contacts";
import { Map } from "../components/contactsPage/Map/Map";
export const ContactsPage = () => {
    return (
        <>
            <div class="container">
                <div class="breadcrumbs horizontal-scroll">
                    <a href="#">Главная</a>
                    <a href="#">Контакты</a>
                </div>
            </div>
            <div class="container">
                <h1>Контакты</h1>
            </div>
            <Fillials />
            <Contacts />
            <Map />
        </>
    );
}