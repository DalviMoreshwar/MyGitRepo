import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Key } from 'protractor';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  selectedItems = [];
  total = 0;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    let items = this.cartService.getCart();
    let selected = {};
    for(let obj of items){
      if(selected[obj.id]){
        selected[obj.id].count++;
      }else{
        selected[obj.id] = {...obj, count: 1};
      }
    }
    this.selectedItems = Object.keys(selected).map(Key => selected[Key]);
    console.log(this.selectedItems);

    this.total = this.selectedItems.reduce((a,b)=>a+(b.count * b.price), 0);
    console.log(this.total);
  }

}
