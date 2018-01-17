import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RoutesNames } from '../../pages/routes.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public route: string = null;
  public ROUTES_NAMES = RoutesNames;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd ) {
        this.route = !!e.url.slice(1) ? e.url.slice(1) : e.urlAfterRedirects.slice(1);
      }
    })
  }

}
