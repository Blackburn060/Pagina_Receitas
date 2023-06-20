import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/template/header/body/body.component';
import { MinhasReceitasComponent } from './paginas/MinhasReceitas/MinhasReceitas.component';

const routes: Routes = [
  {path: '', component: BodyComponent},
  {path: 'minhas-receitas', component: MinhasReceitasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
