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

function App() {
  const [inputArray, setInputArray] = useState<number[]>([]);
  const [displayInputArr, setDisplayInputArr] = useState<number[]>([
    10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
  ]);
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
      <div className="">
        <h1 className="text-center text-teal-500 text-4xl font-bold mt-8">
          Sorting Visualizer
        </h1>
        <div className="mt-10 gap-10 flex justify-center align-middle">
          <div>
            <input
              type="text"
              onChange={handleInput}
              className="appearance-none block  bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
          <div className="flex flex-col items-center">
            <p className="font-semibold text-gray-900">speed</p>
            <div className="flex gap-2 ">
              <span className="font-semibold text-gray-600">1x</span>
              <input
                type="range"
                min="1"
                max="5"
                step="1"
                value={sortingSpeed}
                onChange={handleSortingSpeedChange}
                className=""
              />
              <span className="font-semibold text-gray-950">
                {sortingSpeed}x
              </span>
            </div>
          </div>
          <button
            onClick={displayInput}
            className="bg-teal-500 px-3 py-1 rounded-sm font-semibold text-gray-900"
          >
            Go
          </button>
        </div>
        <div className="flex justify-center h-8 mt-3">
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            {errorMessage}
          </p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={bubleSort}
            className=" bg-teal-500 mt-5 w-32 h-10 rounded-sm font-semibold text-gray-900"
          >
            {isSorting ? "Sorting..." : "bubble sort"}
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <VerticalLines
          values={displayInputArr}
          swappingIndices={swappingIndices}
        />
      </div>
    </>
  );
}

export default App;
