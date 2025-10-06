export const DepartmentInfo = ({ title, phones, email }) => {
    const cleanPhone = phone => `tel:+7${phone.slice(1).replace(/[^0-9]/g, "")}`;
    return (
        <>
            <h3>{title}</h3>
            <div class="column with_info">
                <div class="column_item">
                    <div class="title">Телефон</div>
                    <div class="info">
                        {phones.map((phone, index) => (
                            <a key={index} href={cleanPhone(phone)}>{phone}</a>
                        ))}
                    </div>
                </div>
                <div class="column_item">
                    <div class="title">Почта</div>
                    <div class="info">
                        <a href={`mailto:${email}`}>{email}</a>
                    </div>
                </div>
            </div>
        </>
    );
}
