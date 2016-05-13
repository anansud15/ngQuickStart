import {Component} from '@angular/core';

@Component({
    selector: 'applicant-cards',
    templateUrl: 'app/content/applicants/applicant-list.component.html',
})
export class ApplicantCardsComponent {

	APPLICANTS: any[] = [
  { "id": "00011", "name": "Mr. Nice", "city": "Phoenix", "state": "Arizona"},
  { "id": "00012", "name": "Narco", "city": "Phoenix", "state": "Arizona" },
  { "id": "00013", "name": "Bombasto", "city": "Phoenix", "state": "Arizona" },
  { "id": "00014", "name": "Celeritas", "city": "Phoenix", "state": "Arizona" },
  { "id": "00015", "name": "Magneta", "city": "Phoenix", "state": "Arizona" },
  { "id": "00016", "name": "RubberMan", "city": "Phoenix", "state": "Arizona" },
  { "id": "00017", "name": "Dynama", "city": "Phoenix", "state": "Arizona" },
  { "id": "00018", "name": "Dr IQ", "city": "Phoenix", "state": "Arizona" },
  { "id": "00019", "name": "Magma", "city": "Phoenix", "state": "Arizona" },
  { "id": "00020", "name": "Tornado", "city": "Phoenix", "state": "Arizona" }
];
 }