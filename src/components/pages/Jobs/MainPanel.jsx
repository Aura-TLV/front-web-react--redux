import { useState } from "react";
import FormCandidate from "./MainPanelForms/FormCandidate";
import FormEmployer from "./MainPanelForms/FormEmployer";

const MainPanel = () => {

  // eslint-disable-next-line no-unused-vars
  const [isCandidate, setIsCandidate] = useState(true);

  return (
    <>
        {isCandidate ? <FormCandidate /> : <FormEmployer />}
    </>
  )
}

export default MainPanel