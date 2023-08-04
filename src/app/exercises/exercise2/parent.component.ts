import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <input type="text" [(ngModel)]="inputValue" placeholder="Enter a value">
    <button (click)="passValue()">Pass Value</button>
    <app-child [value]="childValue"></app-child>
  `,
  
})
export class ParentComponent {
  inputValue: string = '';
  childValue: string = '';

  passValue() {
    this.childValue = this.inputValue;
  }
  ngOnChanges() {
    console.log('ParentComponent - ngOnChanges');
  }

  ngDoCheck() {
    console.log('ParentComponent - ngDoCheck');
  }

  ngOnInit() {
    console.log('ParentComponent - ngOnInit');
  }

  ngAfterViewInit() {
    console.log('ParentComponent - ngAfterViewInit');
  }
}
