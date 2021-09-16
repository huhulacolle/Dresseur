import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-dresseur',
  templateUrl: './liste-dresseur.component.html',
  styleUrls: ['./liste-dresseur.component.css']
})
export class ListeDresseurComponent implements OnInit {
  public dresseurs: dresseur[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<dresseur[]>(baseUrl + 'api/pokemon/dresseur').subscribe(result => {
      this.dresseurs = result;
    }, error => console.error(error));
  }

  ngOnInit() {
  }

}

interface dresseur {
  id: number,
  nom: string,
  badge: string,
  pokedex: string
}
