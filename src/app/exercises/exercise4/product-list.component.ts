import { Component, HostListener, OnInit, DoCheck, ChangeDetectionStrategy, ChangeDetectorRef,AfterViewChecked, } from '@angular/core';

@Component({
  selector: 'app-product-list',
  template: `
    <h2>Product List</h2>
    <div style="position: fixed; top: 0; right: 0; background: black; color: white;">
      <div>Number of viewChecked: {{viewCheckedCount}}</div>
      <div>Highest number of product initialized: {{highestNumberOfProductInitialized}}</div>
      <div>Time spent on page: {{timer | date:'HH:mm:ss'}}</div>
    </div>

    <ul>
      <li *ngFor="let product of products; trackBy: trackByProduct">
        <app-product [product]="product" (initializedCount)="updateHighestNumberOfProductInitialized($event)"></app-product>
      </li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush // Set the OnPush change detection strategy
})
export class ProductListComponent implements OnInit,AfterViewChecked {
  products: Product[] = [];
  viewCheckedCount = 0;
  highestNumberOfProductInitialized = 0;
  timer = new Date(0, 0, 0);
  timerInterval: any;
 
 constructor(private cdr: ChangeDetectorRef) {}

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const documentHeight = document.body.scrollHeight;
    const currentScroll = window.scrollY + window.innerHeight;
    const buffer = 200;
    if (currentScroll + buffer > documentHeight) {
      this.loadProducts();
    }
  }

  ngOnInit() {
    this.loadProducts();
    this.startTimer();
  }

  startTimer() {
    const delay = 1000; // Update time every second

    this.timerInterval = setInterval(() => {
      const currentTime = this.timer.getTime() + delay;
      this.timer = new Date(currentTime);
      this.cdr.markForCheck(); // Manually trigger change detection
    }, delay);
  }

  ngOnDestroy() {
    clearInterval(this.timerInterval);
  }

  // ngDoCheck() {
  //   // Calculate the number of products initialized based on viewCheckedCount
  //   const productInitializedCount = this.viewCheckedCount * 10;
  
  //   // Calculate the number of products loaded so far
  //   const loadedProductsCount = Math.floor(this.products.length / 10) * 10;
  
  //   // If the number of products initialized has increased, update the viewCheckedCount
  //   if (productInitializedCount !== loadedProductsCount) {
  //     this.viewCheckedCount = loadedProductsCount / 10;
  //   }
  // }
  updateHighestNumberOfProductInitialized(count: number) {
    this.highestNumberOfProductInitialized = Math.max(this.highestNumberOfProductInitialized, count);
  }

  loadProducts() {
    // DO NOT CHANGE THIS FUNCTION
    const start = this.products.length;
    const newProducts = Array(10).fill('').map((o, i) => ({
      id: (i + start).toString(),
      description: `mock product description ${i + start}`
    }));
    
    this.products = this.products.concat(...newProducts).map(p => ({...p}));
  }


  trackByProduct(index: number, product: Product): string {
    return product.id;
  }

  ngAfterViewChecked(): void {
    setTimeout(() => this.viewCheckedCount = Math.ceil(this.products.length / 10), 0);
  }
  
}

export interface Product {
  id: string;
  description: string;
}
