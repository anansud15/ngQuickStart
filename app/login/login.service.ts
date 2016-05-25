// login.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class LoginService {
	private loggedIn = false;
	
	constructor(public router: Router, public http: Http) {
    	this.loggedIn = !!localStorage.getItem('auth_token');
  	}
	
	login(userName: string, password: string) {
		console.log(userName + " " + password);

		let headers = new Headers();
		 //headers.append('Content-Type', 'text/html');
		  //base64url.encode(userName + ':' + password)
	    headers.append('Authorization', 'Basic QmFsYWppOkJhbGFqaTEyMw=='); 
		let options = new RequestOptions({ headers: headers });
		
		return this.http.post('http://10.1.6.189:8080/acta/api/userAuth', '',options)
			.map((res:Response) => res.json())
			.catch(this.handleError)
			.subscribe(
				data => {
				localStorage.setItem("auth_token",data.auth_token);
				this.router.navigate(['/applicants']);
				}
		     );
			
	}

	private handleError(error: Response) {
		console.error(error);
		return Observable.throw(error.json().error || 'Server error');
	}

	logout() {
	    localStorage.removeItem('auth_token');
	    this.loggedIn = false;
	}

	isLoggedIn() {
	   return this.loggedIn;
	}
	
}