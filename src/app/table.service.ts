import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from './Order.model';
import { Table } from './Table.model';
import { WaiterMenuItem } from './WaiterMenuItem.model';
import { tap, switchMap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class TableService {
  private tables: Table[] = [];
  private numberOfClinetsPerDay: number;
  private numberofTablesPerDay: number;
  private numberOfCashPayment: number;
  private numberOfCreditCardPayment: number;
  private numberOfCoupon: number;
  private totalIncomeOfOrders: number;
  private incomeWeeklyArr: number[] = [];
  private day: number;
  private previousDayIncome: number;


  constructor(private http: HttpClient){}

  generateTables(){
    for(let i=0; i<27; i++){
      this.tables.push(new Table(i,"",false,null,0,0));  
    }
    for(let i=0; i<7; i++){
      this.incomeWeeklyArr.push(0);
    }
    this.numberOfClinetsPerDay = 0;
    this.numberofTablesPerDay = 0;
    this.totalIncomeOfOrders = 0;
    this.numberOfCashPayment = 0;
    this.numberOfCoupon = 0;
    this.numberOfCreditCardPayment = 0;
    this.day = 0;
    this.previousDayIncome = 0;
    }

  addTable(num:number, name:string, isTaken:boolean, ordered: WaiterMenuItem[], totalSum: number, numberOfClients: number){
    let table = new Table(num, name, isTaken, ordered, totalSum, numberOfClients);
    this.tables[num].isTaken = isTaken;
    this.tables[num].waiterName = name;
    this.tables[num].orderedItems = ordered;
    this.tables[num].totalSum = totalSum;
    this.tables[num].numberOfClients = numberOfClients;
    this.numberofTablesPerDay++;
  }

  isTaken(tableNum: number){
    for(let table of this.tables){
      if(table.tableNum == tableNum){
        if(table.isTaken == true)
          return true;
      }
    }
    return false;
  }

  getTables(){
    return[...this.tables];
  }
  
  getNumberOfClinetsPerDay(){
    return this.numberOfClinetsPerDay;
  } 

  getNumberofTablesPerDay(){
    return this.numberofTablesPerDay;
  }
  
  getTotalIncomeOfOrders(){
    return this.totalIncomeOfOrders;
  }

  getNumberOfCreditCardPayment(){
    return this.numberOfCreditCardPayment;
  }

  getNumberofCoupon(){
    return this.numberOfCoupon;
  }

  getNumberOfCashPayment(){
    return this.numberOfCashPayment;
  }

  addNumberOfCreditCardPayment(){
    this.numberOfCreditCardPayment++;
  }

  addNumberofCoupon(){
    this.numberOfCoupon++;
  }

  addNumberOfCashPayment(){
    this.numberOfCashPayment++;
  }

  changePreviousDayIncome(income: number){
    this.previousDayIncome = income;
  }

  getPreviousDayIncome(){
    return this.previousDayIncome;
  }

  getTableByNumber(tableNum: number){
    for(let table of this.tables){
      if(table.tableNum == tableNum){
          return table;
          break;
      }
    }
    return null;
  }
  
  removeTable(tableNum: number){
    for(let table of this.tables){
      if(table.tableNum == tableNum){
        this.totalIncomeOfOrders+=table.totalSum;
        this.numberOfClinetsPerDay+=table.numberOfClients;
        table.isTaken = false;
        table.waiterName = "";
        table.orderedItems = null;
        table.totalSum = 0;
        table.numberOfClients = 0;
        break;
      }
    }
  }

  nextDay(){
    this.day++;
    if(this.day > 6){
      this.day = 0;
    }
  }

  getDay(){
    return this.day;
  }

  getIncomeWeeklyArr(){
    return [...this.incomeWeeklyArr];
  }

  addWeklyIncome(amount: number, day: number){
    this.incomeWeeklyArr[day] = amount;
  }

  getDayIncomeOfWeek(day: number){
    return this.incomeWeeklyArr[day];
  }
}
