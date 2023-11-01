export interface InputProps {
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  sortingSpeed: number;
  handleSortingSpeedChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  displayInput: () => void;
  errorMessage: string;
}

export interface VerticalLinesProps {
  values: number[];
  swappingIndices: number[];
}
