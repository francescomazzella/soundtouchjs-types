import AbstractFifoSamplePipe from './AbstractFifoSamplePipe';

declare class RateTransposer extends AbstractFifoSamplePipe {
  constructor(createBuffers: any);

  set rate(rate: number);
  reset(): void;
  clone(): RateTransposer;
  process(): void;
  transpose(numFrames?: number): number;
}

export default RateTransposer;
