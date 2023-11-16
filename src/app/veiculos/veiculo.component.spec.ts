import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { VeiculoComponent } from './veiculo.component';
import { LoadingComponent } from '../loading/loading.component';
import { FormsModule } from '@angular/forms';
import { Veiculo } from './veiculo';
import { VeiculoService } from './veiculo.service';
import { of, throwError } from 'rxjs';

describe('VeiculoComponent', () => {
  let component: VeiculoComponent;
  let fixture: ComponentFixture<VeiculoComponent>;
  let veiculoService: VeiculoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule,
        FormsModule
      ],
      declarations: [ 
        VeiculoComponent, 
        LoadingComponent 
      ],
      providers: [
        VeiculoService
      ]
    })
    .compileComponents();
    veiculoService = TestBed.inject(VeiculoService);
    fixture = TestBed.createComponent(VeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should find vehicles', () => {
    const mockRespostaVeiculos: Veiculo[] = [{
      id: 1,
      modelo: "teste",
      marca: "1232",
      cor: "teste",
      anoFabricacao: "teste",
      placa: "2023",
      checked: false
    }];

    spyOn(veiculoService, 'recuperarVeiculos').and.returnValue(of(mockRespostaVeiculos));
    fixture.detectChanges();

    component.consultaVeiculo();
    expect(component.veiculos).toEqual(mockRespostaVeiculos);
    expect(veiculoService.recuperarVeiculos).toHaveBeenCalledWith();
  });

  it('should find vehicles and return erro', () => {
    const mockErro = new Error("Deu erro!");

    spyOn(veiculoService, 'recuperarVeiculos').and.returnValue(throwError(mockErro));

    spyOn(console, 'log');

    fixture.detectChanges();

    component.consultaVeiculo();
    expect(console.log).toHaveBeenCalledWith(mockErro);
  });
});
