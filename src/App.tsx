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
  const [inputArray, setInputArray] = useState<number[]>([]);
  const [isSorting, setIsSorting] = useState(false);

  const handleInput = (e) => {
    const arrOfNums = e.target.value.split(",").map(Number);
    setInputArray(arrOfNums);
  };
  console.log(inputArray);

  const bubleSort = async () => {
    setIsSorting(true);
    const sortedArr = [...inputArray];
    for (let i = 0; i < sortedArr.length; i++) {
      for (let j = 0; j < sortedArr.length - i - 1; j++) {
        if (sortedArr[j] > sortedArr[j + 1]) {
          const tmp = sortedArr[j];
          sortedArr[j] = sortedArr[j + 1];
          sortedArr[j + 1] = tmp;

          setInputArray([...sortedArr]);
          await new Promise((resolve) => setTimeout(resolve, 1000));
        }
      }
    }
    setIsSorting(false);
  };
  return (
    <>
      <div className="App">
        <div>
          <input type="text" onChange={handleInput} />
          <button>Go</button>
        </div>
        <button onClick={bubleSort}>
          {isSorting ? "Sorting..." : "bubble sort"}
        </button>
        <VerticalLines values={inputArray} />
      </div>
    </>
  );
}

export default App;
