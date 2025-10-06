
import { Breadcrumbs } from '../components/breadcrumbs/Breadcrumbs';
import { AccordionQuestions } from '../components/accordion_questions/AccordionQuestions';
import { useState } from 'react';

const DELIVERY_STATE = [
  {
    key: '1',
    question: 'Как рассчитать стоимость доставки через ТК?',
    answer: 'Расчет доставки можно сделать на сайте выбранной транспортной компании',
    isActive: true
  },
  {
    key: '2',
    question: 'В течение какого времени можно получить заказ?',
    answer: 'Сроки доставки зависят от выбранной транспортной компании и вашего региона.',
    isActive: false
  },
  {
    key: '3',
    question: 'Как проверить статус доставки заказа?',
    answer: 'Для проверки статуса доставки заказа вы можете использовать трек-номер, предоставленный транспортной компанией, на их сайте.',
    isActive: false
  },
  {
    key: '4',
    question: 'Можно ли выбрать доставку через компанию партнера?',
    answer: 'Да, вы можете выбрать доставку через компанию-партнера, если она доступна для вашего региона.',
    isActive: false
  }
];

const PAYMENT_STATE = [
  {
    key: '1',
    question: 'Как происходит оплата?',
    answer: 'Оплата происходит через выбранный вами способ: банковская карта, электронные деньги и т.д.',
    isActive: true
  },
  {
    key: '2',
    question: 'В течение какого времени можно получить заказ?',
    answer: 'Сроки доставки зависят от выбранной транспортной компании и вашего региона.',
    isActive: false
  },
  {
    key: '3',
    question: 'Как проверить статус доставки заказа?',
    answer: 'Для проверки статуса доставки заказа вы можете использовать трек-номер, предоставленный транспортной компанией, на их сайте.',
    isActive: false
  },
  {
    key: '4',
    question: 'Можно ли выбрать доставку через компанию партнера?',
    answer: 'Да, вы можете выбрать доставку через компанию-партнера, если она доступна для вашего региона.',
    isActive: false
  }
];

export const PaymentDeliveryPage = () => {
    const [activeTab, setActiveTab] = useState('delivery');
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    const [deliveryQuestions, setDeliveryQuestions] = useState(DELIVERY_STATE);
    const [paymentQuestions, setPaymentQuestions] = useState(PAYMENT_STATE);

    const toggleDeliveryActive = (index) => {
        const newArray = deliveryQuestions.map((item, idx) => {
            if (idx === index) {
                return { ...item, isActive: !item.isActive };
            } else {
                return { ...item, isActive: false };
            }
        });
        setDeliveryQuestions(newArray);
    };
    const togglePaymentActive = (index) => {
        const newArray = paymentQuestions.map((item, idx) => {
            if (idx === index) {
                return { ...item, isActive: !item.isActive };
            } else {
                return { ...item, isActive: false };
            }
        });
        setPaymentQuestions(newArray);
    };

    return (
        <>
            <Breadcrumbs items={[
                { title: "Главная", link: "/" },
                { title: "Оплата и доставка", link: "/delivery" }
            ]} />
            <div className="container">
                <h1>Оплата и доставка</h1>
                <div className="tabs-container">
                    <div className="tabs horizontal-scroll bottom_line">
                        <div 
                            onClick={() => handleTabClick('delivery')} 
                            className={`tab-header ${activeTab === 'delivery' ? 'active' : ''}`}
                        >
                            Доставка
                        </div>
                        <div 
                            onClick={() => handleTabClick('payment')} 
                            className={`tab-header ${activeTab === 'payment' ? 'active' : ''}`}
                        >
                            Оплата
                        </div>
                    </div>
                    <div className="tab-content-wrapper">
                        <div 
                            className={`tab-content ${activeTab === 'delivery' ? 'active' : ''}`}
                        >
                            <AccordionQuestions 
                                questions={deliveryQuestions} 
                                onToggle={toggleDeliveryActive}
                            />
                        </div>
                        <div 
                            className={`tab-content ${activeTab === 'payment' ? 'active' : ''}`}
                        >
                            <AccordionQuestions 
                                questions={paymentQuestions}
                                onToggle={togglePaymentActive}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}