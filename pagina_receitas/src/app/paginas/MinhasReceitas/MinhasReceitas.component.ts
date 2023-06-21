import { Component, OnInit } from '@angular/core';

interface Image {
  url: string;
}

@Component({
  selector: 'app-MinhasReceitas',
  templateUrl: './MinhasReceitas.component.html',
  styleUrls: ['./MinhasReceitas.component.css']
})


export class MinhasReceitasComponent implements OnInit {
  constructor() { }

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
