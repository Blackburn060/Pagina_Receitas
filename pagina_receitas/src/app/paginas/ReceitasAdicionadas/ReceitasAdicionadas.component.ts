import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ReceitasAdicionadas',
  templateUrl: './ReceitasAdicionadas.component.html',
  styleUrls: ['./ReceitasAdicionadas.component.css']
})
export class ReceitasAdicionadasComponent implements OnInit {
  dataSource: any[] = [
    { name: 'Item 1', quantity: 10, price: 100 },
    { name: 'Item 2', quantity: 5, price: 50 },
    // ...
  ];

  displayedColumns: string[] = ['name', 'quantity', 'price'];


  constructor() { }

  ngOnInit() {

  }
}


