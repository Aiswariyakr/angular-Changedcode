import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-inverted-parent',
  template: `
    <app-inverted-child (valueChanged)="displayValue($event)"></app-inverted-child>
    <p>Value from child: {{ childValue }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvertedParentComponent {
  childValue: string = '';

  displayValue(value: string) {
    this.childValue = value;
  }
}
