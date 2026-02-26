import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Datosm2 } from './datosm2';

describe('Datosm2', () => {
  let component: Datosm2;
  let fixture: ComponentFixture<Datosm2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Datosm2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Datosm2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
