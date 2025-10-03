import { AboutHead } from "../components/aboutPage/about_head/AboutHead";
import { ShortInfo } from "../components/aboutPage/short_info/ShortInfo";
import { AboutMap } from "../components/aboutPage/about_map/AboutMap";
import { Delivery } from "../components/delivery/Delivery";
import { Production } from "../components/production/Production";
export const AboutPage = () => {
    return (
        <>
            <AboutHead />
            <ShortInfo />
            <AboutMap />
            <Delivery />
            <Production />
        </>
    );
}