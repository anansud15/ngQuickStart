import { Component, Input, PipeTransform, Pipe } from '@angular/core';
import { IApplicant } from './applicant';

@Pipe({
    name: 'applicantFilter'
})
export class ApplicantFilterPipe implements PipeTransform {

	    transform(value: IApplicant[], filter: string): IApplicant[] {
        filter = filter ? filter.toLocaleLowerCase() : null;
        return filter ? value.filter((applicant: IApplicant) =>
            applicant.name.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }

}