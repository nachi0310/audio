import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Observable} from 'rxjs';
import {providers} from '../../constants/fallback';
import {WebAudioModule} from '../../module';
import {WebAudioBufferSource} from '../../sources/buffer-source';
import {WebAudioDestination} from '../destination';

describe('AudioDestinationNode', () => {
    @Component({
        template: `
            <div waAudioBufferSourceNode buffer="base/demo.mp3" autoplay>
                <div waAudioDestinationNode (quiet)="quiet = true"></div>
            </div>
        `,
    })
    class TestComponent {
        @ViewChild(WebAudioDestination)
        node!: WebAudioDestination;

        @ViewChild(WebAudioBufferSource)
        source!: WebAudioBufferSource;

        quiet = false;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    const timeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [WebAudioModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    });

    afterEach(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = timeout;
        testComponent.source.stop();
    });

    it('creates node', () => {
        expect(testComponent.node instanceof AudioNode).toBe(true);
    });

    it('inits output', () => {
        expect(testComponent.node.quiet instanceof Observable).toBe(true);
    });

    it('does not fire output initially', () => {
        expect(testComponent.quiet).toBe(false);
    });

    it('fires output after destination has gone silent', done => {
        testComponent.source.stop(testComponent.source.context.currentTime + 0.5);
        setTimeout(() => {
            fixture.detectChanges();
            expect(testComponent.quiet).toBe(true);
            done();
        }, 6000);
    });
});

describe('AudioDestinationNode factory fallback', () => {
    @Component({
        template: `
            <div waAudioDestinationNode></div>
        `,
    })
    class TestComponent {
        @ViewChild(WebAudioDestination)
        node!: WebAudioDestination;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [WebAudioModule],
            declarations: [TestComponent],
            providers,
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Works with fallback mode', () => {
        expect(testComponent.node instanceof AudioNode).toBe(true);
    });
});
