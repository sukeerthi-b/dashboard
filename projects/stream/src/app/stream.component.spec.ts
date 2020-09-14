import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StreamComponent } from './stream.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        StreamComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(StreamComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'stream'`, () => {
    const fixture = TestBed.createComponent(StreamComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('stream');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(StreamComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('stream app is running!');
  });
});
