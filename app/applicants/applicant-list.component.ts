import {Component, Input, OnChanges} from '@angular/core';
import {ApplicantFilterPipe} from './applicant-filter.pipe';
@Component({
    selector: 'applicant-cards',
    templateUrl: 'app/applicants/applicant-list.component.html',
    pipes: [ApplicantFilterPipe]
})
export class ApplicantCardsComponent {

    @Input() applicants: any[];
    @Input() nameFilter: string = '';


}