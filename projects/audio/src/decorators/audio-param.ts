import {AudioNodeWithParams} from '../types/audio-node-with-params';
import {
    AudioParamDecorator,
    AudioParamWorkletDecorator,
} from '../types/audio-param-decorator';
import {AudioParamInput} from '../types/audio-param-input';
import {processAudioParam} from '../utils/process-audio-param';

export function audioParam(): AudioParamWorkletDecorator;
export function audioParam<K extends string>(param: K): AudioParamDecorator<K>;
export function audioParam<K extends string>(
    param: string = '',
): AudioParamDecorator<K> | AudioParamWorkletDecorator {
    const decorator: AudioParamDecorator<K> = (target, propertyKey) => {
        Object.defineProperty(target, propertyKey, {
            set(this: AudioNodeWithParams<K> | AudioWorkletNode, value: AudioParamInput) {
                const audioParam =
                    this instanceof AudioWorkletNode
                        ? (this.parameters as Map<string, AudioParam | undefined>).get(
                              propertyKey,
                          )
                        : this[param as K];

                if (audioParam instanceof AudioParam) {
                    processAudioParam(audioParam, value, this.context.currentTime);
                } else {
                    // Fallback for older browsers
                    Object.defineProperty(target, propertyKey, {value});
                }
            },
        });
    };

    return decorator;
}
