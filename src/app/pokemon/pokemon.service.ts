import { Injectable } from '@angular/core';
import { POKEMONS } from './mock.pokemon';
import { Pokemon } from './pokemon';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable()

export class PokemonService {

  constructor (private http: HttpClient ) { }
  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getPokemonById(pokemonId : number): Observable<Pokemon|undefined> {
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  getPokemonByName(pokemonName : string): Observable<Pokemon|undefined> {
    return this.http.get<Pokemon>(`api/pokemons/${pokemonName}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  private log(response: Pokemon[]|Pokemon|undefined) {
    console.table(response);
  };

  private handleError(error: Error, errorValue: any) {
    console.log(error);
    return of(errorValue);
  }
  // Faire de l'algo pour avoir le type de pokemon et virer les doublons (avec .some)
  getPokemonTypeList(): string[]{
    return [
      'Plante',
      'Feu',
      'Eau',
      'Insecte',
      'Normal',
      'Electrik',
      'Poison',
      'Fée',
      'Vol',
      'Combat',
      'Psy'
    ];
  }
}
