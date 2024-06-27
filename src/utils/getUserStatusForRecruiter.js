import { UserStatuses, UserStatusesForRecruiter } from "../enums/UserStatusesEnum.js";

const getUserStatusForRecruiter = (status) => {
    switch (status){
        case UserStatuses.TeudatZeut:
            return UserStatusesForRecruiter.TeudatZeut;
        case UserStatuses.WorkVisa:
            return UserStatusesForRecruiter.WorkVisa;
        case UserStatuses.TourVisa:
            return UserStatusesForRecruiter.TourVisa;
        case UserStatuses.BluePaper:
        default:
            return UserStatusesForRecruiter.BluePaper;
    }
        
};

export default getUserStatusForRecruiter;