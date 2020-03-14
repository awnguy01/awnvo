import { Component, OnInit } from '@angular/core';
import { UsesInfoObject } from 'src/app/models/uses-info-object';
import { USES_DATA } from 'src/assets/uses';

@Component({
  selector: 'app-uses',
  templateUrl: './uses.component.html',
  styleUrls: [ './uses.component.scss' ]
})
export class UsesComponent implements OnInit {
  dataSource: UsesInfoObject[] = USES_DATA;

  constructor() {}

  ngOnInit() {}
}
