import { useState } from "react";
import { SortingSpeedProps } from "../interfaces/interfaces";

const SortingSpeed: React.FC<SortingSpeedProps> = ({ onSliderChange }) => {
  const [sliderValue, setSliderValue] = useState<number>(1);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(event.target.value);
    setSliderValue(val);
    onSliderChange(val);
  };

  return (
    <div className="mt-2 flex gap-3 items-center">
      <p className="text-lg font-semibold">{sliderValue}x</p>
      <input
        type="range"
        min="1"
        max="5"
        step="1"
        value={sliderValue}
        onChange={handleSliderChange}
      />
      <p className="text-lg font-semibold">5x</p>
    </div>
  );
};

export default SortingSpeed;
