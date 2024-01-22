import { useState } from "react";

const App = () => {
  const [inputArray, setInputArray] = useState<number[]>([]);
  const [displayInputNums, setDisplayInputNums] = useState<number[]>([]);
  const [errorMsg, setErrorMsg] = useState<string>(" ");

  // Get input from the event, and modify it into an array of numbers for display
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputTxt = event.target.value;

    if (inputTxt === "") {
      setInputArray([]);
      setDisplayInputNums([]);
    } else {
      const arrOfNums = inputTxt.split(",").map(Number);
      setInputArray(arrOfNums);
    }
  };

  // Check the modified array for potential issues and display it
  const displayInput = () => {
    // filter out zeros from arrray
    const filtered_numbers = inputArray.filter((num) => num !== 0);

    if (inputArray.some((num) => num > 50 || num < 0)) {
      setErrorMsg(
        "Sorry, you're restricted to values between 0 and 50 inclusive"
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
  };

  const bubbleSort = () => {
    const arr = [...displayInputNums];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;

          setDisplayInputNums([...arr]);
        }
      }
    }
  };

  const selectionSort = () => {
    const arr = [...displayInputNums];
    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        const temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
    }

    setDisplayInputNums([...arr]);
  };

  return (
    <>
      <header>
        <h1 className="text-teal-500 font-bold text-[2.4rem] text-center p-6 tracking-[6px]">
          Sorting Visualizer
        </h1>
      </header>
      <div className="flex items-center flex-col">
        <div className="flex gap-10 mb-1">
          <input
            onChange={handleInput}
            type="text"
            className="bg-gray-300 text-black-700 border border-gray-300 rounded py-3 px-4  focus:outline-none focus:bg-white focus:border-gray-500 "
          />
          <button
            onClick={displayInput}
            className="bg-teal-500 px-3 py-1 rounded-sm font-semibold text-gray-900"
          >
            Go
          </button>
        </div>

        <div className="flex justify-center h-8 mb-2 ">
          <p className=" text-sm text-red-600 ">{errorMsg}</p>
        </div>
      </div>
      <div className="flex justify-center gap-5 mb-8">
        <button
          onClick={bubbleSort}
          className=" bg-rose-500 w-32 h-10 rounded-sm font-semibold text-gray-900"
        >
          Bubble Sort
        </button>
        <button
          onClick={selectionSort}
          className=" bg-sky-500 w-32 h-10 rounded-sm font-semibold text-gray-900"
        >
          Selection Sort
        </button>
        <button className=" bg-orange-500 w-32 h-10 rounded-sm font-semibold text-gray-900">
          Insertion Sort
        </button>
        <button className=" bg-violet-500 w-32 h-10 rounded-sm font-semibold text-gray-900">
          Insertion Sort
        </button>
      </div>
      <div className="flex gap-5 justify-center">
        {displayInputNums.map((num) => (
          <div
            style={{ height: `${num * 26}px` }}
            className="bg-teal-500 rounded-sm w-8 "
          >
            <p className="text-center ">{num}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
