import MainPanel from "./Jobs/MainPanel"
import QuestionsContacts from "./Jobs/QuestionsContacts"

const Jobs = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <MainPanel />
        </div>
        <div className="col-md-4">
          <QuestionsContacts />
        </div>
      </div>

    </div>
  )
}

export default Jobs