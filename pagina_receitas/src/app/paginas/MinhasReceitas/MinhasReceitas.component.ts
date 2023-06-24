import { Component, OnInit } from '@angular/core';
import { ReceitasService } from '../../Servicos/Receitas.service';

interface Image {
  url: string;
}

@Component({
  selector: 'app-MinhasReceitas',
  templateUrl: './MinhasReceitas.component.html',
  styleUrls: ['./MinhasReceitas.component.css']
})


export class MinhasReceitasComponent implements OnInit {

  ResponseIserirReceita: any;
  postTitulo!: string;
  postCategoria!: string;
  postIngredientes!: [];
  postModopreparo!: string;
  postUrl!: string;

  enviarPost(){

    const titulo = this.postTitulo;
    const categoria = this.postCategoria;
    const ingredientes = this.postIngredientes;
    const modopreparo = this.postModopreparo;
    const url = this.postUrl;

      this.ReceitasService.createReceita(titulo, categoria, ingredientes, modopreparo, url).subscribe(response => {
        console.log(this.ResponseIserirReceita);
        });
      }

  constructor(private ReceitasService: ReceitasService) { }

  ngOnInit() {
  }

  images: string[] = [];

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.images.push(e.target.result);
    };
    reader.readAsDataURL(file);
  }

  removeImage(image: string) {
    const index = this.images.indexOf(image);
    if (index !== -1) {
      this.images.splice(index, 1);
    }

  }
}
