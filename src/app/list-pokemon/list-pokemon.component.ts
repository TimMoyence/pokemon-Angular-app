import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock.pokemon';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html'
})
export class ListPokemonComponent {

  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon|undefined;

  SelectedPokemon(pokemonName: string) {
    const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.name == pokemonName);
    if (pokemon) {
      console.log(`You selected ${pokemon.name}!`);
      this.pokemonSelected = pokemon;
    } else {
      console.log(`Pokemon with id ${pokemon} not found!`);
      this.pokemonSelected = pokemon;
    }
  }
}
