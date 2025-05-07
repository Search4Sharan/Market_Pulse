import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GbpjpyComponent } from './gbpjpy.component';

describe('GbpjpyComponent', () => {
  let component: GbpjpyComponent;
  let fixture: ComponentFixture<GbpjpyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GbpjpyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GbpjpyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
