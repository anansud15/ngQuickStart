import { Component } from '@angular/core';
import { ApplicantCardsComponent } from './applicants/applicant-list.component';

@Component({
    selector: 'act-content',
    templateUrl: 'app/content/act-content.component.html',
    directives: [ApplicantCardsComponent]
})
export class ActContentComponent { }