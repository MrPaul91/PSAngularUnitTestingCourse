import { HeroesComponent } from './heroes.component';
import { Hero } from '../hero';
import { of } from 'rxjs';

describe('HeroesComponent', () => {


  let component: HeroesComponent;
  let HEROES: Hero[];
  let mockHeroService;


  beforeEach(() => {
    HEROES = [
      { id: 1, name: 'SpiderDude', strength: 8 },
      { id: 2, name: 'Wonderful Woman', strength: 24 },
      { id: 3, name: 'SuperDude', strength: 55 }
    ]

    //We put the methods that we need.
    //We create an object that has 3 methods
    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
    component = new HeroesComponent(mockHeroService);
  })


  describe('delete', () => {

    it('it should remove the indicate hero from the heroes list', () => {

      //Simulate the subscribe. Return an specific value of subscribe.
      mockHeroService.deleteHero.and.returnValue(of(true));
      component.heroes = HEROES;
      component.delete(HEROES[2]);
      expect(component.heroes.length).toBe(2);

    })

    it('should call deleteHero', () => {

      //Simulate the subscribe. Return an specific value of subscribe.
      mockHeroService.deleteHero.and.returnValue(of(true));
      component.heroes = HEROES;
      component.delete(HEROES[2]);

      expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2])

    })
  })

})
