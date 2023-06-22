import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MenuComponent } from './components/template/header/menu/menu.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BodyComponent } from './components/template/header/body/body.component';
import { MatIconModule } from '@angular/material/icon';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MinhasReceitasComponent } from './paginas/MinhasReceitas/MinhasReceitas.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaDeReceitasComponent } from './paginas/ListaDeReceitas/ListaDeReceitas.component';
import { ReceitasService } from './Servicos/Receitas.service';
import { ReceitasAdicionadasComponent } from './paginas/ReceitasAdicionadas/ReceitasAdicionadas.component';

import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    BodyComponent,
    MinhasReceitasComponent,
    ListaDeReceitasComponent,
    ReceitasAdicionadasComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule

  ],
  providers: [ReceitasService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
