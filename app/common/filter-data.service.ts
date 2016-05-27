import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ILocation } from '../common/location';

@Injectable()
export class FilterDataProviderService {

	private _url = 'api/applicants/filterData.json';

	constructor(private _http: Http) {

	}
	getFilters(): Observable<ILocation[]> {

		let headers = new Headers();
	    headers.append('Authorization', 'Basic QmFsYWppOkJhbGFqaTEyMw=='); 
		let options = new RequestOptions({ headers: headers });

		headers.append('Authorization', 'Bearer '+ localStorage.getItem("auth_token"));


		return this._http.get(this._url)
			.map((response: Response) => <ILocation[]>response.json())
			.do(data => console.log("All: " + JSON.stringify(data)))
			.catch(this.handleError);

	}

	private handleError(error: Response) {
		console.error(error);
		return Observable.throw(error.json().error || 'Server error');
	}
	
}