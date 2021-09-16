import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  test = 1;
  public pokemons: pokemon[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<pokemon[]>(baseUrl + 'api/pokemon').subscribe(result => {
      this.pokemons = result;
    }, error => console.error(error));
  }

  ngOnInit() {
  }

}
interface pokemon {
  pokedex_number: number,
  name: string,
  speed: number,
  special_defence: number,
  special_attack: number,
  defence: number,
  attack: number,
  hp: number,
  primary_type: string,
  secondary_type: string
}
