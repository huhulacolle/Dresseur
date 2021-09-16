import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title = "Liste trop bien de dresseur de Pokémon";

  constructor() { }

  ngOnInit() {
  }

}

interface dresseur {
  id: number,
  nom: string,
  badge: string,
  pokedex: string
}
