import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/order.service';
import { TableService } from 'src/app/table.service';
import { Table } from 'src/app/Table.model'
import { Order } from 'src/app/Order.model';
import { WaiterMenuService } from 'src/app/waiter-menu.service';
import { WaiterMenuItem } from 'src/app/WaiterMenuItem.model';
//import { Notifications } from '@mobiscroll/angular';
import { AlertController, ToastController } from '@ionic/angular';
import * as $ from 'jquery';


@Component({
  selector: 'app-order-waiter',
  templateUrl: './order-waiter.page.html',
  styleUrls: ['./order-waiter.page.scss'],
})
export class OrderWaiterPage implements OnInit {

  menu: WaiterMenuItem[];
  ordered: Order[];
  table: Table;
  tableNum: any;
  appetizers: WaiterMenuItem[];
  soupd: WaiterMenuItem[];
  stuffed: WaiterMenuItem[];
  mainMeal: WaiterMenuItem[];
  drinks: WaiterMenuItem[];
  desserts: WaiterMenuItem[];
  printorder: WaiterMenuItem[];
  displayMenu: boolean;
  displayOrder: boolean;
  displayOrderMenu: boolean;
  displayCloseTable: boolean;
  totalSum: number;

  constructor(
    private route: ActivatedRoute, 
    private tableservice: TableService,
    private orderservice: OrderService,
    private waiterMenu: WaiterMenuService,
    private notify: ToastController,
    private router: Router,
    private alertController: AlertController) { }
    

  ngOnInit() {
    this.tableNum = this.route.snapshot.queryParamMap.get('id')||0;;
    this.ordered = this.orderservice.getOrders();
    this.appetizers = this.waiterMenu.Appetizers;
    this.soupd = this.waiterMenu.Soups;
    this.stuffed = this.waiterMenu.Stuffed;
    this.mainMeal = this.waiterMenu.MainMeal;
    this.drinks = this.waiterMenu.Drinks;
    this.desserts = this.waiterMenu.Desserts;
    this.table = this.tableservice.getTableByNumber(this.tableNum);
    if(this.table.orderedItems == null)
      this.table.orderedItems = [];
    else
      this.printorder = this.table.orderedItems;
    this.menu = this.appetizers;
    this.displayMenu = true;
    this.displayOrder = false;
    this.displayOrderMenu = true;
    this.displayCloseTable = false;
    this.totalSum = this.table.totalSum;
  }  

  printOrder(){
    if(this.table.orderedItems==null)
      return;
    this.printorder = this.table.orderedItems;
    this.totalSum = this.table.totalSum;
    this.displayOrder = true;
    this.displayMenu = false;
  }

  submitOrder(){
    this.printOrder();
    this.notify.create({
      message: "ההזמנה נשלחה למטבח"
    });
    let str = "שולחן מספר "+this.tableNum+"\t"+"מלצר: "+this.table.waiterName+"\n";
    for(let order of this.table.orderedItems){
          str = str+order.name+" - \n";
        }
    this.orderservice.addOrder(this.tableNum,this.totalSum,str);
  }

  removeTable(){
    this.displayOrderMenu = false;
    this.displayCloseTable = true;
  }

  showSelectValue(paymentType){
  }

  closeAndGetBack(){
    let val = $("#paymentType :selected").val();
    if(val == 'cash'){
      this.tableservice.addNumberOfCashPayment();
    }
    else if(val == 'creditCard'){
      this.tableservice.addNumberOfCreditCardPayment();
    }
    else if(val == 'coupon'){
      this.tableservice.addNumberofCoupon();
    }
    this.tableservice.removeTable(this.tableNum);
    this.router.navigate(['./waiter']);
  }

  cancelClose(){
    this.displayCloseTable = false;
    this.displayOrderMenu = true;
  }

  printMenu(menuItems: WaiterMenuItem[]){
    this.menu = menuItems;
    this.displayOrder = false;
    this.displayMenu = true;
  }

  addItem(menuitem: WaiterMenuItem){
    this.table.orderedItems.push(menuitem);
    this.table.totalSum+=menuitem.price;
    if(this.menu == this.appetizers)
      this.orderservice.addAppetizers();
    else if(this.menu == this.stuffed)
       this.orderservice.addStuffed();
    else if(this.menu == this.mainMeal)
      this.orderservice.addMainmeal();
    else
      this.orderservice.addOthers();
  }

  removeItem(item: WaiterMenuItem){
    let index = this.table.orderedItems.indexOf(item);
    this.table.totalSum-=item.price;
    if(index > -1){
      this.table.orderedItems.splice(index, 1);
    }
    this.totalSum = this.table.totalSum;
  }
}