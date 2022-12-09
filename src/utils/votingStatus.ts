import { StatusType } from "../components/votingCard/types";
import { Voting } from "../components/votingList/types";

export const getVotingStatus = (voting: Voting): StatusType => {
  if (voting.end_date != null) {
    return "Finished";
  } else if (voting.start_date != null) {
    return "Started";
  } else {
    return "Pending";
  }
};
