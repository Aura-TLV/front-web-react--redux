import { useEffect, useState } from "react";
import Advert from "./AdvertsList/Advert"
import { getJobs } from "../../../utils/fetcher";

const AdvertsList = () => {

  const [jobAdverts, setJobAdverts] = useState(null);

  useEffect(() => {
    getJobs().then((response) => setJobAdverts(response.jobs))
  }, []);

  return (
    <>
      {jobAdverts && jobAdverts.map((dataItem, index) => {

        const dataItemFormatted = {
          number: index, //dataItem._id,
          name: dataItem.title.he,
          city: 'Hadera',
          wagePerHour: dataItem.wagePerHour,
          workingHoursStart: dataItem.workingHours[0].start,
          workingHoursEnd: dataItem.workingHours[0].finish,
          driver: dataItem.driverToWork,
          morningShift: `${dataItem.workingHours[0].start}:00`,
          nightShift: `${dataItem.workingHours[0].finish}:00`,
          workBreak: dataItem.break,
          images: dataItem.images,
          lunch: dataItem.lunch,
          living: true,
          bonuses: dataItem.bonuses.length > 0,
          additionalInfo: dataItem.additionalInfo
        }

        return <Advert key={index} data={dataItemFormatted} />
      })}
    </>
  )
}

export default AdvertsList;