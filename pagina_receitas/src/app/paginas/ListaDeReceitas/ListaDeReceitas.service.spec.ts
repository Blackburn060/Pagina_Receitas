/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListaDeReceitas } from './ListaDeReceitas.service';

describe('Service: ListaDeReceitas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListaDeReceitas]
    });
  });

  it('should ...', inject([ListaDeReceitas], (service: ListaDeReceitas) => {
    expect(service).toBeTruthy();
  }));
});
