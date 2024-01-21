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

  const displayInput = () => {
    setDisplayInputNums(inputArray);
  };
  console.log(displayInputNums);
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
    </>
  );
};

export default App;
