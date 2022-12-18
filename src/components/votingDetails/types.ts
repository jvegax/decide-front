import { Voting } from "../votingCard/types";

export type Props = {
    votacion: Voting | null;
    loading: boolean;
}

export type OptionProps = {
    chosen: boolean;
  };