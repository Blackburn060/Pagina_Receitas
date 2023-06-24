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


  /* menus = [
    { id: 1, label: 'Alimentos Saudáveis', ref: 'fitnessFood', items: ['Bowl de quinoa e legumes assados', 'Espaguete de abobrinha com almôndegas de peru', 'Omelete de claras', 'Salada de quinoa', 'Salmão assado com legumes', 'Smoothie de frutas', 'Wrap vegetariano de hummus', 'Outros'] },
    { id: 2, label: 'Bebidas', ref: 'bebidas', items: ['Caipirinha', 'Café', 'Cha verde', 'Chocolate quente', 'Limonada', 'Mojito', 'Suco de laranja', 'Suco de maracujá', 'Smoothie de frutas0', 'Outros'] },
    { id: 3, label: 'Bolos e Tortas', ref: 'bolosTortas', items: ['Bolo de banana', 'Bolo de cenoura', 'Bolo de chocolate', 'Bolo de milho', 'Bolo salgado', 'Torta de frango', 'Torta de limão', 'Torta de maçã', 'Torta de morango', 'Outros'] },
    { id: 4, label: 'Carnes', ref: 'carnes', items: ['Bife à parmegiana', 'Carne assada', 'Carne de cordeiro ao molho de hortelã', 'Carne de porco à pururuca', 'Churrascos', 'Costelinha de porco ao molho barbecue', 'Espetinho de carne', 'Hambúrguer caseiro', 'Strogonoff de frango', 'Outros'] },
    { id: 5, label: 'Comidas Brasileiras', ref: 'comidasBrasileiras', items: ['Acarajé', 'Arroz carreteiro', 'Brigadeiro', 'Feijoada', 'Frango com quiabo', 'Galinhada com pequi', 'Picadinho de carne', 'Porco à pururuca', 'Virado à paulista', 'Outros'] },
    { id: 6, label: 'Comidas Estrangeiras', ref: 'comidasEstrangeiras', items: ['Curry ', 'Escargot', 'Fish and Chips', 'Moussaka', 'Pad Thai', 'Paella', 'Sushi', 'Tacos', 'Outros'] },
    { id: 7, label: 'Massas', ref: 'massas', items: ['Fettuccine Alfredo', 'Farfalle com camarão e pesto de manjericão', 'Lasanha', 'Mac and cheese', 'Penne alla vodka', 'Ravióli de ricota com molho de tomate', 'Rigatoni à bolonhesa', 'Spaghetti à carbonara', 'Tortellini com molho pesto', 'Outros'] },
    { id: 8, label: 'Sobremesas', ref: 'sobremesas', items: ['Brownie de chocolate', 'Cheesecake de frutas vermelhas', 'Mousse de maracujá', 'Pavlova', 'Pudim', 'Torta de maçã com crumble', 'Petit Gateau', 'Parfait de frutas', 'Tarte tatin', 'Outros'] },
    { id: 9, label: 'Sopas', ref: 'sopas', items: ['Caldo verde', 'Canja de galinha', 'Sopa de legumes', 'Sopa de lentilha', 'Sopa de tomate', 'Outros'] },
  ]; */

  ResponseReceitas: any;

  ResponseReceitas2: any;

  constructor(private ReceitasService: ReceitasService, private route: ActivatedRoute, private ReceitasService2: ReceitasService) { }

  ngOnInit() {

    this.ReceitasService.getReceita().subscribe(response => {
    this.ResponseReceitas = response;
    console.log(this.ResponseReceitas.categoria);
    });

  }

}
