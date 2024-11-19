import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterhijoComponent } from './footerhijo.component';

describe('FooterhijoComponent', () => {
  let component: FooterhijoComponent;
  let fixture: ComponentFixture<FooterhijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterhijoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterhijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
