import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class FocusService {

  private pokemonSource = new Subject<any>();

  pokemonRecived$ = this.pokemonSource.asObservable();
  constructor() { }

  eleveatePokemonData(data){
    this.pokemonSource.next(data);
  }
}
