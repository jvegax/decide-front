import { CSSProperties, FC } from "react";
import PulseLoader from "react-spinners/PulseLoader";

const override: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "50vh",
};

type SpinnerProps = {
  color: string;
};
const SpinnerIndicator: FC<SpinnerProps> = ({ color }) => {
  return (
    <PulseLoader
      color={color}
      loading={true}
      cssOverride={override}
      size={30}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default SpinnerIndicator;
