import { Component, OnInit } from '@angular/core';
import { Veiculo } from './veiculo';
import { VeiculoService } from './veiculo.service';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.scss']
})
export class VeiculoComponent implements OnInit {
apagarVarios() {
throw new Error('Method not implemented.');
}
validaNumerosAnoFabricacao() {
throw new Error('Method not implemented.');
}

  constructor(private veiculoService: VeiculoService) { }

  veiculoAtual: Veiculo = new Veiculo(); 
  veiculos: Veiculo[] = [];

  carregando: boolean = true;

  ngOnInit(): void {
    this.consultaVeiculo();
  }

  consultaVeiculo(): void {
    this.carregando = true;
    this.veiculoService.recuperarVeiculos().subscribe(
      resposta => {
        this.veiculos = resposta; 
        this.limpar();
      },
      erro => {
        this.carregando = false;
        alert("Erro ao consultar um veiculo!");
        console.log(erro);
      }
    );
  }

  salvarVeiculo(): void {
    this.carregando = true;
    for (const veiculo of this.veiculos) {
      this.veiculoService.salvarVeiculo(veiculo).subscribe(
        resposta => {
          // Handle success
          alert("Veiculo inserido com sucesso!");
          this.limpar();
          this.consultaVeiculo();
        },
        erro => {
          // Handle error
          this.carregando = false;
          alert("Erro ao salvar um veiculo!");
          console.log(erro);
        }
      );
    }
  }

  apagarVeiculo(id: number | null, titulo: string | null): void {
    this.carregando = true;
    if (id != null && this.veiculos != null) {
      this.veiculoService.apagarVeiculo(id, this.veiculos.toString()).subscribe(
        resposta => {
          alert("Veiculo apagado com sucesso!");
          this.limpar();
          this.consultaVeiculo();
        },
        erro => {
          this.carregando = false;
          alert("Erro ao apagar um veiculo!");
          console.log(erro);
        }
      );
    }
  }

  alterarVeiculo(veiculo: Veiculo): void {
    this.veiculoAtual = { ...veiculo }; 
  }

  efetuarAlteracaoVeiculo(): void {
    this.carregando = true;

    const veiculo = { ...this.veiculoAtual }; 

    this.veiculoService.alterarVeiculo(veiculo).subscribe(
      resposta => {
        alert("Veiculo alterado com sucesso!");
        this.limpar();
        this.consultaVeiculo();
      },
      erro => {
        this.carregando = false;
        alert("Erro ao alterar um veiculo!");
        console.log(erro);
      }
    );
  }

  limpar(): void {
    this.carregando = false;
    this.veiculoAtual = new Veiculo(); 
  }
}
