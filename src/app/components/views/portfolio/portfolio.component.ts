import { Component, OnInit } from '@angular/core';

const PORTFOLIO_CARDS = [
  {
    title: 'COVID-19 Tracker',
    url: 'https://virwatch.com',
    desc: 'Global and US tracker for COVID-19 related cases.',
    previewImgSrc: 'assets/images/virwatch_site_preview.png',
    iconTags: ['assets/images/netlify_logo.png', 'assets/images/vue_logo.png'],
    using: [
      'ChartJS',
      'randomcolor by David Merfield',
      'comma-separated-values by Kash Nouroozi'
    ]
  }
];

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  worksList = PORTFOLIO_CARDS;

  constructor() {}

  ngOnInit() {}
}
