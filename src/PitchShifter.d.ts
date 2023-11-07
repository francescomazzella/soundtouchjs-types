declare class PitchShifter {
  constructor(
    context: AudioContext,
    buffer: AudioBuffer,
    bufferSize: number,
    onEnd?: () => void
  );

  timePlayed: number;
  sourcePosition: number;
  tempo: number;
  rate: number;
  duration: number;
  sampleRate: number;

  get formattedDuration(): string;
  get formattedTimePlayed(): string;
  get percentagePlayed(): number;
  set percentagePlayed(perc: number);
  get node(): AudioNode;
  set pitch(pitch: number);
  set pitchSemitones(semitone: number);

  connect(toNode: AudioNode): void;
  disconnect(): void;

  on(eventName: string, cb: (eventDetail: any) => void): void;
  off(eventName?: string): void;
}

export default PitchShifter;
