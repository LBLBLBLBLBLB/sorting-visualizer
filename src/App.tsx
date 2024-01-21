import { useState } from "react";

const App = () => {
  const [inputArray, setInputArray] = useState<number[]>([]);
  const [displayInputNums, setDisplayInputNums] = useState<number[]>([]);
  const [errorMsg, setErrorMsg] = useState<string>("");

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
  console.log(inputArray);
  const displayInput = () => {
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
        "There seems to be a missing element (a duplicate comma somewhere perhaps?)"
      );
    } else {
      setErrorMsg(" ");
      setDisplayInputNums(inputArray);
    }
  };

  return (
    <>
      <input
        onChange={handleInput}
        type="text"
        className="bg-gray-300 text-black-700 border border-gray-300 rounded py-3 px-4  focus:outline-none focus:bg-white focus:border-gray-500 "
      />
      <button
        onClick={displayInput}
        className="bg-teal-500 px-3 py-1 rounded-sm font-semibold text-gray-900"
      >
        Generate
      </button>
      {displayInputNums.map((num) => (
        <p>{num}</p>
      ))}
      {errorMsg}
    </>
  );
};

export default App;
