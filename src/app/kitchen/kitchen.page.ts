import { Component, OnInit } from '@angular/core';
import { TableService } from '../table.service';
import { Table } from 'src/app/Table.model';
import { Order } from '../Order.model';
import { OrderService } from '../order.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.page.html',
  styleUrls: ['./kitchen.page.scss'],
})
export class KitchenPage implements OnInit {

  tables: Table[];
  orderedList: Order[];
  strOrders: String[];
  workerName: any;

  constructor(private tableservice: TableService,
    private orderservice: OrderService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.workerName = this.route.snapshot.queryParamMap.get('id')|| ' ';
    this.tables = this.tableservice.getTables();
    this.orderedList = this.orderservice.getOrders();
    this.orders();
  }

  removeItem(order: Order){
    let index = this.orderedList.indexOf(order);
    if(index > -1){
      this.orderedList.splice(index, 1);
    }
  }

  orders(){
  }

  // printOrder(tableNum: number, ordered: String[]){
  //   this.orderedList.push(ordered);
  // }
}