import FilterSupport from './FilterSupport';
import AbstractFifoSamplePipe from './AbstractFifoSamplePipe';

declare class SimpleFilter extends FilterSupport {
  constructor(sourceSound: any, pipe: AbstractFifoSamplePipe, callback?: () => void);

  get position(): number;
  set position(position: number);

  get sourcePosition(): number;
  set sourcePosition(sourcePosition: number);

  onEnd(): void;

  fillInputBuffer(numFrames?: number): void;
  extract(target: Float32Array, numFrames?: number): number;
  handleSampleData(event: any): void;
  clear(): void;
}

export default SimpleFilter;
