
const FormEmployer = () => {
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
            <label htmlFor="userName">Ваше Имя:</label>
            <input id="userName" />
          </div>
          <div className="col-md-3">
            <label htmlFor="companyName">Название компании:</label>
            <input id="companyName" />
          </div>
          <div className="col-md-3">
            <label htmlFor="companyType">Чем занимается компания:</label>
            <input id="companyType" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <label htmlFor="phone">Телефон:</label>
            <input id="phone" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <p>Ваши объявления:</p>
            <a href="#">Добавить</a>
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

export default FormEmployer;