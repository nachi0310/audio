import {Inject, Injectable} from '@angular/core';
import {AUDIO_CONTEXT} from '../tokens/audio-context';

// @dynamic
@Injectable({
    providedIn: 'root',
})
export class AudioBufferService {
    readonly cache = new Map<string, AudioBuffer>();

    constructor(@Inject(AUDIO_CONTEXT) private readonly context: BaseAudioContext) {}

    fetch(url: string): Promise<AudioBuffer> {
        return new Promise<AudioBuffer>((resolve, reject) => {
            if (this.cache.has(url)) {
                resolve(this.cache.get(url));

                return;
            }

            const request = new XMLHttpRequest();

            request.open('GET', url, true);
            request.responseType = 'arraybuffer';
            request.onerror = reject;
            request.onabort = reject;
            request.onload = () => {
                this.context.decodeAudioData(
                    request.response,
                    buffer => {
                        this.cache.set(url, buffer);
                        resolve(buffer);
                    },
                    reject,
                );
            };
            request.send();
        });
    }
}
