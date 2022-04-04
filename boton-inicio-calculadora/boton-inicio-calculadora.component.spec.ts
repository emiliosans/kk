import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonInicioCalculadoraComponent } from './boton-inicio-calculadora.component';

describe('BotonInicioCalculadoraComponent', () => {
  let component: BotonInicioCalculadoraComponent;
  let fixture: ComponentFixture<BotonInicioCalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonInicioCalculadoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonInicioCalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
