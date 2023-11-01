import { VerticalLinesProps } from "../types/interfaces";

const VerticalLines: React.FC<VerticalLinesProps> = ({
  values,
  swappingIndices,
}) => {
  return (
    <div className="flex text-center">
      {values.map((value: number, i: number) => (
        <div
          key={i}
          className={`rounded-sm  ${
            swappingIndices.includes(i) ? "bg-rose-600" : "bg-teal-500"
          } mr-4`}
          style={{ width: "2rem", height: `${value * 2}rem` }}
        >
          {value}
        </div>
      ))}
    </div>
  );
};

export default VerticalLines;
