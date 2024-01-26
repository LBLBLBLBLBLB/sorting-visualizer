import { useState } from "react";

import { generateRandomArr } from "./utils/randomArrayGenerator";

import Header from "./components/Header";
import InputSection from "./components/InputSection";
import ErrorMessage from "./components/ErrorMessage";
import SortingButtons from "./components/SortingButtons";
import DisplayNumbers from "./components/DisplayNumbers";
import SortingSpeed from "./components/SortingSpeed";
import DivideLine from "./components/DivideLine";

const App = () => {
  const [inputArray, setInputArray] = useState<number[]>([]);
  const [displayInputNums, setDisplayInputNums] = useState<number[]>(
    generateRandomArr()
  );
  const [errorMsg, setErrorMsg] = useState<string>(" ");
  const [swapIndices, setSwapIndices] = useState<number[]>([]);
  const [sorting, setSorting] = useState<boolean>(false);

  // Get input from the event, and modify it into an array of numbers for display
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputTxt = event.target.value;

    if (inputTxt === "") {
      setInputArray([]);
    } else {
      const arrOfNums = inputTxt.split(",").map(Number);
      setInputArray(arrOfNums);
    }
  };

  // Check the modified array for potential issues and display it
  const displayInput = (random = false) => {
    // filter out zeros from arrray
    const filtered_numbers = inputArray.filter((num) => num !== 0);
    if (random) {
      setErrorMsg(" ");
      setDisplayInputNums(generateRandomArr());
    } else {
      if (inputArray.some((num) => num > 20 || num < 0)) {
        setErrorMsg(
          "Sorry, you're restricted to values between 0 and 20 inclusive"
        );
      } else if (filtered_numbers.length > 20) {
        setErrorMsg("Array should be less than 20");
      } else if (inputArray.some((item) => isNaN(item))) {
        setErrorMsg("There seems to be an invalid element (not a number)");
      } else if (inputArray.some((num) => num === 0)) {
        setErrorMsg(
          "There seems to be a missing element or 0 (a duplicate comma somewhere perhaps?)"
        );
      } else {
        setErrorMsg(" ");
        setDisplayInputNums(inputArray);
      }
    }
  };

  const bubbleSort = async () => {
    const arr = [...displayInputNums];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          setSorting(true);
          setSwapIndices([j, j + 1]);

          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;

          await new Promise((resolve) => setTimeout(resolve, 2000));

          setDisplayInputNums([...arr]);
        }
        setSwapIndices([]);
      }
    }
    setSorting(false);
  };

  return (
    <>
      <Header />
      <div className="flex pl-5 pr-5 justify-around mt-5 items-center mb-10">
        <div>
          <InputSection displayInput={displayInput} handleInput={handleInput} />
          <ErrorMessage errorMsg={errorMsg} />
        </div>
        <DivideLine />
        <SortingSpeed />
        <DivideLine />
        <SortingButtons sorting={sorting} bubbleSort={bubbleSort} />
      </div>
      <DisplayNumbers
        displayInputNums={displayInputNums}
        swapIndices={swapIndices}
      />
    </>
  );
};

export default App;
