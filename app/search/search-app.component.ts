import {Component} from '@angular/core';

@Component({
    selector: 'search-app',
    template: `
      <div class="filterSearch">
        <div class="right-inner-addon ">
          <i class="fa fa-search" aria-hidden="true"></i>
          <input type="search" class="form-control" placeholder="Search" />
        </div>
      </div>
    `
})
export class SearchAppComponent {

 }