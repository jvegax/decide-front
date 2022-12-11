import { Voting } from "../votingCard/types";

export type Props = {
    votacion: Voting | null;
}

export type OptionProps = {
    chosen: boolean;
  };