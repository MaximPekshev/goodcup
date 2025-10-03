import sprite from '../../assets/img/icons/sprites/sprite.svg';
import { Button } from '../button/Button';
export const PartnerInlineForm = () => {
    return (
        <section>
            <div className="container">
                <div className="join_form">
                    <h2>Уже более <span>1000 партнеров</span> сотрудничают с нами.
                        <span>Присоединяйтесь!</span>
                    </h2>
                    <form>
                    <fieldset className="text">
                        <input type="text" name="name" placeholder="Имя*" required />
                    </fieldset>
                    <fieldset className="text">
                        <input type="text" name="phone" placeholder="Телефон*" required />
                    </fieldset>
                    <fieldset className="text">
                        <input type="text" name="email" placeholder="Почта" />
                    </fieldset>
                    <div className="form_actions">
                        <label className="agree">
                            <input type="checkbox" name="agree" required />
                            <span>нажимая кнопку вы соглашаетесь согласие на обработку персональных данных</span>
                        </label>
                        <Button
                            className="btn_main"
                            children='Оставить заявку'
                            onClick={(e) => {  e.preventDefault(); console.log('Заявка отправлена'); }}
                            iconName={'arrow-right'}
                        />
                    </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
