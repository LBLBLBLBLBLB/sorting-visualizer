import { useState } from "react";

const Modal = () => {
  const [showModal, setShowModal] = useState(true);
  return (
    <>
      <button
        className="fixed top-8 right-8 bg-slate-400 px-4 py-1 rounded-sm font-semibold text-black-50"
        onClick={() => setShowModal(true)}
      >
        Instructions
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t text-teal-500">
                  <h3 className="text-3xl font-semibold">
                    Welcome to the Sorting Visualizer!
                  </h3>
                  <button
                    className="bg-neutral-150 hover:bg-gray-150 text-rose-600 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>

                <div className="relative p-6 flex-auto">
                  <ol>
                    <li>
                      <strong>Generate Random Lines:</strong>
                      <p>
                        Click the "Random Numbers" button to create vertical
                        lines between 1-20 number.
                      </p>
                    </li>
                    <li>
                      <strong>Input Numbers:</strong>
                      <p>
                        Enter a list of numbers separated by commas (e.g. 10, 9,
                        8, 7, 6, 5, 4, 3, 2, 1).
                      </p>
                      <p>You can enter up to 20 numbers.</p>
                      <p>Each number must be between 1 and 50.</p>
                      <p>No other symbols or characters are allowed.</p>
                    </li>
                    <li>
                      <strong>Create Vertical Lines:</strong>
                      <p>
                        Click the "Go" button to create vertical lines based on
                        the numbers you entered.
                      </p>
                    </li>

                    <li>
                      <strong>Speed Control:</strong>
                      <p>
                        Use the speed input slider to adjust the animation speed
                        to your preference.
                      </p>
                    </li>

                    <li>
                      <strong>Choose a Sorting Algorithm:</strong>
                      <p>
                        Select a sorting algorithm (e.g., Bubble Sort,Selection
                        Sort) from the available options.
                      </p>
                    </li>

                    <li>
                      <strong>Sort the Numbers:</strong>
                      <p>
                        Click the sorting button to start the visualization of
                        the chosen algorithm.
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
