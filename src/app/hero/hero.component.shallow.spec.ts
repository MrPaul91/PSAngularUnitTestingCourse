import { TestBed, ComponentFixture } from "@angular/core/testing";
import { HeroComponent } from './hero.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HeroComponent (shallow tests)', () => {

  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA], //It will tel ANGULAR, for this module do not ERROR if there is encountered.
      // a not known attribute or a known element. Just IGNORE IT.
      declarations: [HeroComponent]

    });
    //Construct the HeroComponent. It returns a wrapper of the component.
     fixture = TestBed.createComponent(HeroComponent);
  })


  it('should have the correct hero', () => {

    fixture.componentInstance.hero = { id: 1, name: 'SuperDude', strength: 3};
    //
    expect(fixture.componentInstance.hero.name).toEqual('SuperDude');

  })



})
