import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-inverted-child',
  template: `
    <input type="text" [(ngModel)]="invertedInput" placeholder="Enter a value">
    <button (click)="passValue()">Pass Value</button>
  `,
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvertedChildComponent {
  invertedInput: string = '';
  @Output() valueChanged = new EventEmitter<string>();

  passValue() {
    this.valueChanged.emit(this.invertedInput);
  }
}
