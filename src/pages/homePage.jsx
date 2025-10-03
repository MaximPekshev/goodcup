import { MainBanner } from "../components/banners/main_banner/MainBanner";
import { MainBannerSmall } from "../components/banners/main_banner_small/MainBannerSmall";
import { Advantages } from "../components/advantages/Advantages";
import { AboutMain } from "../components/about_main/AboutMain";
import { FeedbackBanner } from "../components/banners/feedback_banner/FeedbackBanner";
import { CategoriesMain } from "../components/categories_main/CategoriesMain";
import { BlockRightSlider } from "../components/banners/block_right_slider/BlockRightSlider";
import { AccordionQuestions } from "../components/accordion_questions/AccordionQuestions";
export const HomePage = () => {
    return (
        <>
            <div className="container">
                <div className="main_banners">
                    <MainBanner />
                    <MainBannerSmall />
                </div>
            </div>
            <CategoriesMain />
            <Advantages />
            <BlockRightSlider />
            <AboutMain />
            <AccordionQuestions />
            <FeedbackBanner />
        </>
    );
}