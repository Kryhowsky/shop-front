import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.sass']
})
export class ProductsListComponent implements OnInit {

  displayedColumns: string[] = ["brand", "name", "description", "price", "quantity"]

  constructor() { }

  ngOnInit(): void {
  }

}
