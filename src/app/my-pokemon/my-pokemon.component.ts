import { Component, inject } from '@angular/core';
import { Pokemon } from "../types";
import { PokemonService } from "../pokemon.service";
import { PokemonComponent } from "../pokemon/pokemon.component";
import { NgFor } from "@angular/common";

@Component({
  selector: 'app-my-pokemon',
  standalone: true,
  imports: [
    PokemonComponent,
    NgFor
  ],
  templateUrl: './my-pokemon.component.html',
  styleUrl: './my-pokemon.component.css'
})
export class MyPokemonComponent {
  caught: Pokemon[] | null = null

  pokemonService = inject(PokemonService)

  ngOnInit() {
    this.pokemonService.getCaught().subscribe(pokemon => this.caught = pokemon)
  }
}
