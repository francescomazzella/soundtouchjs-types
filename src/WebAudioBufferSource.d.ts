declare class WebAudioBufferSource {
  constructor(buffer: AudioBuffer);

  buffer: AudioBuffer;
  position: number;

  get dualChannel(): boolean;

  extract(target: Float32Array, numFrames: number, position: number): number;
}

export default WebAudioBufferSource;
