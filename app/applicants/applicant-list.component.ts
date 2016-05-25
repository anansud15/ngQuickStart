import { Component, Input, OnInit } from '@angular/core';
import { ApplicantFilterPipe } from './applicant-filter.pipe';
import { ApplicantService } from '../common/applicant.service';
import { IApplicant } from './applicant';

@Component({
    selector: 'applicant-cards',
    templateUrl: 'app/applicants/applicant-list.component.html',
    pipes: [ApplicantFilterPipe]
})
export class ApplicantListComponent implements OnInit{

    applicants: IApplicant[];
    @Input() nameFilter: string = '';

    constructor(private _applicantService: ApplicantService) { 	
    }

    ngOnInit(): void {
    	this._applicantService.getApplicants()
            .subscribe(applicants => this.applicants = applicants);
    }

}