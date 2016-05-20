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
	nameFilter: string = '';
	@Output() nameFilterNotify: EventEmitter<string> = new EventEmitter<string>();

	emitNameFilter() {
		this.nameFilterNotify.emit(this.nameFilter);
		console.log("onclick .. onsearchnotify .. ");

	}
 }