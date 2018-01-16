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
  @Input() public tagList: Set<string> = new Set();

  @Output() public filterList: EventEmitter<string> = new EventEmitter();
  
  public query: string = null;

  public isSearch: boolean = false;
  public isTags: boolean = false;
  public currentTag: string = null;

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

  public tracByIndex(index: number): number {
    return index;
  }

  public selectByTag(tagName: string) {
    this.currentTag = !!tagName ? tagName : null;

    this.filterList.emit(this.currentTag);
  }
}
