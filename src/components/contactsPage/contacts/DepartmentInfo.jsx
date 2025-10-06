export const DepartmentInfo = ({ title, phones, email }) => {
    const cleanPhone = phone => `tel:+7${phone.slice(1).replace(/[^0-9]/g, "")}`;
    return (
        <>
            <h3>{title}</h3>
            <div className="column with_info">
                <div className="column_item">
                    <div className="title">Телефон</div>
                    <div className="info">
                        {phones.map((phone, index) => (
                            <a key={index} href={cleanPhone(phone)}>{phone}</a>
                        ))}
                    </div>
                </div>
                <div className="column_item">
                    <div className="title">Почта</div>
                    <div className="info">
                        <a href={`mailto:${email}`}>{email}</a>
                    </div>
                </div>
            </div>
        </>
    );
}
