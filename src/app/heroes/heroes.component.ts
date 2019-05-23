import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  private idCounter = 0;

  hero: Hero = {
    id: this.updateId(),
    name: 'Thanos',
    power: 'Harmonization'
  };

  constructor() { }

  ngOnInit() {
  }

  private updateId(): number {
    return this.idCounter += 1;
  }

}
