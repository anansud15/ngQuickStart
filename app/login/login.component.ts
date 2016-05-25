import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { LoginService } from './login.service';

@Component({
    templateUrl: 'app/login/login.component.html',
    directives: [FooterComponent]
})
export class LoginComponent {

	userName : string;
	password : string;

	constructor(private _router: Router, private loginService: LoginService) {

	}


	onClick() {
		this.loginService.login(this.userName, this.password);
	}
}