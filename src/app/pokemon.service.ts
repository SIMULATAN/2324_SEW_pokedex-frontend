import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CaughtPokemon, Pokemon, Stats } from "./types";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  httpClient = inject(HttpClient)

  URL = "http://localhost:8080/api/pokemon"

  getRandomPokemon() {
    return this.httpClient.get<Pokemon>(this.URL + "/random")
  }

  getStats() {
    return this.httpClient.get<Stats>(this.URL + "/stats")
  }

  getCaught() {
    return this.httpClient.get<Pokemon[]>(this.URL + "/caught")
  }

  tryThrow(pokemon: Pokemon) {
    return this.httpClient.post<CaughtPokemon>(`${this.URL}/${pokemon.id}/catch`, null)
  }

  getAll() {
    return this.httpClient.get<Pokemon[]>(this.URL + "/list")
  }
}
