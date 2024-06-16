import { Routes } from '@angular/router';
import { TallGrassComponent } from "./tall-grass/tall-grass.component";
import { MyPokemonComponent } from "./my-pokemon/my-pokemon.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { PokedexComponent } from "./pokedex/pokedex.component";

export const routes: Routes = [
  {
    title: "Home",
    component: TallGrassComponent,
    path: ""
  },
  {
    path: "my-pokemon",
    component: MyPokemonComponent
  },
  {
    path: "pokedex",
    component: PokedexComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];
