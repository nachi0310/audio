import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {providers} from '../../constants/fallback';
import {WebAudioModule} from '../../module';
import {WebAudioChannelMerger} from '../channel-merger';

describe('ChannelMergerNode', () => {
    @Component({
        template: `
            <div waChannelMergerNode></div>
        `,
    })
    class TestComponent {
        @ViewChild(WebAudioChannelMerger)
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
        expect(testComponent.node instanceof ChannelMergerNode).toBe(true);
    });
});

describe('ChannelMergerNode factory fallback', () => {
    @Component({
        template: `
            <div waChannelMergerNode></div>
        `,
    })
    class TestComponent {
        @ViewChild(WebAudioChannelMerger)
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
        expect(testComponent.node instanceof ChannelMergerNode).toBe(true);
    });
});
