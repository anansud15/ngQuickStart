import { Component, Input, PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'applicantFilter'
})
export class ApplicantFilterPipe implements PipeTransform {

	    transform(value: any[], filter: string): any[] {
        filter = filter ? filter.toLocaleLowerCase() : null;
        return filter ? value.filter((applicant: any) =>
            applicant.name.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }

}