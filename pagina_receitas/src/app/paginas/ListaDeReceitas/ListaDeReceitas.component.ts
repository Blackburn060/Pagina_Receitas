import { Component, OnInit } from '@angular/core';
import { ListaDeReceitas } from './ListaDeReceitas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ListaDeReceitas',
  templateUrl: './ListaDeReceitas.component.html',
  styleUrls: ['./ListaDeReceitas.component.css']
})

export class ListaDeReceitasComponent implements OnInit {

  ResponseListaDeReceitas: any;

  constructor(private ListaDeReceitas: ListaDeReceitas, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params => {

      const TituloReceitaGet = params['titulo'];

    this.ListaDeReceitas.getReceitaParametro(TituloReceitaGet).subscribe(response => {
    this.ResponseListaDeReceitas = response;
    console.log(this.ResponseListaDeReceitas);
    });
  });
  }

}
