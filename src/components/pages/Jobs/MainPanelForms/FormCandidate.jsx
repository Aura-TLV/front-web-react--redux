

const FormCandidate = () => {

    const submitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <form onSubmit={submitHandler}>

                <div className="row">
                    <div className="col-md-3">
                        <label htmlFor="login">Логин:</label>
                        <input id="login" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="eMail">Электронная почта:</label>
                        <input id="eMail" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="password">Пароль:</label>
                        <p><a id="password" href="#">Нажмите для сброса пароля</a></p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <label htmlFor="userName">Имя:</label>
                        <input id="userName" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="birthDate">Дата рождения:</label>
                        <input type="date" id="birthDate" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="city">Город проживания:</label>
                        <input id="city" placeholder="Хайфа" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <label htmlFor="phone">Телефон:</label>
                        <input id="phone" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="job">Какую вакансию вы ищете?</label>
                        <input id="job" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="status">Какие у Вас документы?</label>
                        <select id="status">
                            <option value="teudat-zeut">Израхут (гражданство)</option>
                            <option value="work-visa">Рабочая виза</option>
                            <option value="tour-visa">Туристическая виза</option>
                            <option value="blue-paper">Синяя бумага (5א)</option>
                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        Расскажите немного о себе:<br />
                        <textarea id="additionalInfo" style={{ resize: 'none', width: '100%' }} />
                    </div>
                </div>

                <div className="row">
                    Укажите дополнительные критерии:<br />
                    <div className="col-md-4">
                        Часы работы:
                        <input name="workingHours" type="checkbox" value={8} />8
                        <input name="workingHours" type="checkbox" value={10} />10
                        <input name="workingHours" type="checkbox" value={12} />12
                        <br />
                        Зарплата (в час):
                        <input name="wagePerHour" type="checkbox" value={33} />33+
                        <input name="wagePerHour" type="checkbox" value={40} />40+
                        <input name="wagePerHour" type="checkbox" value={50} />50+
                    </div>
                    <div className="col-md-4">
                        Подвозка:
                        <input name="driver" type="radio" />Да
                        <input name="driver" type="radio" />Не важно
                        <br />
                        Питание:
                        <input name="lunch" type="radio" />Да
                        <input name="lunch" type="radio" />Не важно
                        <br />
                    </div>
                    <div className="col-md-4">
                        Подвозка:
                        <input name="living" type="radio" />Да
                        <input name="living" type="radio" />Не важно
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <select name="contractType">
                            Тип трудоустройства:
                            <option name="asaka">Асака</option>
                            <option name="asama">Асама</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="cv">Ваше резюме (.doc, .docx, .pdf):</label>
                        <input type="file" id="cv" />
                    </div>
                    <div className="col-md-4">
                        <a href="https://docs.google.com/document/d/1pHJcD5KlHKN_4TbI2BYCKwwSauzYi8Hi/edit?usp=sharing&ouid=114572637345510374218&rtpof=true&sd=true" target="_blank">Скачать форму для резюме</a>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <button type="submit">Сохранить изменения</button>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default FormCandidate;