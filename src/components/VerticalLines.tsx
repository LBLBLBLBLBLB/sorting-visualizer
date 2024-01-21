import { VerticalLinesProps } from "../types/interfaces";

const VerticalLines: React.FC<VerticalLinesProps> = ({
  values,
  swappingIndices,
}) => {
  return (
    <div className="flex text-center">
      {values.map((value: number, i: number) => {
        let heightMultiplier = 2;

        if (value > 15) {
          heightMultiplier = 1.7;
        } else if (value > 20) {
          heightMultiplier = 1.4;
        } else if (value > 25) {
          heightMultiplier = 1.2;
        } else if (value > 30) {
          heightMultiplier = 0.8;
        }

        return (
          <div
            key={i}
            className={`rounded-sm  ${
              swappingIndices.includes(i) ? "bg-rose-600" : "bg-teal-500"
            } mr-4`}
            style={{ width: "2rem", height: `${value * heightMultiplier}rem` }}
          >
            {value}
          </div>
        );
      })}
    </div>
  );
};

export default VerticalLines;
