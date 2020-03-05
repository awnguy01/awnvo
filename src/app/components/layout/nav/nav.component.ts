import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: [ './nav.component.scss' ]
})
export class NavComponent implements OnInit {
  currRoute = '/';

  constructor(readonly router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      this.currRoute = event.url || this.currRoute;
    });
  }

  isRouteSelected(route: string) {
    return route.toUpperCase() === this.currRoute.toUpperCase();
  }
}
