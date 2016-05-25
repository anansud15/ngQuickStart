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

	}

	private handleError(error: Response) {
		console.error(error);
		return Observable.throw(error.json().error || 'Server error');
	}
	
}