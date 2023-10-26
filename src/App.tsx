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
  const [displayInputArr, setDisplayInputArr] = useState<number[]>([]);
  const [isSorting, setIsSorting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

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
          <button onClick={displayInput}>Go</button>
          <p>{errorMessage}</p>
        </div>
        <button onClick={bubleSort}>
          {isSorting ? "Sorting..." : "bubble sort"}
        </button>

        <VerticalLines values={displayInputArr} />
      </div>
    </>
  );
}

export default App;
