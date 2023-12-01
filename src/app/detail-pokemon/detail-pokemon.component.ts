import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { POKEMONS } from '../mock.pokemon';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styles: ``
})
export class DetailPokemonComponent implements OnInit{
goBack() {
throw new Error('Method not implemented.');
}

  pokemonList: Pokemon[];
  pokemon: Pokemon|undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.pokemonList = POKEMONS;
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    if (pokemonId) {
      this.pokemon = this.pokemonList.find(pokemon => pokemon.id === +pokemonId);
    } 
  }
}
