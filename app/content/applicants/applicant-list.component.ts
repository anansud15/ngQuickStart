import {Component} from '@angular/core';

@Component({
    selector: 'applicant-cards',
    templateUrl: 'app/content/applicants/applicant-list.component.html',
})
export class ApplicantCardsComponent {

	HEROES: any[] = [
  { "id": 11, "name": "Mr. Nice", "city": "Phoenix", "state": "Arizona"},
  { "id": 12, "name": "Narco", "city": "Phoenix", "state": "Arizona" },
  { "id": 13, "name": "Bombasto", "city": "Phoenix", "state": "Arizona" },
  { "id": 14, "name": "Celeritas", "city": "Phoenix", "state": "Arizona" },
  { "id": 15, "name": "Magneta", "city": "Phoenix", "state": "Arizona" },
  { "id": 16, "name": "RubberMan", "city": "Phoenix", "state": "Arizona" },
  { "id": 17, "name": "Dynama", "city": "Phoenix", "state": "Arizona" },
  { "id": 18, "name": "Dr IQ", "city": "Phoenix", "state": "Arizona" },
  { "id": 19, "name": "Magma", "city": "Phoenix", "state": "Arizona" },
  { "id": 20, "name": "Tornado", "city": "Phoenix", "state": "Arizona" }
];
 }