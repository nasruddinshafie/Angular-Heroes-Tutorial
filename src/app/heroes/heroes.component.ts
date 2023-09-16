import { Hero } from '../interfaces/hero';
import { HEROES } from '../mock-heroes';
import { Component } from '@angular/core';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  heroes : Hero[] = HEROES;


  selectedHero?: Hero

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }


}
