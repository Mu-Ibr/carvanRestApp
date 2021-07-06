import { Injectable } from '@angular/core';
//import { getDateOnly } from '@mobiscroll/angular/dist/js/core/util/datetime';
//import { timeStamp } from 'console';
import { Expense } from './Expense.model';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  private expensesArr: Expense[] = [];
  private expFixedCosts: Expense[] = [];
  private expLoans: Expense[] = [];
  private expWages: Expense[] = [];
  private expOthers: Expense[] = [];
  sumofAll: number;
  private fixedCosts: number;
  private loans: number;
  private wages: number;
  private others: number;
  private month: number;
  private expenseMonthly: number[] = [];

  constructor() {
    this.sumofAll=0;
    this.fixedCosts = 0;
    this.loans = 0;
    this.wages = 0;
    this.others = 0;
    this.month = 3;
    for(let i=0; i<12; i++){
      this.expenseMonthly[i]=0;
    }
   }

  getExpenses(){
    return [...this.expensesArr];
  }
  
  getExpFixedCosts(){
    return [...this.expFixedCosts];
  }
  
  getExpLoans(){
    return [...this.expLoans];
  }
  
  getExpWages(){
    return [...this.expWages];
  }
  
  getExpOthers(){
    return [...this.expOthers];
  }
  
  getExpenseMonthly(){
    return [...this.expenseMonthly];
  }

  getSumofAll(){
    return this.sumofAll;
  }

  getFixedCosts(){
    return this.fixedCosts;
  }

  getLoans(){
    return this.loans;
  }

  getWages(){
    return this.wages;
  }

  getOthers(){
    return this.others;
  }

  getMonth(){
    return this.month;
  }

  addFixedCosts(item, sum: number){
    this.expFixedCosts.push(item);
    this.fixedCosts+=sum;
  }
  
  addLoans(item, sum: number){
    this.expLoans.push(item);
    this.loans+=sum;
  }

  addWages(item, sum: number){
    this.expWages.push(item);
    this.wages+=sum;
  }

  addOthers(item, sum: number){
    this.expOthers.push(item);
    this.others+=sum;
  }

  addMonth(){
    this.month++;
  }

  addExpenseMonth(sum: number){
    this.expenseMonthly[this.month] += sum;
  }

  addSum(amount){
    this.sumofAll = this.sumofAll + amount;
  }


  removeSum(total){
    this.sumofAll = this.sumofAll - total;
  }

  removeFixdCosts(item){
    let index = this.expFixedCosts.indexOf(item);
    if(index > -1){
      this.removeSum(item.total);
      this.fixedCosts = this.fixedCosts - item.total;
      this.expFixedCosts.splice(index, 1);
    }
  }

  removeLoans(item){
    let index = this.expLoans.indexOf(item);
    if(index > -1){
      this.removeSum(item.total);
      this.expLoans.splice(index, 1);
      this.loans = this.loans - item.total;
    }
  }   

  removeWages(item){
    let index = this.expWages.indexOf(item);
    if(index > -1){
      this.removeSum(item.total);
      this.expWages.splice(index, 1);
      this.wages = this.wages - item.total;
    }
  }
  
  removeOthers(item){
    let index = this.expOthers.indexOf(item);
    if(index > -1){
      this.removeSum(item.total);
      this.expOthers.splice(index, 1);
      this.others = this.others - item.total;
    }
  }
  
}
