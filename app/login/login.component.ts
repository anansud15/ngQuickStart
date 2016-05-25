import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
    templateUrl: 'app/login/login.component.html'
})
export class LoginComponent {

	constructor(private _router: Router) {

	}

	onClick() {
	    this._router.navigate(['/applicants']);
	}
}