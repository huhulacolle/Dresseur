import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { DataServiceService } from 'src/shared/services/data-service.service';
import { Pokemon } from 'src/shared/interface/pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})

export class PokemonComponent implements OnInit {

  public pokemons: Pokemon[];

  constructor(private dataServiceService: DataServiceService) {
  }

  ngOnInit(): void {
    this.getPokemons();
  }

  public getPokemons(): void {
    this.dataServiceService.getPokemons()
      .subscribe(
        data => {
          this.pokemons = data;
        },
        error => {
          console.error(error);
        }
      )
  }


}

