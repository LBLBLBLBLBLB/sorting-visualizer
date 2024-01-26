interface SortingSpeedProps {
  onSliderChange: (value: number) => void;
}

interface InputSectionProps {
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  displayInput: (random?: boolean) => void;
}

interface SortingButtonProps {
  bubbleSort: () => void;
  sorting?: boolean;
}

interface ErrorMessageProps {
  errorMsg: string;
}

interface DisplayNumbersProps {
  displayInputNums: number[];
  swapIndices: number[];
}

export type {
  DisplayNumbersProps,
  ErrorMessageProps,
  SortingButtonProps,
  InputSectionProps,
  SortingSpeedProps,
};
