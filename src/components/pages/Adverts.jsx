import AdvertsList from "../Adverts/AdvertsList";
import AdvertsSearch from "../Adverts/AdvertsSearch";

const Adverts = () => {
  return (
    <div className="row">
      <div className="col-md-3">
        <AdvertsSearch />
      </div>
      <div className="col-md-9">
        <AdvertsList />
      </div>
    </div>
  )
}

export default Adverts;