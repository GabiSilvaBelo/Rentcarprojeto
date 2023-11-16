import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { VeiculoService } from "./veiculo.service";
import { TestBed } from "@angular/core/testing";
import { Veiculo } from "./veiculo";

describe('LivrosService', () => {
    let veiculoService: VeiculoService; 
    let httpController: HttpTestingController;   
  
    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports:[HttpClientTestingModule],
            providers: [VeiculoService]
        });
      veiculoService = TestBed.inject(VeiculoService);
      httpController = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpController.verify();
    })

    it('should retrive a vehicle', () => {
        const mockRespostaVeiculos:Veiculo[] = [{
            id: 1,
            modelo: "teste",
            marca: "1232",
            cor: "teste",
            anoFabricacao: "teste",
            placa: "2023",
            checked: false
          }]
        veiculoService.recuperarVeiculos().subscribe(
            (resposta) => {
                expect(resposta).toEqual(mockRespostaVeiculos);
            }
        );

        const url = "http://localhost:8080/veiculos";
        const requisicao = httpController.expectOne(url);
        expect(requisicao.request.method).toEqual('GET');
        requisicao.flush(mockRespostaVeiculos);
    });

    it('should retrive a vehicle', () => {
        const mockRespostaVeiculos:Veiculo = {
            id: 1,
            modelo: "teste",
            marca: "1232",
            cor: "teste",
            anoFabricacao: "teste",
            placa: "2023",
            checked: false
          }
        veiculoService.salvarVeiculo(mockRespostaVeiculos).subscribe(
            (resposta) => {
                expect(resposta).toEqual(mockRespostaVeiculos);
            }
        );

        const url = "http://localhost:8080/veiculos/inserir";
        const requisicao = httpController.expectOne(url);
        expect(requisicao.request.method).toEqual('POST');
        requisicao.flush(mockRespostaVeiculos);
    });
});