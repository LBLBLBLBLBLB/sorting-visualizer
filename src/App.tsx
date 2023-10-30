import { useState } from "react";

interface VerticalLinesProps {
  values: number[];
  swappingIndices: number[];
}
const VerticalLines: React.FC<VerticalLinesProps> = ({
  values,
  swappingIndices,
}) => {
  return (
    <div className="vertical-lines">
      {values.map((value: number, i: number) => (
        <div
          key={i}
          className={`vertical-line ${
            swappingIndices.includes(i) ? "moving" : ""
          }`}
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
  const [displayInputArr, setDisplayInputArr] = useState<number[]>([]);
  const [isSorting, setIsSorting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [sortingSpeed, setSortingSpeed] = useState(1);
  const [swappingIndices, setSwappingIndices] = useState<number[]>([]);

  const handleSortingSpeedChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSortingSpeed(parseInt(event.target.value, 10));
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = event.target.value;
    if (inputText === "") {
      setInputArray([]);
      setDisplayInputArr([]);
    } else {
      const arrOfNums = inputText.split(",").map(Number);
      setInputArray(arrOfNums);
    }
  };

  const displayInput = () => {
    if (inputArray.some((num) => num > 50 || num === 0)) {
      setErrorMessage(
        "Sorry, you're restricted to values between 0 and 50 inclusive(or there are duplicate commas)"
      );
    } else if (inputArray.some((item) => isNaN(item))) {
      setErrorMessage("There seems to be an invalid element (not a number)");
    } else if (inputArray.length > 20) {
      setErrorMessage("Array should be less than 20");
    } else {
      setErrorMessage("");
      setDisplayInputArr(inputArray);
    }
  };

  const bubleSort = async () => {
    setIsSorting(true);
    const sortedArr = [...displayInputArr];
    for (let i = 0; i < sortedArr.length; i++) {
      for (let j = 0; j < sortedArr.length - i - 1; j++) {
        if (sortedArr[j] > sortedArr[j + 1]) {
          const tmp = sortedArr[j];
          sortedArr[j] = sortedArr[j + 1];
          sortedArr[j + 1] = tmp;

          setSwappingIndices([j, j + 1]);

          const speedValues = [2000, 1600, 1200, 800, 400];
          const speedIndex = sortingSpeed - 1;
          const currentSpeed = speedValues[speedIndex];

          await new Promise((resolve) => setTimeout(resolve, currentSpeed));

          setSwappingIndices([]);

          setDisplayInputArr([...sortedArr]);
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
          <button onClick={displayInput}>Go</button>
          <p>{errorMessage}</p>
        </div>
        <div>
          <p>speed</p>
          <span>1x</span>
          <input
            type="range"
            min="1"
            max="5"
            step="1"
            value={sortingSpeed}
            onChange={handleSortingSpeedChange}
          />
          <span>{sortingSpeed}x</span>
        </div>
        <button onClick={bubleSort}>
          {isSorting ? "Sorting..." : "bubble sort"}
        </button>
      </div>
      <VerticalLines
        values={displayInputArr}
        swappingIndices={swappingIndices}
      />
    </>
  );
}

export default App;
