import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';

const HEADER = 'Andrew Nguyen Vo';
const TYPE_SPEED = 100;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
  headerText = '';

  @ViewChild('container', { read: ElementRef, static: true })
  containerEl: ElementRef;

  @ViewChild('iBeam', { read: ElementRef, static: true })
  iBeamEl: ElementRef;

  @ViewChild('borderSvg', { read: ElementRef, static: true })
  borderSvgEl: ElementRef;

  @ViewChild('borderRect', { read: ElementRef, static: true })
  borderRectEl: ElementRef;

  constructor() {}

  ngOnInit() {
    if (typeof SVGRectElement.prototype.getTotalLength !== 'undefined') {
      this.setRectDimensions();
    }
    this.fakeIBeam();
    this.fakeTypingHeader();
  }

  @HostListener('resize')
  setRectDimensions(): void {
    const containerEl = this.containerEl.nativeElement;
    const containerHeight = containerEl.clientHeight;
    const containerWidth = containerEl.clientWidth;

    const svgEl = this.borderSvgEl.nativeElement;
    svgEl.style.height = containerHeight + 'px';
    svgEl.style.width = containerWidth + 'px';

    const rectEl = this.borderRectEl.nativeElement;
    rectEl.style.height = containerHeight + 'px';
    rectEl.style.width = containerWidth + 'px';
    rectEl.style.strokeDasharray = rectEl.getTotalLength();
    rectEl.style.strokeDashoffset = rectEl.getTotalLength();
  }

  fakeIBeam(): void {
    timer(0, 500).subscribe(() => {
      const currOpacity = this.iBeamEl.nativeElement.style.opacity;
      this.iBeamEl.nativeElement.style.opacity = currOpacity === '0' ? '1' : '0';
    });
  }

  fakeTypingHeader(): void {
    timer(0, TYPE_SPEED).pipe(take(HEADER.length)).subscribe(() => {
      this.headerText += HEADER[this.headerText.length];
    });
  }
}
