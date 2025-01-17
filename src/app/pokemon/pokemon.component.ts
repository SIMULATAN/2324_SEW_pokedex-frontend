import { Component, Input } from '@angular/core';
import { Pokemon } from "../types";

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
  @Input()
  pokemon!: Pokemon
}
