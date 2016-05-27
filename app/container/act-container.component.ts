import { Component, OnInit } from '@angular/core';

import { ApplicantListComponent } from '../applicants/applicant-list.component';
import { SearchAppComponent } from '../search/search-app.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FilterComponent } from '../filter/filter.component';
import { TagsComponent } from '../tags/tags.component';
import { ApplicantService } from '../common/applicant.service';
import { ILocation } from '../common/location'
import { FilterDataProviderService } from '../common/filter-data.service';


@Component({
    selector: 'act-container',
    templateUrl: 'app/container/act-container.component.html',
    directives: [ApplicantListComponent, SearchAppComponent,
     				HeaderComponent, FooterComponent, FilterComponent, TagsComponent],
    providers: [ApplicantService, FilterDataProviderService]
})
export class ActContainerComponent implements OnInit{

    nameFilter: string = '';

    filters: ILocation[];
    filterEvent: ILocation;


    constructor(private _filterDataProviderService: FilterDataProviderService) { 	
    }

    ngOnInit(): void {
        this._filterDataProviderService.getFilters()
             .subscribe(filters => this.filters = filters);

    }

    onNameFilterNotify(nameString: string): void {
        this.nameFilter = nameString;
    }

    filterChangeEvent(filter: ILocation): void {
        this.filterEvent = filter;
    }
}