import {Directive, Inject, Input, OnDestroy, Optional} from '@angular/core';
import {AUDIO_CONTEXT} from '../tokens/audio-context';
import {connect} from '../utils/connect';
import {constructorPolyfill} from '../utils/constructor-polyfill';

// @dynamic
@Directive({
    selector: '[waOutput]',
})
export class WebAudioOutput extends GainNode implements OnDestroy {
    @Input()
    set waOutput(destination: AudioNode | AudioParam | undefined) {
        this.disconnect();
        connect(
            this,
            destination,
        );
    }

    constructor(
        @Inject(AUDIO_CONTEXT) context: BaseAudioContext,
        @Optional() @Inject(AudioNode) node: AudioNode | null,
    ) {
        const result = constructorPolyfill(context, 'createGain', WebAudioOutput, node);

        if (result) {
            return result;
        }

        super(context);
        WebAudioOutput.init(this, node);
    }

    ngOnDestroy() {
        this.disconnect();
    }

    static init(that: WebAudioOutput, node: AudioNode | null) {
        connect(
            node,
            that,
        );
    }
}
