import { Component, inject } from '@angular/core';
import { PokemonComponent } from "../pokemon/pokemon.component";
import { Pokemon } from "../types";
import { NgIf } from "@angular/common";
import { PokemonService } from "../pokemon.service";
import { forkJoin } from "rxjs";

@Component({
  selector: 'app-tall-grass',
  standalone: true,
  imports: [
    PokemonComponent,
    NgIf
  ],
  templateUrl: './tall-grass.component.html',
  styleUrl: './tall-grass.component.css'
})
export class TallGrassComponent {
  caught: number = 0
  pokemon: Pokemon | null = null
  pokemonService = inject(PokemonService)

  ngOnInit() {
    this.refreshPokemon()
  }

  refreshPokemon() {
    forkJoin(
      {
        pokemon: this.pokemonService.getRandomPokemon(),
        stats: this.pokemonService.getStats()
      }
    ).subscribe(result => {
      this.pokemon = result.pokemon;
      this.caught = result.stats.caught;
    })
  }

  throw() {
    // immutable pokemon - fix refreshing while throwing bug
    const currentPokemon = this.pokemon
    if (currentPokemon == null) return;

    this.pokemonService.tryThrow(currentPokemon).subscribe(caught => {
      if (caught == null) {
        alert(`Oh no, the wild ${currentPokemon?.name} ran away!`)
      } else {
        alert(`Congratulations, you have caught a ${caught.name} with level ${caught.level}`)
      }
      this.refreshPokemon()
    })
  }
}
