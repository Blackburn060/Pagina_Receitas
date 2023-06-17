import { Component, ViewChild } from '@angular/core';
import { MatMenuPanel } from '@angular/material/menu';

@Component({
  selector: 'app-menu',  
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @ViewChild('menuRef') menuRef!: MatMenuPanel<any>; // Referencia necessaria (gambiarra)

  menus = [
    { label: 'Comidas Brasileiras', ref: 'comidasBrasileiras', items: ['Acarajé', 'Arroz carreteiro', 'Brigadeiro', 'Feijoada', 'Frango com quiabo', 'Galinhada com pequi', 'Picadinho de carne', 'Porco à pururuca', 'Virado à paulista', 'Outros'] },
    { label: 'Comidas Extrangeiras', ref: 'comidasExtrangeiras', items: ['Curry ', 'Escargot', 'Fish and Chips', 'Moussaka', 'Pad Thai', 'Paella', 'Sushi', 'Tacos', 'Outros'] },
    { label: 'Alimentos Saudáveis', ref: 'fitnessFood', items: ['Bowl de quinoa e legumes assados', 'Espaguete de abobrinha com almôndegas de peru', 'Omelete de claras', 'Salada de quinoa', 'Salmão assado com legumes', 'Smoothie de frutas', 'Wrap vegetariano de hummus', 'Outros'] },
    { label: 'Bolos e Tortas', ref: 'bolosTortas', items: ['Bolo de chocolate', 'Torta de maçã', 'Bolo de cenoura ', 'Bolo de banana', 'Torta de frango', 'Bolo salgado', 'Bolo de milho', 'Torta de limão', 'Torta de morango', 'Outros'] },
    { label: 'Bebidas', ref: 'bebidas', items: ['Caipirinha', 'Café', 'Cha verde', 'Chocolate quente', 'Limonada', 'Mojito', 'Suco de laranja', 'Suco de maracujá', 'Smoothie de frutas0', 'Outros'] },
    { label: 'Carnes', ref: 'carnes', items: ['Bife à parmegiana', 'Carne assada', 'Carne de cordeiro ao molho de hortelã', 'Carne de porco à pururuca', 'Churrascos', 'Costelinha de porco ao molho barbecue', 'Espetinho de carne', 'Hambúrguer caseiro', 'Strogonoff de frango', 'Outros'] },
    { label: 'Massas', ref: 'massas', items: ['Fettuccine Alfredo', 'Farfalle com camarão e pesto de manjericão', 'Lasanha', 'Mac and cheese', 'Penne alla vodka', 'Ravióli de ricota com molho de tomate', 'Rigatoni à bolonhesa', 'Spaghetti à carbonara', 'Tortellini com molho pesto', 'Outros'] },
    { label: 'Sopas', ref: 'sopas', items: ['Caldo verde', 'Canja de galinha', 'Sopa de legumes', 'Sopa de lentilha', 'Sopa de tomate', 'Outros'] },
    { label: 'Sobremesas', ref: 'sobremesas', items: ['Brownie de chocolate', 'Cheesecake de frutas vermelhas', 'Mousse de maracujá', 'Pavlova', 'Pudim', 'Torta de maçã com crumble', 'Petit Gateau', 'Parfait de frutas', 'Tarte tatin', 'Outros'] },
  ];
}
