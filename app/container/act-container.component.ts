import { Component } from '@angular/core';
import { ApplicantCardsComponent } from '../applicants/applicant-list.component';
import { SearchAppComponent } from '../search/search-app.component';

@Component({
    selector: 'act-container',
    templateUrl: 'app/container/act-container.component.html',
    directives: [ApplicantCardsComponent, SearchAppComponent]
})
export class ActContainerComponent { 
	applicants: any[] = [
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

    nameFilter: string = '';

    onNameFilterNotify(nameString: string): void{
        this.nameFilter = nameString;
    }
}