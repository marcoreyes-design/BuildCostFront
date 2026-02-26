import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pdfguardados } from './pdfguardados';

describe('Pdfguardados', () => {
  let component: Pdfguardados;
  let fixture: ComponentFixture<Pdfguardados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pdfguardados]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pdfguardados);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
