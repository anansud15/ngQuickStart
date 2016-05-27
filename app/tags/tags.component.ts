import { Component, Input, OnChanges } from '@angular/core';
import { ILocation } from '../common/location';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'act-tags',
    templateUrl: 'app/tags/tags.component.html',
})

export class TagsComponent {//implements OnChanges {

	
	@Input() filterEvent: ILocation;
	previousFilterEvent: ILocation = this.filterEvent;
	tags: ILocation[];

    // ngOnChanges(): void {
    //     this.tags.push(this.filterEvent);
 
    // }

  	// We "know" that the only way the list can change is
  	// identity or in length so that's all we check
  	ngDoCheck() {
    	console.log('ngDoCheck() in tag.component');
    	if (this.previousFilterEvent !== this.filterEvent) {
      		this.tags['tags.length'] = this.filterEvent;
      		this.previousFilterEvent = this.filterEvent;
    	}
  	}

}