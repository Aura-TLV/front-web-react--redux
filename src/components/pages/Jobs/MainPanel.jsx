import { useState } from "react";
import FormCandidate from "./MainPanelForms/FormCandidate";
import FormEmployer from "./MainPanelForms/FormEmployer";
import { useTranslation } from "react-i18next";

const MainPanel = () => {

    const { t } = useTranslation();

    const [isCandidate, setIsCandidate] = useState(true);

    const toggleCandidate = () => setIsCandidate(!isCandidate);

    return (
        <>
            <div className="container">
                <input type="checkbox" onChange={toggleCandidate} />
                {t('general.iAmCompany')}
            </div>

            {isCandidate ? <FormCandidate /> : <FormEmployer />}
        </>
    )
}

export default MainPanel