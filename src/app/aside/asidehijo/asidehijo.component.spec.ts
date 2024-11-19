import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsidehijoComponent } from './asidehijo.component';

describe('AsidehijoComponent', () => {
  let component: AsidehijoComponent;
  let fixture: ComponentFixture<AsidehijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsidehijoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsidehijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
