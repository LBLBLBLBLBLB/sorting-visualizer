interface InputSectionProps {
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  displayInput: (random?: boolean) => void;
}

const InputSection: React.FC<InputSectionProps> = ({
  displayInput,
  handleInput,
}) => {
  return (
    <div className="flex gap-10 mb-1">
      <button
        onClick={() => displayInput(true)}
        className="bg-teal-500 px-3 py-1 rounded-sm font-semibold text-gray-900 mr-10"
      >
        Random numbers
      </button>
      <input
        onChange={handleInput}
        type="text"
        placeholder="5,4,3,2,1.."
        className="bg-gray-300 text-black-700 border border-gray-300 rounded py-3 px-4  focus:outline-none focus:bg-white focus:border-gray-500 "
      />
      <button
        onClick={() => displayInput()}
        className="bg-teal-500 px-3 py-1 rounded-sm font-semibold text-gray-900"
      >
        Go
      </button>
    </div>
  );
};

export default InputSection;
