interface DisplayNumbersProps {
  displayInputNums: number[];
  swapIndices: number[];
}

const DisplayNumbers: React.FC<DisplayNumbersProps> = ({
  displayInputNums,
  swapIndices,
}) => {
  return (
    <div className="flex gap-5 justify-center">
      {displayInputNums.map((num: number, index: number) => (
        <div
          key={index}
          style={{
            height: `${num * 26}px`,
          }}
          className={`rounded-sm  ${
            swapIndices.includes(index) ? "bg-rose-600" : "bg-teal-500"
          } w-8`}
        >
          <p className="text-center ">{num}</p>
        </div>
      ))}
    </div>
  );
};

export default DisplayNumbers;
