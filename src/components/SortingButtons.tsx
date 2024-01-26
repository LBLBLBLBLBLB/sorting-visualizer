import { SortingButtonProps } from "../interfaces/interfaces";

const SortingButtons: React.FC<SortingButtonProps> = ({
  bubbleSort,
  sorting,
}) => {
  return (
    <div className="flex justify-center gap-5 ">
      <button
        onClick={bubbleSort}
        className=" bg-rose-500 w-32 h-10 rounded-sm font-semibold text-gray-900"
      >
        {sorting ? "Sorting" : " Bubble Sort"}
      </button>
      <button className=" bg-sky-500 w-32 h-10 rounded-sm font-semibold text-gray-900">
        Selection Sort...
      </button>
      <button className=" bg-orange-500 w-32 h-10 rounded-sm font-semibold text-gray-900">
        Insertion Sort...
      </button>
      <button className=" bg-violet-500 w-32 h-10 rounded-sm font-semibold text-gray-900">
        Insertion Sort...
      </button>
    </div>
  );
};

export default SortingButtons;
