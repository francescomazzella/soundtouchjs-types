declare const noop: () => void;

declare interface SourcePositionCallback {
  (position: number): void;
}

declare interface Filter {
  sourcePosition: number;
  extract(target: Float32Array, numFrames: number): number;
  onEnd(): void;
}

declare function getWebAudioNode(
  context: AudioContext,
  filter: Filter, // Replace with the type of your filter object
  sourcePositionCallback: SourcePositionCallback,
  bufferSize?: number
): ScriptProcessorNode;

export default getWebAudioNode;
