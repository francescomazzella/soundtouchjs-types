declare class FifoSampleBuffer {
    constructor();

    get vector(): Float32Array;
    get position(): number;
    get startIndex(): number;
    get frameCount(): number;
    get endIndex(): number;

    clear(): void;
    put(numFrames: number): void;
    putSamples(samples: Float32Array, position?: number, numFrames?: number): void;
    putBuffer(buffer: FifoSampleBuffer, position?: number, numFrames?: number): void;
    receive(numFrames: number): void;
    receiveSamples(output: Float32Array, numFrames?: number): void;
    extract(output: Float32Array, position?: number, numFrames?: number): void;
    ensureCapacity(numFrames: number): void;
    ensureAdditionalCapacity(numFrames: number): void;
    rewind(): void;
}

export default FifoSampleBuffer;
