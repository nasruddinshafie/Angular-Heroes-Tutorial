import { Hero } from '../interfaces/hero';
import { HEROES } from '../mock-heroes';
import { Component } from '@angular/core';
import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  heroes : Hero[] = [];
  selectedHero?: Hero
  constructor(private heroService: HeroService, private messageService:MessageService){}

  ngOnInit():void{
    this.getHeroes();
  }

  getHeroes():void{
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
    this.messageService.add(`HeroComponent: Selected hero id=${hero.id} name= ${hero.name}`)
  }

}
