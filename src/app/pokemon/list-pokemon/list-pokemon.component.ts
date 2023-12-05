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
    this.pokemonService.getPokemonList()
      .subscribe(pokemonList => this.pokemonList = pokemonList);
  }

  SelectedPokemon(pokemonName: string) {
    this.pokemonService.getPokemonByName(pokemonName).subscribe( pokemonSelected => this.pokemonSelected = pokemonSelected);
    if (this.pokemonSelected) {
      console.log(`You selected ${this.pokemonSelected.name}!`);
    } else {
      console.log(`Pokemon with  ${this.pokemonSelected} not found!`);
    }
  }

  goToPokemonDetails(pokemonId: number) {
    this.router.navigate([`/pokemon/`, pokemonId]);
  }
}
