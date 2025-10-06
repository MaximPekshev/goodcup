import { MainBanner } from "../components/banners/main_banner/MainBanner";
import { MainBannerSmall } from "../components/banners/main_banner_small/MainBannerSmall";
import { Advantages } from "../components/advantages/Advantages";
import { AboutMain } from "../components/about_main/AboutMain";
import { FeedbackBanner } from "../components/banners/feedback_banner/FeedbackBanner";
import { CategoriesMain } from "../components/categories_main/CategoriesMain";
import { BlockRightSlider } from "../components/banners/block_right_slider/BlockRightSlider";
import { AccordionQuestions } from "../components/accordion_questions/AccordionQuestions";
import { useState } from 'react';

const GLASS_QUESTIONS = [
  {
    key: '1',
    question: 'Как правильно выбирать стаканчики?',
    answer: 'При производстве и продаже бумажных стаканчиков мы обеспечиваем наших клиентов продукцией высокого качества по доступным ценам. Вы можете заказать и купить бумажные стаканы для горячих напитков и других продуктов в Москве и по всей России.',
    isActive: true
  },
  {
    key: '2',
    question: 'Каких объемов бывают стаканчики?',
    answer: 'Содержимое 2',
    isActive: false
  },
  {
    key: '3',
    question: 'Чем отличаются стаканчики для кофе от стаканчиков для чая?',
    answer: 'Стаканчики для кофе обычно имеют двойные стенки для сохранения тепла, в то время как стаканчики для чая могут быть более тонкими и легкими.',
    isActive: false
  }
];

export const HomePage = () => {
    const [array, setArray] = useState(GLASS_QUESTIONS);

    const toggleActive = (index) => {
        const newArray = array.map((item, idx) => {
            if (idx === index) {
                return { ...item, isActive: !item.isActive };
            } else {
                return { ...item, isActive: false };
            }
        });
        setArray(newArray);
    };
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
            <AccordionQuestions
                title="Вопрос-ответ"
                questions={array}
                onToggle={toggleActive}
            />
            <FeedbackBanner />
        </>
    );
}