import sprite from '../../assets/img/icons/sprites/sprite.svg';
import './accordion.css';


export const AccordionQuestions = ({ title, questions, onToggle }) => {
    return (
        <section>
            <div className="container">
                {title && <h2>{title}</h2>}
                <div className="accordion">
                    {questions && questions.map((item, index) => {
                        return (
                            <div className="accordion-item" onClick={() => onToggle(index)} key={item.key}>
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