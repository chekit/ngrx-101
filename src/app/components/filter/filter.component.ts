import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

enum FilterStyles {
  SEARCH = 'search',
  TAGS = 'tags',
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() public style: string;
  @Output() public filterList: EventEmitter<string> = new EventEmitter();
  
  public query: string = null;

  public isSearch: boolean = false;
  public isTags: boolean = false;

  constructor() { }

  ngOnInit() {
    switch(this.style) {
      case FilterStyles.SEARCH:
        this.isSearch = true;
        break;
      case FilterStyles.TAGS:
        this.isTags = true;
        break;
    }
  }

  public filter(query: string): void {
    this.filterList.emit(query);
  }
}
