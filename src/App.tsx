import { useState } from "react";
import Modal from "./components/Modal";
import Input from "./components/Input";
import VerticalLines from "./components/VerticalLines";

const App = () => {
  const [inputArray, setInputArray] = useState<number[]>([]);
  const [displayInputArr, setDisplayInputArr] = useState<number[]>([
    10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
  ]);

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
  };

  return (
    <>
      <div className="">
        <h1 className="text-center text-teal-500 text-4xl font-bold mt-8">
          Sorting Visualizer
        </h1>
        <Input
          handleInput={handleInput}
          displayInput={displayInput}
          sortingSpeed={sortingSpeed}
          handleSortingSpeedChange={handleSortingSpeedChange}
          errorMessage={errorMessage}
        />

        <div className="flex justify-center">
          <button
            onClick={bubleSort}
            className=" bg-teal-500 mt-5 w-32 h-10 rounded-sm font-semibold text-gray-900"
          >
            Bubble sort
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <VerticalLines
          values={displayInputArr}
          swappingIndices={swappingIndices}
        />
      </div>
      <Modal />
    </>
  );
};

export default App;
