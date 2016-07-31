import {Component, View, ChangeDetectionStrategy} from 'angular2/core';
import {SideMenu} from '../SideMenu/menuside.component';
import {Entry} from '../Entry/entry.component';
import {SectionContainer} from '../Section/section.component';
import {Section} from '../../Objects/section';
import globals  = require('../../Data/sections');

@Component({
    selector: 'Portfolio-Shinjo',
    templateUrl: 'app/Components/Home/home.component.html',
    directives: [SideMenu, Entry, SectionContainer],
    changeDetection: ChangeDetectionStrategy.CheckAlways
})

export class home {
  public sections : Section[];
  active : Section;
  menuType : string;
  constructor(){
     this.sections = globals.sections;
     this.menuType = "text";
   }


   ngOnInit() {
     this.active = this.sections[0]; //set the default value to the first section
   }


  //Handle enabling and disabling sections
  ngDoCheck(){
    let cur = this.active;
    this.sections.map((x) => {

      //If not current then activate the section
      if(!x.equals(cur) && x.active) {
        cur.active = false;
        this.active = x;
      }

    });
  }

}
