import AbstractFifoSamplePipe from './AbstractFifoSamplePipe';

declare class Stretch extends AbstractFifoSamplePipe {
  constructor(createBuffers: boolean);

  clear(): void;
  setParameters(sampleRate: number, sequenceMs: number, seekWindowMs: number, overlapMs: number): void;
  set tempo(newTempo: number);
  get tempo(): number;
  get inputChunkSize(): number;
  get outputChunkSize(): number;
  set quickSeek(enable: boolean);
  clone(): Stretch;
  process(): void;
}

export default Stretch;
