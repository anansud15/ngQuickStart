import { Component } from '@angular/core';
import { ActContainerComponent } from './container/act-container.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ActContainerComponent]
})
export class AppComponent { }