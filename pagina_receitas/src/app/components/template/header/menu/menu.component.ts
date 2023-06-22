import { Component, ViewChild } from '@angular/core';
import { MatMenuPanel } from '@angular/material/menu';

@Component({
  selector: 'app-menu',  
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @ViewChild('menuRef') menuRef!: MatMenuPanel<any>; 

  menus = [
    { label: 'Alimentos Saudáveis', ref: 'fitnessFood', items: ['Bowl de quinoa e legumes assados', 'Espaguete de abobrinha com almôndegas de peru', 'Omelete de claras', 'Salada de quinoa', 'Salmão assado com legumes', 'Smoothie de frutas', 'Wrap vegetariano de hummus', 'Outros'] },
    { label: 'Bebidas', ref: 'bebidas', items: ['Caipirinha', 'Café', 'Cha verde', 'Chocolate quente', 'Limonada', 'Mojito', 'Suco de laranja', 'Suco de maracujá', 'Smoothie de frutas0', 'Outros'] },
    { label: 'Bolos e Tortas', ref: 'bolosTortas', items: ['Bolo de banana', 'Bolo de cenoura', 'Bolo de chocolate', 'Bolo de milho', 'Bolo salgado', 'Torta de frango', 'Torta de limão', 'Torta de maçã', 'Torta de morango', 'Outros'] },
    { label: 'Carnes', ref: 'carnes', items: ['Bife à parmegiana', 'Carne assada', 'Carne de cordeiro ao molho de hortelã', 'Carne de porco à pururuca', 'Churrascos', 'Costelinha de porco ao molho barbecue', 'Espetinho de carne', 'Hambúrguer caseiro', 'Strogonoff de frango', 'Outros'] },
    { label: 'Comidas Brasileiras', ref: 'comidasBrasileiras', items: ['Acarajé', 'Arroz carreteiro', 'Brigadeiro', 'Feijoada', 'Frango com quiabo', 'Galinhada com pequi', 'Picadinho de carne', 'Porco à pururuca', 'Virado à paulista', 'Outros'] },
    { label: 'Comidas Estrangeiras', ref: 'comidasEstrangeiras', items: ['Curry ', 'Escargot', 'Fish and Chips', 'Moussaka', 'Pad Thai', 'Paella', 'Sushi', 'Tacos', 'Outros'] },
    { label: 'Massas', ref: 'massas', items: ['Fettuccine Alfredo', 'Farfalle com camarão e pesto de manjericão', 'Lasanha', 'Mac and cheese', 'Penne alla vodka', 'Ravióli de ricota com molho de tomate', 'Rigatoni à bolonhesa', 'Spaghetti à carbonara', 'Tortellini com molho pesto', 'Outros'] },
    { label: 'Sobremesas', ref: 'sobremesas', items: ['Brownie de chocolate', 'Cheesecake de frutas vermelhas', 'Mousse de maracujá', 'Pavlova', 'Pudim', 'Torta de maçã com crumble', 'Petit Gateau', 'Parfait de frutas', 'Tarte tatin', 'Outros'] },
    { label: 'Sopas', ref: 'sopas', items: ['Caldo verde', 'Canja de galinha', 'Sopa de legumes', 'Sopa de lentilha', 'Sopa de tomate', 'Outros'] },
  ];
}
