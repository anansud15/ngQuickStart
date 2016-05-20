import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IApplicant } from '../applicants/applicant';

@Injectable()
export class ApplicantService {

	private _applicantUrl = 'api/applicants/applicants.json';

	constructor(private _http: Http) {

	}
	getApplicants(): Observable<IApplicant[]> {

		return this._http.get(this._applicantUrl)
			.map((response: Response) => <IApplicant[]>response.json())
			.do(data => console.log("All: " + JSON.stringify(data)))
			.catch(this.handleError);

		/*return [
	        { "id": "00011", "name": "Mr. Nice", "city": "Santa Clara", "state": "California"},
	        { "id": "00012", "name": "Narco", "city": "Saddle River", "state": "New Jersey" },
	        { "id": "00013", "name": "Bombasto", "city": "Clifton", "state": "Nebraska" },
	        { "id": "00014", "name": "Celeritas", "city": "Phoenix", "state": "Arizona" },
	        { "id": "00015", "name": "Magneta", "city": "Phoenix", "state": "Arizona" },
	        { "id": "00016", "name": "RubberMan", "city": "Phoenix", "state": "Arizona" },
	        { "id": "00017", "name": "Dynama", "city": "Chicago", "state": "Illinois" },
	        { "id": "00018", "name": "Dr IQ", "city": "Newark", "state": "New Jersey" },
	        { "id": "00019", "name": "Magma", "city": "Phoenix", "state": "Arizona" },
	        { "id": "00020", "name": "Tornado", "city": "Phoenix", "state": "Arizona" }
    	];*/
	}

	private handleError(error: Response) {
		console.error(error);
		return Observable.throw(error.json().error || 'Server error');
	}
	
}