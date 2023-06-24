import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuPanel } from '@angular/material/menu';
import { ReceitasService } from '../../../../Servicos/Receitas.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @ViewChild('menuRef') menuRef!: MatMenuPanel<any>;



  ResponseReceitas1: any; AlimentosSaudaveis: String = 'Alimentos Saudáveis';

  ResponseReceitas2: any; Bebidas: String = 'Bebidas'

  ResponseReceitas3: any; BolosTortas: String = 'Bolos e Tortas'

  ResponseReceitas4: any; Carnes: String = 'Carnes'

  ResponseReceitas5: any; ComidasBrasileiras: String = 'Comidas Brasileiras'

  ResponseReceitas6: any; ComidasEstrangeiras: String = 'Comidas Estrangeiras'

  ResponseReceitas7: any; Massas: String = 'Massas'

  ResponseReceitas8: any; Sobremesas: String = 'Sobremesas'

  ResponseReceitas9: any; Sopas: String = 'Sopas'

  constructor(private ReceitasService: ReceitasService) { }

  ngOnInit() {

    this.ReceitasService.getReceitaParametro(this.AlimentosSaudaveis).subscribe(response => {
    this.ResponseReceitas1 = response;
  });
    this.ReceitasService.getReceitaParametro(this.Bebidas).subscribe(response => {
      this.ResponseReceitas2 = response;
    });
      this.ReceitasService.getReceitaParametro(this.BolosTortas).subscribe(response => {
        this.ResponseReceitas3 = response;
      });
        this.ReceitasService.getReceitaParametro(this.Carnes).subscribe(response => {
          this.ResponseReceitas4 = response;
        });
          this.ReceitasService.getReceitaParametro(this.ComidasBrasileiras).subscribe(response => {
            this.ResponseReceitas5 = response;
          });
          this.ReceitasService.getReceitaParametro(this.ComidasEstrangeiras).subscribe(response => {
            this.ResponseReceitas6 = response;
          });
          this.ReceitasService.getReceitaParametro(this.Massas).subscribe(response => {
            this.ResponseReceitas7 = response;
          });
          this.ReceitasService.getReceitaParametro(this.Sobremesas).subscribe(response => {
            this.ResponseReceitas8 = response;
          });
          this.ReceitasService.getReceitaParametro(this.Sopas).subscribe(response => {
            this.ResponseReceitas9 = response;

    console.log(this.ResponseReceitas1.categoria);
    });

  }

}
