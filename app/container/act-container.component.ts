import { Component } from '@angular/core';
import { ApplicantCardsComponent } from '../applicants/applicant-list.component';
import { SearchAppComponent } from '../search/search-app.component';

@Component({
    selector: 'act-container',
    templateUrl: 'app/container/act-container.component.html',
    directives: [ApplicantCardsComponent, SearchAppComponent]
})
export class ActContainerComponent { }