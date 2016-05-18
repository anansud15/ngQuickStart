import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'search-app',
    templateUrl: 'app/search/search-app.component.html',
    /*template: `
      <div class="filterSearch">
        <div class="right-inner-addon ">
          <i class="fa fa-search" aria-hidden="true"></i>
          <input type="search" class="form-control" placeholder="Search" />
        </div>
      </div>
    `*/
})
export class SearchAppComponent {
	searchFilter: string = '';
	@Output() searchNotify: EventEmitter<string> = new EventEmitter<string>();

	emitSearchFilter() {
		this.searchNotify.emit(this.searchFilter);
		console.log("onclick .. onsearchnotify .. ");

	}
 }