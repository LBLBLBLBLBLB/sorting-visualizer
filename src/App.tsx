import { useState, useEffect } from "react";

import { generateRandomArr } from "./utils/randomArrayGenerator";

import Header from "./components/Header";
import InputSection from "./components/InputSection";
import ErrorMessage from "./components/ErrorMessage";
import SortingButtons from "./components/SortingButtons";
import DisplayNumbers from "./components/DisplayNumbers";
import SortingSpeed from "./components/SortingSpeed";
import DivideLine from "./components/DivideLine";
import Modal from "./components/Modal";

const App = () => {
  const [inputArray, setInputArray] = useState<number[]>([]);
  const [displayInputNums, setDisplayInputNums] = useState<number[]>(
    generateRandomArr()
  );
  const [errorMsg, setErrorMsg] = useState<string>(" ");
  const [swapIndices, setSwapIndices] = useState<number[]>([]);
  const [sorting, setSorting] = useState<boolean>(false);
  const [sortingSpeed, setSortingSpeed] = useState<number>(1);

  const delay = 1000 / sortingSpeed;

  useEffect(() => {
    document.title = sorting ? "Sorting . . ." : "Sorting Visualizer";
  }, [sorting]);

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

  const handleSortingSpeedChange = (value: number) => {
    setSortingSpeed(value);
  };

  // implementation of buble sort algorithm and display it
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

          await new Promise((resolve) => setTimeout(resolve, delay));

          setDisplayInputNums([...arr]);
        }
        setSwapIndices([]);
      }
    }
    setSorting(false);
  };

  // implementation of selection sort algorithm and display it
  const selectionSort = async () => {
    const arr = [...displayInputNums];
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;

      // Find the index of the minimum element in the  unsorted array
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }

      // Swap the minimum element with the first unsorted element
      if (minIndex !== i) {
        setSwapIndices([i, minIndex]);
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];

        await new Promise((resolve) => setTimeout(resolve, delay));

        setDisplayInputNums([...arr]);
      }
      setSwapIndices([]);
    }
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
        <SortingSpeed onSliderChange={handleSortingSpeedChange} />
        <DivideLine />
        <SortingButtons
          sorting={sorting}
          bubbleSort={bubbleSort}
          selectionSort={selectionSort}
        />
      </div>
      <DisplayNumbers
        displayInputNums={displayInputNums}
        swapIndices={swapIndices}
      />
      <Modal />
    </>
  );
};

export default App;
