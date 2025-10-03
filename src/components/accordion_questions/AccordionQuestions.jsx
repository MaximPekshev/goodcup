import sprite from '../../assets/img/icons/sprites/sprite.svg';
import './accordion.css';
import { useState } from 'react';

const DEFAULT_STATE = [
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

export const AccordionQuestions = () => {

    const [array, setArray] = useState(DEFAULT_STATE);
    
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
        <section>
            <div className="container">
                <h2>Вопрос-ответ</h2>
                <div className="accordion">
                    {array.map((item, index) => {
                        return (
                            <div className="accordion-item" onClick={() => toggleActive(index)} key={item.key}>
                                <div className={`accordion-header`}>
                                    <div className="accordion-header-text">{item.question}</div>
                                    <div className="accordion-header-btn">
                                        <svg>
                                            <use xlinkHref={`${sprite}#${item.isActive ? 'arrow-up' : 'arrow-down'}`}></use>
                                        </svg>
                                    </div>
                                </div>
                                <div className="accordion-content" style={{ display: item.isActive ? 'block' : 'none' }}>
                                    <div className="accordion-wrapper">
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}