import { Component } from '@angular/core';
import { ActContentComponent } from './content/act-content.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ActContentComponent]
})
export class AppComponent { }