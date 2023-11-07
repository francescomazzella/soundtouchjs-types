import FifoSampleBuffer from './FifoSampleBuffer';

declare class AbstractFifoSamplePipe {
  constructor(createBuffers: boolean);

  get inputBuffer(): FifoSampleBuffer | null;
  set inputBuffer(inputBuffer: FifoSampleBuffer | null);

  get outputBuffer(): FifoSampleBuffer | null;
  set outputBuffer(outputBuffer: FifoSampleBuffer | null);

  clear(): void;
}

export default AbstractFifoSamplePipe;
