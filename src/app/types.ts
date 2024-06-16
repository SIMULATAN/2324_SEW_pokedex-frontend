export interface Pokemon {
  id: number
  name: string
  catchCount: number
  primary: string
  secondary: string
  pictureUrl: string
}

export interface CaughtPokemon {
  name: string
  level: number
}

export interface Stats {
  caught: number
}
