import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private ProductId: number;
  constructor(private rooteInfo: ActivatedRoute) {
  }

  ngOnInit() {
    this.rooteInfo.params.subscribe((params: Params) => this.ProductId = params.userId);
    // this.ProductId = this.rooteInfo.snapshot.params.userId;
  }

}
