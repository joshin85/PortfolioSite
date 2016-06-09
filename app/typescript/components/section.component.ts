import {Component, Input} from 'angular2/core';
import {Section} from '../Objects/section';
import {NgClass} from 'angular2/common';

@Component({
    selector: 'section-container',
    templateUrl : 'app/templates/section.component.html'
})

export class SectionContainer {
  @Input() section;



}
