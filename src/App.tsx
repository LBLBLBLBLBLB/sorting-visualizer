import { useState } from "react";

interface VerticalLinesProps {
  values: number[];
}
const VerticalLines: React.FC<VerticalLinesProps> = ({ values }) => {
  return (
    <div className="vertical-lines">
      {values.map((value: number, i: number) => (
        <div
          key={i}
          className="vertical-line"
          style={{ width: "1rem", height: `${value}rem` }}
        >
          {value}
        </div>
      ))}
    </div>
  );
};

function App() {
  const [lineArr, setLineArr] = useState<number[]>([10, 20, 2, 7, 3, 1, 5, 6]);
  const [isSorting, setIsSorting] = useState(false);

  const bubleSort = async () => {
    setIsSorting(true);
    const sortedArr = [...lineArr];
    for (let i = 0; i < sortedArr.length; i++) {
      for (let j = 0; j < sortedArr.length - i - 1; j++) {
        if (sortedArr[j] > sortedArr[j + 1]) {
          const tmp = sortedArr[j];
          sortedArr[j] = sortedArr[j + 1];
          sortedArr[j + 1] = tmp;

          setLineArr([...sortedArr]);
          await new Promise((resolve) => setTimeout(resolve, 1000));
        }
      }
    }
    setIsSorting(false);
  };
  return (
    <>
      <div className="App">
        <button onClick={bubleSort}>
          {isSorting ? "Sorting..." : "bubble sort"}
        </button>
        <VerticalLines values={lineArr} />
      </div>
    </>
  );
}

export default App;
