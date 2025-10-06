import { AboutHead } from "../components/about_page/about_head/AboutHead";
import { ShortInfo } from "../components/about_page/short_info/ShortInfo";
import { AboutMap } from "../components/about_page/about_map/AboutMap";
import { Delivery } from "../components/delivery/Delivery";
import { Production } from "../components/production/Production";
import { PartnerInlineForm } from "../components/partner_inline_form/PartterInlineForm";
export const AboutPage = () => {
    return (
        <>
            <AboutHead />
            <ShortInfo />
            <AboutMap />
            <Delivery />
            <Production />
            <PartnerInlineForm />
        </>
    );
}