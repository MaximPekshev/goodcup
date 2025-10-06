import { Button } from '../../button/Button';
import { DepartmentInfo } from './DepartmentInfo';

const departments = [
    {id: 1, title: "Отдел продаж", phones: ["8 (800) 551-96-08", "8 (968) 477-13-57"], email: "market@goodcup.ru" },
    {id: 2, title: "Отдел закупок", phones: ["8 (800) 551-96-08", "8 (968) 477-13-57"], email: "market@goodcup.ru" },
    {id: 3, title: "Отдел снабжения", phones: ["8 (800) 551-96-08", "8 (968) 477-13-57"], email: "market@goodcup.ru" }
]

export const Contacts = () => {
    return (
        <>    
            <div class="container">
                <div class="contacts_rows">
                    <div class="contacts_row contacts_row_main">
                        <div class="column">
                            <h2>Связаться с нами</h2>
                        </div>
                    <div class="subwrapper">
                        {departments.map((dept, index) => (
                            <>
                                <DepartmentInfo
                                    key={dept.id}
                                    title={dept.title}
                                    phones={dept.phones}
                                    email={dept.email}
                                />
                                {index < departments.length - 1 && <hr />}
                            </>
                        ))}

                        </div>
                    </div>
                    <div class="contacts_row contacts_row_main">
                        <div class="column">
                            <h2>Реквизиты</h2>
                        </div>
                        <div class="column">
                            <Button 
                                className="btn_main btn_details"
                                onClick={() => {console.log('Скачать реквизиты');}}
                                children="скачать реквизиты"
                                iconName="download"
                            />
                        </div>
                    </div>
                    <div class="contacts_row">
                        <div class="column">
                            <h4 class="row_name">Юридический адрес</h4>
                        </div>
                        <div class="column">
                            <p class="row_value">308510 Россия, Белгородская область, Белгородский р-он, п. Разумное, ул. Филиппова д. 14 кв.57</p>
                        </div>
                    </div>
                    <div class="contacts_row">
                        <div class="column">
                            <h4 class="row_name">Почтовый адрес</h4>
                        </div>
                        <div class="column">
                            <p class="row_value">308510 Россия, Белгородская область, Белгородский р-он, п. Разумное, ул. Филиппова д.14 кв.57</p>
                        </div>
                    </div>
                    <div class="contacts_row">
                        <div class="column">
                            <h4 class="row_name">Фактический адрес обособленного подразделения в г. Белгород</h4>
                        </div>
                        <div class="column">
                            <p class="row_value">308009 Россия, Белгородская область, г. Белгород, ул. Дзгоева, д. 4а</p>
                        </div>
                    </div>
                    <div class="contacts_row">
                        <div class="column">
                            <h4 class="row_name">Должность, Ф.И.О. единоличного исполнительного органа юр. лица</h4>
                        </div>
                        <div class="column">
                            <p class="row_value">Директор Ильиных Николай Юрьевич</p>
                        </div>
                    </div>
                    <div class="contacts_row">
                        <div class="column">
                            <h4 class="row_name">ИНН/КПП</h4>
                        </div>
                        <div class="column">
                            <p class="row_value">3102019905/310201001</p>
                        </div>
                    </div>
                    <div class="contacts_row">
                        <div class="column">
                            <h4 class="row_name">ОГРН</h4>
                        </div>
                        <div class="column">
                            <p class="row_value">1053100516545</p>
                        </div>
                    </div>
                    <div class="contacts_row">
                        <div class="column">
                            <h4 class="row_name">ОКПО</h4>
                        </div>
                        <div class="column">
                            <p class="row_value">78152254</p>
                        </div>
                    </div>
                    <div class="contacts_row">
                        <div class="column">
                            <h4 class="row_name">ОКВЭД</h4>
                        </div>
                        <div class="column">
                            <p class="row_value">17.22 Производство бумажных изделий хозяйственно-бытового и санитарно-гигиенического назначения</p>
                        </div>
                    </div>
                    <div class="contacts_row">
                        <div class="column">
                            <h4 class="row_name">Банковские реквизиты (наименование и адрес банка, номер расчетного счета)</h4>
                        </div>
                        <div class="column">
                            <p class="row_value">р/счет: 40702810809740001919 к/счет: 30101810145250000411 БИК: 044525411</p>
                        </div>
                    </div>
                    <div class="contacts_row">
                        <div class="column">
                            <h4 class="row_name">Банк</h4>
                        </div>
                        <div class="column">
                            <p class="row_value">ФИЛИАЛ «Центральный» банка ВТБ (ПАО)</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}