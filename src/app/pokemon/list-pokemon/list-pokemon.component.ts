import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html'
})
export class ListPokemonComponent implements OnInit {

  pokemonList: Pokemon[];
  pokemonSelected: Pokemon|undefined;

  constructor(
    private router:Router, 
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.pokemonList = this.pokemonService.getPokemonList();
  }

  SelectedPokemon(pokemonName: string) {
    const pokemon: Pokemon|undefined = this.pokemonService.getPokemonByName(pokemonName);
    if (pokemon) {
      console.log(`You selected ${pokemon.name}!`);
      this.pokemonSelected = pokemon;
    } else {
      console.log(`Pokemon with id ${pokemon} not found!`);
      this.pokemonSelected = pokemon;
    }
  }

  goToPokemonDetails(pokemonId: number) {
    this.router.navigate([`/pokemon/`, pokemonId]);
  }
}
