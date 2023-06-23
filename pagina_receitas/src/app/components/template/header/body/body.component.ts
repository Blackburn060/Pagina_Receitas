import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  searchQuery: string = '';
  constructor(private router: Router) {}
  pesquisar() {
    this.router.navigate(['/lista-de-receitas'], { queryParams: { q: this.searchQuery } });
  }
}



