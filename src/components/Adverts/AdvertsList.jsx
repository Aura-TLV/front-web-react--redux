import Advert from "./AdvertsList/Advert"
import mockData from "./mockData";

const AdvertsList = () => {
  return (
    <>
        {mockData.map((mockDataItem, index) => {
            return <Advert key={index} data={mockDataItem} />
        })}
    </>
  )
}

export default AdvertsList;