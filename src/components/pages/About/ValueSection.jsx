// Импорт стилей
import '../../../assets/styles/main.css';

const ValueSection = () => {
  return (
    <section>
      <div className="container py-4">
        <div className="row">
          <div className="col-12">
            <h1 className="mb-3">Мы предлагаем</h1>
          </div>
          <div className="col-12 col-lg-4 py-3">
            <div className="d-inline-flex">
              <div className="rounded-5 me-3" style={{ background: 'linear-gradient(20deg, #1F6586, #2D92BE)', height: '116px', minWidth: '24px', maxWidth: '32px' }}></div>
              <div className="d-flex flex-column justify-content-between">
                <h4 style={{ color: '#1F6586' }}>Поиск вакансий:</h4>
                <p>Анализ рынка труда и подбор вакансий, соответствующим вашим навыкам и опыту работы.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-8 py-3">
            <div className="d-inline-flex">
              <div className="rounded-5 me-3" style={{ background: 'linear-gradient(20deg, #DB8113, #F6A308 100%)', height: '116px', minWidth: '24px', maxWidth: '32px' }}></div>
              <div className="d-flex flex-column justify-content-between">
                <h4 style={{ color: '#DB8113' }}>Помощь с документами:</h4>
                <div className="d-inline-flex flex-column flex-md-row">
                  <div>
                    <p>Оформление необходимых документов для работы и проживания.</p>
                  </div>
                  <div>
                    <p>Подготовка и сопровождение процесса получения визы и разрешения на работу.</p>
                  </div>
                  <div>
                    <p>Консультации по правовым аспектам трудоустройства и легализации работы.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 py-3">
            <div className="d-inline-flex">
              <div className="rounded-5 me-3" style={{ background: 'linear-gradient(20deg, #252D75, #3336BF)', height: '116px', minWidth: '24px', maxWidth: '32px' }}></div>
              <div className="d-flex flex-column justify-content-between">
                <h4 style={{ color: '#252D75' }}>Предоставление временного жилья:</h4>
                <p>Поиск и аренда временного жилья на период адаптации.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 py-3">
            <div className="d-inline-flex">
              <div className="rounded-5 me-3" style={{ background: 'linear-gradient(20deg, #D9480A, #F38317)', height: '116px', minWidth: '24px', maxWidth: '32px' }}></div>
              <div className="d-flex flex-column justify-content-between">
                <h4 style={{ color: '#D9480A' }}>Обучение:</h4>
                <p>Обучение в компании поддерживает высокий уровень квалификации сотрудников и улучшает качество работы.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 py-3">
            <div className="d-inline-flex">
              <div className="rounded-5 me-3" style={{ background: 'linear-gradient(20deg, #A72436, #E03443)', height: '116px', minWidth: '24px', maxWidth: '32px' }}></div>
              <div className="d-flex flex-column justify-content-between">
                <h4 style={{ color: '#A72436' }}>Комфортные условия:</h4>
                <p>Официальное трудоустройство и работа по трудовому договору. Социальные гарантии и белая зарплата</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 py-3">
            <div className="d-inline-flex">
              <div className="rounded-5 me-3" style={{ background: 'linear-gradient(20deg, #2D529C, #3B7DC8)', height: '116px', minWidth: '24px', maxWidth: '32px' }}></div>
              <div className="d-flex flex-column justify-content-between">
                <h4 style={{ color: '#2D529C' }}>График и часы:</h4>
                <p>Гибкий график работы дает возможность управлять своим временем более эффективно и подходит для студентов.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 py-3">
            <div className="d-inline-flex">
              <div className="rounded-5 me-3" style={{ background: 'linear-gradient(20deg, #8D4234, #C65E48)', height: '116px', minWidth: '24px', maxWidth: '32px' }}></div>
              <div className="d-flex flex-column justify-content-between">
                <h4 style={{ color: '#8D4234' }}>Здоровье:</h4>
                <p>Дополнительные оздоровительные программы в медучреждениях с повышенным уровнем комфорта.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ValueSection;
