import { Injectable } from '@angular/core';
import { POKEMONS } from './mock.pokemon';
import { Pokemon } from './pokemon';

@Injectable()

export class PokemonService {

  getPokemonList(): Pokemon[]{
    return POKEMONS;
  }

  getPokemonById(pokemonId : number): Pokemon|undefined {
    return POKEMONS.find(pokemon => pokemon.id == pokemonId);
  }

  getPokemonByName(pokemonName : string): Pokemon|undefined {
    return POKEMONS.find(pokemon => pokemon.name == pokemonName);
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
