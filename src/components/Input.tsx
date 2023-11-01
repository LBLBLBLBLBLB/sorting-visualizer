import { InputProps } from "../types/interfaces";

const Input: React.FC<InputProps> = ({
  handleInput,
  sortingSpeed,
  handleSortingSpeedChange,
  displayInput,
  errorMessage,
}) => {
  return (
    <>
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
            <span className="font-semibold text-gray-950">{sortingSpeed}x</span>
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
    </>
  );
};

export default Input;
