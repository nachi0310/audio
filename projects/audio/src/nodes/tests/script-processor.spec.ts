import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {WebAudioModule} from '../../module';
import {WebAudioScriptProcessor} from '../script-processor';

describe('ScriptProcessorNode', () => {
    @Component({
        template: `
            <div waScriptProcessorNode></div>
        `,
    })
    class TestComponent {
        @ViewChild(WebAudioScriptProcessor)
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
        expect(testComponent.node instanceof ScriptProcessorNode).toBe(true);
    });
});
