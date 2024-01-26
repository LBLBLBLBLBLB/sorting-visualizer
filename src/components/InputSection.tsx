import { InputSectionProps } from "../interfaces/interfaces";

const InputSection: React.FC<InputSectionProps> = ({
  displayInput,
  handleInput,
}) => {
  return (
    <div className="flex gap-5 mb-1 items-center">
      <button
        onClick={() => displayInput(true)}
        className="bg-teal-500 px-4 py-3 rounded-sm font-semibold text-gray-900 "
      >
        Random numbers
      </button>
      <p className="font-bold">or</p>
      <input
        onChange={handleInput}
        type="text"
        placeholder="5,4,3,2,1.."
        className="bg-gray-300 text-black-700 border border-gray-300 rounded py-3 px-4  focus:outline-none focus:bg-white focus:border-gray-500 "
      />
      <button
        onClick={() => displayInput()}
        className="bg-teal-500 px-3 py-3 rounded-sm font-semibold text-gray-900"
      >
        Go
      </button>
    </div>
  );
};

export default InputSection;
