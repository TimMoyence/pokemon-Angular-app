import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-create-pokemon',
  template: `
    <h2 class="center">Ajouter un Pokemon</h2>
    <app-pokemon-form [pokemon]="pokemon"></app-pokemon-form>
  `,
})
export class CreatePokemonComponent implements OnInit{

  pokemon: Pokemon

  ngOnInit(): void {
    this.pokemon = new Pokemon();
  }
}
