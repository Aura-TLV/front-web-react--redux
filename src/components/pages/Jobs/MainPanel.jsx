import { useState } from "react";
import FormCandidate from "./MainPanelForms/FormCandidate";
import FormEmployee from "./MainPanelForms/FormEmployee";

const MainPanel = () => {

  // eslint-disable-next-line no-unused-vars
  const [isCandidate, setIsCandidate] = useState(true);

  return (
    <>
        {isCandidate ? <FormCandidate /> : <FormEmployee />}
    </>
  )
}

export default MainPanel