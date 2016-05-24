import { Component } from '@angular/core';

@Component({
    selector: 'act-filter',
    templateUrl: 'app/filter/filter.component.html',
})
export class FilterComponent { 
    filterTitle: string = 'location';
    filterClass: string = 'locationFilter';

}