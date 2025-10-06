import { Button } from '../../button/Button';
import { DepartmentInfo } from './DepartmentInfo';
import { Fragment } from 'react';

const departments = [
    {id: 1, title: "Отдел продаж", phones: ["8 (800) 551-96-08", "8 (968) 477-13-57"], email: "market@goodcup.ru" },
    {id: 2, title: "Отдел закупок", phones: ["8 (800) 551-96-08", "8 (968) 477-13-57"], email: "market@goodcup.ru" },
    {id: 3, title: "Отдел снабжения", phones: ["8 (800) 551-96-08", "8 (968) 477-13-57"], email: "market@goodcup.ru" }
]

export const Contacts = () => {
    return (
        <>    
            <div className="container">
                <div className="contacts_rows">
                    <div className="contacts_row contacts_row_main">
                        <div className="column">
                            <h2>Связаться с нами</h2>
                        </div>
                    <div className="subwrapper">
                        {departments.map((dept, index) => (
                            <Fragment key={dept.id}>
                                <DepartmentInfo
                                    title={dept.title}
                                    phones={dept.phones}
                                    email={dept.email}
                                />
                                {index < departments.length - 1 && <hr />}
                            </Fragment>
                        ))}

                        </div>
                    </div>
                    <div className="contacts_row contacts_row_main">
                        <div className="column">
                            <h2>Реквизиты</h2>
                        </div>
                        <div className="column">
                            <Button
                                className="btn_main btn_details"
                                onClick={() => {console.log('Скачать реквизиты');}}
                                children="скачать реквизиты"
                                iconName="download"
                            />
                        </div>
                    </div>
                    <div className="contacts_row">
                        <div className="column">
                            <h4 className="row_name">Юридический адрес</h4>
                        </div>
                        <div className="column">
                            <p className="row_value">308510 Россия, Белгородская область, Белгородский р-он, п. Разумное, ул. Филиппова д. 14 кв.57</p>
                        </div>
                    </div>
                    <div className="contacts_row">
                        <div className="column">
                            <h4 className="row_name">Почтовый адрес</h4>
                        </div>
                        <div className="column">
                            <p className="row_value">308510 Россия, Белгородская область, Белгородский р-он, п. Разумное, ул. Филиппова д.14 кв.57</p>
                        </div>
                    </div>
                    <div className="contacts_row">
                        <div className="column">
                            <h4 className="row_name">Фактический адрес обособленного подразделения в г. Белгород</h4>
                        </div>
                        <div className="column">
                            <p className="row_value">308009 Россия, Белгородская область, г. Белгород, ул. Дзгоева, д. 4а</p>
                        </div>
                    </div>
                    <div className="contacts_row">
                        <div className="column">
                            <h4 className="row_name">Должность, Ф.И.О. единоличного исполнительного органа юр. лица</h4>
                        </div>
                        <div className="column">
                            <p className="row_value">Директор Ильиных Николай Юрьевич</p>
                        </div>
                    </div>
                    <div className="contacts_row">
                        <div className="column">
                            <h4 className="row_name">ИНН/КПП</h4>
                        </div>
                        <div className="column">
                            <p className="row_value">3102019905/310201001</p>
                        </div>
                    </div>
                    <div className="contacts_row">
                        <div className="column">
                            <h4 className="row_name">ОГРН</h4>
                        </div>
                        <div className="column">
                            <p className="row_value">1053100516545</p>
                        </div>
                    </div>
                    <div className="contacts_row">
                        <div className="column">
                            <h4 className="row_name">ОКПО</h4>
                        </div>
                        <div className="column">
                            <p className="row_value">78152254</p>
                        </div>
                    </div>
                    <div className="contacts_row">
                        <div className="column">
                            <h4 className="row_name">ОКВЭД</h4>
                        </div>
                        <div className="column">
                            <p className="row_value">17.22 Производство бумажных изделий хозяйственно-бытового и санитарно-гигиенического назначения</p>
                        </div>
                    </div>
                    <div className="contacts_row">
                        <div className="column">
                            <h4 className="row_name">Банковские реквизиты (наименование и адрес банка, номер расчетного счета)</h4>
                        </div>
                        <div className="column">
                            <p className="row_value">р/счет: 40702810809740001919 к/счет: 30101810145250000411 БИК: 044525411</p>
                        </div>
                    </div>
                    <div className="contacts_row">
                        <div className="column">
                            <h4 className="row_name">Банк</h4>
                        </div>
                        <div className="column">
                            <p className="row_value">ФИЛИАЛ «Центральный» банка ВТБ (ПАО)</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}