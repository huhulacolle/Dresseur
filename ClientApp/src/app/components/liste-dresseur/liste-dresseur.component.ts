import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { DataServiceService } from 'src/shared/services/data-service.service';
import { Dresseur } from 'src/shared/interface/dresseur';

@Component({
  selector: 'app-liste-dresseur',
  templateUrl: './liste-dresseur.component.html',
  styleUrls: ['./liste-dresseur.component.css']
})
export class ListeDresseurComponent implements OnInit {
  public dresseurs: Dresseur[];

  constructor(private dataServiceService: DataServiceService) { }

  ngOnInit() {
    this.getDresseur();
  }

  public getDresseur() {
    this.dataServiceService.getDresseurs()
      .subscribe(
        data => {
          this.dresseurs = data;
        },
        error => {
          console.error(error);
        }
      )
  }

}
