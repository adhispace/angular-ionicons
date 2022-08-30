import { ChangeDetectorRef, Component, ElementRef, HostBinding, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import * as upperCamelCase from 'uppercamelcase';
import { Icons } from './icon.provider';

@Component({
  selector: 'ng-ionicon',
  template: `<ng-content></ng-content>`,
  styles: [
    `:host {
      display: inline-block;
      width: 24px;
      height: 24px;
      stroke: black;
      stroke-width: 10px;
      fill: currentColor;
    }
    `
  ]
})
export class AngularIoniconsComponent implements OnChanges {

  @Input() name!: string;
  constructor(
    private elem: ElementRef,
    private changeDetector: ChangeDetectorRef,
    private icons: Icons,
    private renderer: Renderer2
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    const icons = Object.assign({}, ...(this.icons as any as object[]));
    const svgFileName: string = `Ion${upperCamelCase(changes['name'].currentValue)}`;
    const svg = icons[svgFileName] || '';
    if (!svg) {
      console.warn(`Icon not found: ${changes['name'].currentValue}\n`);
    }
    this.elem.nativeElement.innerHTML = svg;
    if (svgFileName.includes('Outline')) {
      this.renderer.setStyle(this.elem.nativeElement, 'fill', 'none');
      this.renderer.setStyle(this.elem.nativeElement, 'stroke', 'black');
      this.renderer.setStyle(this.elem.nativeElement, 'strokeWidth', '10px');
    }
    this.changeDetector.markForCheck();
  }

}
