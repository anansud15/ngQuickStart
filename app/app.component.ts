import { Component, OnInit } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES, Router, ROUTER_PROVIDERS } from '@angular/router';

import { ActContainerComponent } from './container/act-container.component';
import { LoginComponent } from './login/login.component';
import { ApplicantListComponent } from './applicants/applicant-list.component';
import { ApplicantDetailComponent } from './applicants/applicant-detail.component';
import { LoginService } from './login/login.service';

import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx'; // load all features

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS, LoginService]
})
@Routes([
  {path: '/login', component: LoginComponent},
  {path: '/applicants', component: ActContainerComponent},
  {path: '/applicant/:id', component: ApplicantDetailComponent},
  {path: '*', component: LoginComponent}
])
export class AppComponent implements OnInit { 
	constructor(private _router: Router) {

	}

	ngOnInit() {
		this._router.navigate(['/login']);
	}
}