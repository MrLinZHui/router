import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
  private maneager: string;
  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    this.maneager = this.routeInfo.snapshot.params.maneager;
  }

}
