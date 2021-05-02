import { Injectable } from '@angular/core';
import { Order } from './Order.model';
import { Table } from './Table.model';
import { WaiterMenuItem } from './WaiterMenuItem.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private order: Order[] = [];
  totalIncomeOfOrders: number;
  private stuffed: number;
  private appetizers: number;
  private mainmeal: number;
  private others: number;

  constructor() {
    this.totalIncomeOfOrders = 0;
    this.stuffed=0;
    this.appetizers=0;
    this.mainmeal=0;
    this.others=0;
   }
  
  addOrder(table:Table, totalSum:number, items:String){
    this.order.push(new Order(table,totalSum,items));
  }

  getTotalIncomeOfOrders(){
    return this.totalIncomeOfOrders;
  }

  private sumofOrders(totalSum: number){
  }

  getOrders(){
    return [...this.order];
  }
  getStuffed(){
    return this.stuffed;
  }
  getAppetizers(){
    return this.appetizers;
  }
  getMainmeal(){
    return this.mainmeal;
  }
  getOthers(){
    return this.others;
  }
  addStuffed(){
    this.stuffed++;
  }
  addAppetizers(){
    this.appetizers++;
  }
  addMainmeal(){
    this.mainmeal++;
  }
  addOthers(){
    this.others++;
  }


}