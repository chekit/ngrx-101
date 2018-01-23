import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

enum FilterMods {
  SEARCH = 'search',
  TAGS = 'tags',
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() filter$: Subject<String>;

  @Input() public tagList: Set<string> = new Set();
  
  @Input() public set mod(value: string) {
    switch (value) {
      case FilterMods.SEARCH:
        this.isSearch = true;
        break;
      case FilterMods.TAGS:
        this.isTags = true;
        break;
    }
  };

  public query: string = null;

  public isSearch: boolean = false;
  public isTags: boolean = false;
  public currentTag: string = '';

  constructor() { }

  ngOnInit() { }

  /**
   * Handler для поисковой строки
   * 
   * @param {string} query 
   */
  public filter(query: string): void {
    this.filter$.next(query);
  }

  public tracByIndex(index: number): number {
    return index;
  }

  /**
   * Handler для тэгов
   * 
   * @param {string} tagName 
   */
  public selectByTag(tagName: string): void {
    if (this.currentTag !== tagName) {
      this.currentTag = !!tagName ? tagName : '';

      this.filter$.next(this.currentTag);
    }
  }
}
