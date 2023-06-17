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
    { label: 'Comidas Brasileiras', ref: 'comidasBrasileiras', items: ['Acarajé', 'Arroz carreteiro', 'Feijoada', 'Frango com quiabo', 'Galinhada com pequi', 'Picadinho de carne', 'Porco à pururuca', 'Virado à paulista', 'Outros'] },
    { label: 'Bolos e Tortas', ref: 'bolosTortas', items: ['Template', 'Template', 'Template'] },
    { label: 'Bebidas', ref: 'bebidas', items: ['Template', 'Template', 'Template'] },
    { label: 'Carnes', ref: 'carnes', items: ['Template', 'Template', 'Template'] },
    { label: 'Massas', ref: 'massas', items: ['Template', 'Template', 'Template'] },
    { label: 'Sopas', ref: 'sopas', items: ['Template', 'Template', 'Template'] },
    { label: 'Doces', ref: 'doces', items: ['Template', 'Template', 'Template'] },
    { label: 'Sobremesas', ref: 'sobremesas', items: ['Template', 'Template', 'Template'] },
    { label: 'Alimentos Saudáveis', ref: 'fitnessFood', items: ['Template', 'Template', 'Template'] }
  ];
}
