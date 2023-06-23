import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/template/header/body/body.component';
import { MinhasReceitasComponent } from './paginas/MinhasReceitas/MinhasReceitas.component';
import { ListaDeReceitasComponent } from './paginas/ListaDeReceitas/ListaDeReceitas.component';
import { ReceitasAdicionadasComponent } from './paginas/ReceitasAdicionadas/ReceitasAdicionadas.component'

const routes: Routes = [
  {path: '', component: BodyComponent},
  {path: 'minhas-receitas', component: MinhasReceitasComponent},
  {path: 'lista-de-receitas', component: ListaDeReceitasComponent},
  {path: 'receitas-adicionadas', component: ReceitasAdicionadasComponent},
  {path: 'body', component: BodyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
