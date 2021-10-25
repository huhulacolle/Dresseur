import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  constructor() { }

  // initialisation des dates de la semaine actuel
  currentDate = new Date();  
  lundi =  new Date(this.currentDate.setDate(this.currentDate.getDate() - this.currentDate.getDay() + 1));
  mardi = new Date(this.currentDate.setDate(this.currentDate.getDate() - this.currentDate.getDay() + 2));
  mercredi = new Date(this.currentDate.setDate(this.currentDate.getDate() - this.currentDate.getDay() + 3));
  jeudi = new Date(this.currentDate.setDate(this.currentDate.getDate() - this.currentDate.getDay() + 4));
  vendredi = new Date(this.currentDate.setDate(this.currentDate.getDate() - this.currentDate.getDay() + 5));
  samedi = new Date(this.currentDate.setDate(this.currentDate.getDate() - this.currentDate.getDay() + 6));
  dimanche = new Date(this.currentDate.setDate(this.currentDate.getDate() - this.currentDate.getDay() + 7));

  public right()
  {
    this.lundi = this.addDays(this.lundi, 7);
    this.mardi = this.addDays(this.mardi, 7);
    this.mercredi = this.addDays(this.mercredi, 7);
    this.jeudi = this.addDays(this.jeudi, 7);
    this.vendredi = this.addDays(this.vendredi, 7);
    this.samedi = this.addDays(this.samedi, 7);
    this.dimanche = this.addDays(this.dimanche, 7);
  }

  public left()
  {
    this.lundi = this.addDays(this.lundi, -7);
    this.mardi = this.addDays(this.mardi, -7);
    this.mercredi = this.addDays(this.mercredi, -7);
    this.jeudi = this.addDays(this.jeudi, -7);
    this.vendredi = this.addDays(this.vendredi, -7);
    this.samedi = this.addDays(this.samedi, -7);
    this.dimanche = this.addDays(this.dimanche, -7);
  }

  // repris de stackoverflow
  private addDays(date, amount) {
    var tzOff = date.getTimezoneOffset() * 60 * 1000,
        t = date.getTime(),
        d = new Date(),
        tzOff2;
  
    t += (1000 * 60 * 60 * 24) * amount;
    d.setTime(t);
  
    tzOff2 = d.getTimezoneOffset() * 60 * 1000;
    if (tzOff != tzOff2) {
      var diff = tzOff2 - tzOff;
      t += diff;
      d.setTime(t);
    }
  
    return d;
  }
  

  ngOnInit() {
    console.log(this.currentDate);
    
  }

}
