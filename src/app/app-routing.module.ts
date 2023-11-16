import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VeiculoComponent } from './veiculos/veiculo.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'veiculos', component: VeiculoComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
