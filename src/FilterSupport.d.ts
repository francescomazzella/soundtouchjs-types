declare class FilterSupport {
  constructor(pipe: any); // Replace 'any' with the actual type of the 'pipe' parameter.

  get pipe(): any; // Replace 'any' with the actual type of the 'pipe' property.
  get inputBuffer(): any; // Replace 'any' with the actual type of the 'inputBuffer' property.
  get outputBuffer(): any; // Replace 'any' with the actual type of the 'outputBuffer' property.

  fillInputBuffer(/*numFrames*/): void;
  fillOutputBuffer(numFrames?: number): void;

  clear(): void;
}

export default FilterSupport;
