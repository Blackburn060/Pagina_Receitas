import { Component, OnInit } from '@angular/core';
import { ListaDeReceitas } from './ListaDeReceitas.service';
//import { menuItem } from '../../components/template/header/menu/menu.component';

@Component({
  selector: 'app-ListaDeReceitas',
  templateUrl: './ListaDeReceitas.component.html',
  styleUrls: ['./ListaDeReceitas.component.css']
})

export class ListaDeReceitasComponent implements OnInit {

  ResponseListaDeReceitas: any;
  TituloReceitaGet: String = "teste";

  constructor(private ListaDeReceitas: ListaDeReceitas) { }

  ngOnInit() {

    this.ListaDeReceitas.getReceita(this.TituloReceitaGet).subscribe(response => {
    this.ResponseListaDeReceitas = response;
    console.log(this.ResponseListaDeReceitas);
    });

  }

}
