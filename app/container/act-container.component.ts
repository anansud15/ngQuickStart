import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx'; // load all features

import { ApplicantCardsComponent } from '../applicants/applicant-list.component';
import { SearchAppComponent } from '../search/search-app.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FilterComponent } from '../filter/filter.component';
import { TagsComponent } from '../tags/tags.component';
import { ApplicantService } from '../common/applicant.service';


@Component({
    selector: 'act-container',
    templateUrl: 'app/container/act-container.component.html',
    directives: [ApplicantCardsComponent, SearchAppComponent,
     	HeaderComponent, FooterComponent, FilterComponent, TagsComponent],
    providers: [ApplicantService, HTTP_PROVIDERS]
})
export class ActContainerComponent { 

    nameFilter: string = '';

    onNameFilterNotify(nameString: string): void{
        this.nameFilter = nameString;
    }
}