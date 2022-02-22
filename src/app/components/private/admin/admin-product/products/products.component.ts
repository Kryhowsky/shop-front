import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

  displayedColumns: string[] = ["brand", "name", "description", "price", "quantity", "createdBy", "createdDate", "lastModifiedBy", "lastModifiedDate", "updateProduct", "deleteProduct"]

  constructor() { }

  ngOnInit(): void {
  }

}
