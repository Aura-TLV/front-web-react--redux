// Импорт изображений
import companyImg4 from '../../../assets/img/bg-gradient-blue.png';

// Импорт стилей
import '../../../assets/styles/main.css';


const HowSection = () => {
  return (
    <section>
        <div className="container p-4 rounded-2" style={{ background: `url(${companyImg4}) center / cover no-repeat, #2D92BE` }}>
            <div className="row">
                <div className="col-12">
                    <h1 className="text-white mb-3">Как это работает</h1>
                </div>
                <div className="col d-flex flex-column flex-lg-column flex-xxl-row container">
                    <div className="d-flex flex-column flex-lg-row custom-flex-container">
                        <div className="mx-2">
                            <h4 className="text-white">1. Отклик</h4>
                            <p className="text-white">Заполните форму обратной связи на сайте.</p>
                        </div>
                        <div className="mx-2">
                            <h4 className="text-white">2. Собеседование</h4>
                            <p className="text-white">Пройдите небольшое собеседование с менеджером.</p>
                        </div>
                    </div>
                    <div className="d-flex flex-column flex-lg-row custom-flex-container">
                        <div className="mx-2">
                            <h4 className="text-white">3. Тестовое задание</h4>
                            <p className="text-white">Возможно будет необходимо выполнить тестовое задание, предложенное компанией.</p>
                        </div>
                        <div className="mx-2">
                            <h4 className="text-white">4. Работа</h4>
                            <p className="text-white">Приступайте к работе после успешного выполнения тестового задания.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default HowSection;
