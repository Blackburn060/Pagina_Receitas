import { AfterViewInit, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { ReceitasService } from '../../Servicos/Receitas.service';

@Component({
  selector: 'app-ReceitasAdicionadas',
  templateUrl: './ReceitasAdicionadas.component.html',
  styleUrls: ['./ReceitasAdicionadas.component.css']
})
export class ReceitasAdicionadasComponent implements OnInit, AfterViewInit {

ResponseDeletarReceita: any;

  displayedColumns: string[] = ['id', 'name', 'category', 'option'];

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(private receitasService: ReceitasService) {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>();

    this.receitasService.getReceita().subscribe(response => {
      this.dataSource.data = response;
    });
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  enviarDelete(id: any) {

    console.log(id);

    this.receitasService.deleteReceita(id).subscribe(response => {
      this.ResponseDeletarReceita = response;
      location.reload();
      console.log(this.ResponseDeletarReceita);
    });
  }


}
