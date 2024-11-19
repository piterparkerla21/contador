import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderhijoComponent } from './headerhijo.component';

describe('HeaderhijoComponent', () => {
  let component: HeaderhijoComponent;
  let fixture: ComponentFixture<HeaderhijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderhijoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderhijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
