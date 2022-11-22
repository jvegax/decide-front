import { FC } from "react";
import { Props } from "./types";

const VotingDetails: FC<Props> = ({ votacion }) => {
  return (
    <div>
      <h1>{votacion.name}</h1>
    </div>
  );
};

export default VotingDetails;
