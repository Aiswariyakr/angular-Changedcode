import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>Child Component</p>
    <p>Change Detection Strategy: {{ changeDetectionStrategy }}</p>
    <p>Value passed from parent: {{ value }}</p>
    <!--   <button (click)="toggleChangeDetection()">Toggle Change Detection</button>  -->
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
  @Input() value: string = '';
  changeDetectionStrategy: string = 'OnPush';

  constructor(private cdr: ChangeDetectorRef) {}

  toggleChangeDetection() {
    if (this.changeDetectionStrategy === 'OnPush') {
      this.changeDetectionStrategy = 'Default';
      this.cdr.detach(); // Detach OnPush change detection
    } else {
      this.changeDetectionStrategy = 'OnPush';
      this.cdr.reattach(); // Reattach OnPush change detection
    }
    // Manually trigger change detection for the component and its subtree
      this.cdr.detectChanges();
  }

  ngOnChanges() {
    console.log('ChildComponent - ngOnChanges');
  }

  ngDoCheck() {
    console.log('ChildComponent - ngDoCheck');
  }

  ngOnInit() {
    console.log('ChildComponent - ngOnInit');
  }

  ngAfterViewInit() {
    console.log('ChildComponent - ngAfterViewInit');
  }
}
