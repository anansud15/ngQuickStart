import { Component, Input, Output, EventEmitter} from '@angular/core';
import { ILocation } from '../common/location'

@Component({
    selector: 'act-filter',
    templateUrl: 'app/filter/filter.component.html',
})

export class FilterComponent { 
    filterTitle: string = 'location';
    filterClass: string = 'locationFilter';

    @Input() filters: ILocation[];

    @Output() filterChangeEvent: EventEmitter<ILocation> = new EventEmitter<ILocation>();

	emitFilterChangeEvent(filter: ILocation) {

		//[(ngModel)]="filter.selected"
		filter.selected = !filter.selected;
		this.filterChangeEvent.emit(filter);
		console.log("Location Filter .. onsearchnotify .. ");

		for (let i = 0; i < this.filters.length; i++) {
			console.log (this.filters[i].location , this.filters[i].selected);
		}

	}



}