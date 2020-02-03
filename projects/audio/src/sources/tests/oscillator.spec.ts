import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {providers} from '../../constants/fallback';
import {WebAudioModule} from '../../module';
import {WebAudioOscillator} from '../oscillator';

describe('OscillatorNode', () => {
    @Component({
        template: `
            <div waOscillatorNode></div>
        `,
    })
    class TestComponent {
        @ViewChild(WebAudioOscillator)
        node!: AudioNode;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

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
    });

    it('creates node', () => {
        expect(testComponent.node instanceof OscillatorNode).toBe(true);
    });
});

describe('OscillatorNode factory fallback', () => {
    @Component({
        template: `
            <div waOscillatorNode></div>
        `,
    })
    class TestComponent {
        @ViewChild(WebAudioOscillator)
        node!: AudioNode;
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

    it('creates node', () => {
        expect(testComponent.node instanceof OscillatorNode).toBe(true);
    });
});
