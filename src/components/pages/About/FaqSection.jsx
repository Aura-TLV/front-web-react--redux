// Импорт видео и постера
import companyVideo from '../../../assets/video/video-resume.mp4';
import companyVideoPoster from '../../../assets/img/company-video-img.png';

// Импорт стилей
import '../../../assets/styles/main.css';
// Импорт js
import '../../../assets/js/bootstrap.min.js';


const FaqSection = () => {
  return (
    <section>
        <div className="container py-5">
            <div className="row d-flex flex-column align-items-center flex-lg-row">
                <div className="col-lg-6">
                    <h1 className="mb-3">Часто задаваемые вопросы</h1>
                    <div className="accordion" role="tablist" id="accordion">
                        <div className="accordion-item">
                            <h2 className="accordion-header" role="tab"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion .item-1" aria-expanded="false" aria-controls="accordion .item-1">Я откликнулся на вакансию, какие дальнейшие действия?</button></h2>
                            <div className="accordion-collapse collapse item-1" role="tabpanel" data-bs-parent="#accordion">
                                <div className="accordion-body">
                                    <p className="mb-0">Пройдите небольшое собеседование с менеджером. Возможно будет необходимо выполнить тестовое задание, предложенное компанией.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" role="tab"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion .item-2" aria-expanded="false" aria-controls="accordion .item-2">Рассматриваете ли вы резюме граждан других стран?</button></h2>
                            <div className="accordion-collapse collapse item-2" role="tabpanel" data-bs-parent="#accordion">
                                <div className="accordion-body">
                                    <p className="mb-0">Пройдите небольшое собеседование с менеджером. Возможно будет необходимо выполнить тестовое задание, предложенное компанией.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" role="tab"><button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#accordion .item-3" aria-expanded="true" aria-controls="accordion .item-3">Есть ли помощь иногородним при переезде?</button></h2>
                            <div className="accordion-collapse collapse show item-3" role="tabpanel" data-bs-parent="#accordion">
                                <div className="accordion-body">
                                    <p className="mb-0">Да, у нас действует релокационная программа.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6" style={{borderRadius: '30px', borderBottomRightRadius: '30px', borderBottomLeftRadius: '30px'}}>
                <video 
        autoPlay 
        muted 
        controls 
        style={{ borderRadius: '30px' }} 
        poster={companyVideoPoster} 
        height="315" 
        width="560"
      >
        <source src={companyVideo} type="video/webm" />
        Your browser does not support the video tag.
      </video>
                </div>
            </div>
        </div>
    </section>
  );
}

export default FaqSection;
