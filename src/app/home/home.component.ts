import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title: string = 'rentcarapp';

  valor: number = 0;

  modelo: string = "";
  marca: string = "";
  cor: string = "";
  anoFabricacao: string = "";
  placa: string = "";
  indexSelecionado: number = 0;
  editarVeiculo = false;

  veiculo = [
    {

      modelo: "Hb20",
      marca: "Hyundai",
      cor: "preto",
      anoFabricacao: "2019",
      placa: "abc 12345",
    },
    {
      modelo: "Gol",
      marca: "Volkswagen",
      cor: "vermelho",
      anoFabricacao: "2012",
      placa: "def 6789",
    }
  ];

  adicionaUm() {
    this.valor++;
  }

  adicionaVeiculo() {
    if (this.title != "" && this.veiculo.length != 0) {
      this.veiculo.push({

        modelo: this.modelo,
        marca: this.marca,
        cor: this.cor,
        anoFabricacao: this.anoFabricacao,
        placa: this.placa
      });
      this.limparDados();
    } else {
      alert("Não pode deixar os dados do veiculo em branco!");
    }
  }

  removerVeiculo(i: number) {
    this.veiculo.splice(i, 1);
  }

  alterarVeiculo(i: number) {
    this.editarVeiculo = true;
    this.modelo = this.veiculo[i].modelo;
    this.marca = this.veiculo[i].marca;
    this.cor = this.veiculo[i].cor;
    this.anoFabricacao = this.veiculo[i].anoFabricacao; 
    this.placa = this.veiculo[i].placa;
    this.indexSelecionado = i;
  }

  efetuarAlteracaoDoVeiculo() {
    this.veiculo[this.indexSelecionado].modelo = this.modelo;
    this.veiculo[this.indexSelecionado].marca = this.marca;
    this.veiculo[this.indexSelecionado].cor = this.cor;
    this.veiculo[this.indexSelecionado].anoFabricacao = this.anoFabricacao; 
    this.veiculo[this.indexSelecionado].placa = this.placa;

    this.limparDados();
  }

  limparDados() {
    this.editarVeiculo = false;
    this.modelo = "";
    this.marca = "";
    this.cor = "";
    this.anoFabricacao = "";
    this.placa = "";
    this.indexSelecionado = 0;
  }
}
