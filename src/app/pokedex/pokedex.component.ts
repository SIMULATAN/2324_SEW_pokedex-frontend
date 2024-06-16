import { Component, inject } from '@angular/core';
import { PokemonService } from "../pokemon.service";
import { Pokemon } from "../types";
import { NgFor } from "@angular/common";

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [NgFor],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent {
  pokemonService = inject(PokemonService)

  pokemons: Pokemon[] | null = []

  ngOnInit() {
    this.pokemonService.getAll().subscribe(p => this.pokemons = p)
  }
}
