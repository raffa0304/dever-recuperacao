import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarPecasComponent } from './cadastrar-pecas.component';

describe('SistemaComponent', () => {
  let component: CadastrarPecasComponent;
  let fixture: ComponentFixture<CadastrarPecasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarPecasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarPecasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
