import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock.pokemon';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})

export class AppComponent implements OnInit{
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon|undefined;

  ngOnInit() {
    // console.table(this.pokemonList)
  }

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

