import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { ReceitasService } from '../../Servicos/Receitas.service';

@Component({
  selector: 'app-ReceitasAdicionadas',
  templateUrl: './ReceitasAdicionadas.component.html',
  styleUrls: ['./ReceitasAdicionadas.component.css']
})
export class ReceitasAdicionadasComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'category'];
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
}
