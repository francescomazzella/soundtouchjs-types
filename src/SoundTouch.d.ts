import FifoSampleBuffer from './FifoSampleBuffer';

declare class SoundTouch {
  constructor();

  clear(): void;
  clone(): SoundTouch;

  get rate(): number;
  set rate(rate: number);
  set rateChange(rateChange: number);

  get tempo(): number;
  set tempo(tempo: number);
  set tempoChange(tempoChange: number);

  set pitch(pitch: number);
  set pitchOctaves(pitchOctaves: number);
  set pitchSemitones(pitchSemitones: number);

  get inputBuffer(): FifoSampleBuffer;
  get outputBuffer(): FifoSampleBuffer;

  process(): void;
}

export default SoundTouch;
