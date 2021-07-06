import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { ExpensesService } from '../expenses.service';
import { OrderService } from '../order.service';
import { TableService } from '../table.service';
import { Chart, registerables} from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-budget-managment',
  templateUrl: './budget-managment.page.html',
  styleUrls: ['./budget-managment.page.scss'],
})
export class BudgetManagmentPage implements OnInit {

  @ViewChild('barChart') barChart;
  @ViewChild('barChart3') barChart3;
  @ViewChild('barChart2') barChart2;

  bars: any;
  bars2: any;
  expenses: number;
  income: number;
  total: number;
  forecastDailyTotal: number;
  inventoriesSum: number;

  constructor(
    private inventory: InventoryService,
    private expenseservice: ExpensesService,
    private orderIncome: TableService,
    private orderItems: OrderService) { }

  ionViewDidEnter() {
    this.createBarChartExpense();
    this.createBarChartInventory();
    this.createBarChartIncome();
  }

  createBarChartExpense() {
    let wages=this.expenseservice.getWages(), inven=this.inventory.getSumofAll();
    let fixedCosts=this.expenseservice.getExpFixedCosts(), loans=this.expenseservice.getLoans();
    let others=this.expenseservice.getOthers();
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'pie',
      data: {
        labels: ['משכורות', 'מלאי', 'הוצאות קבועות', 'הלוואות', 'אחר'],
        datasets: [{
          label: '',
          data: [wages, inven, fixedCosts, loans, others],
          backgroundColor: ['white','blue','green','orange', 'grey'], 
          borderColor: 'red',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  
  createBarChartIncome() {
    let stuffed=this.orderItems.getStuffed(), appetizers=this.orderItems.getAppetizers();
    let mainMeal=this.orderItems.getMainmeal(), others=this.orderItems.getOthers();
    this.bars2 = new Chart(this.barChart2.nativeElement, {
      type: 'pie',
      data: {
        labels: ['ממולאים', 'מנות ראשונות', 'מנות עיקריות', 'אחר'],
        datasets: [{
          label: '',
          data: [stuffed, appetizers, mainMeal, others],
          backgroundColor: ['blue','green','orange', 'grey'], 
          borderColor: 'red',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  createBarChartInventory() {
    let equipments=this.inventory.getSumOfEquipments(), food=this.inventory.getSumOfFood();
    let drinks=this.inventory.getSumOfDrinks(), cleaners=this.inventory.getSumOfCleaners();
    let others=this.inventory.getSumofOthers();
    this.bars2 = new Chart(this.barChart3.nativeElement, {
      type: 'pie',
      data: {
        labels: ['ציוד', 'מזון', 'משקאות', 'חומרי ניקוי' ,'אחר'],
        datasets: [{
          label: '',
          data: [equipments, food, drinks, cleaners, others],
          backgroundColor: ['red','orange','green', 'blue' ,'grey'], 
          borderColor: 'red',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  ngOnInit() {
    this.expenseSum();
    this.incomeSum();
    this.inventoriesSum = this.inventory.getSumofAll();
    this.total = this.income - this.expenses;
    //this.forecastDailyTotal = this.dailySum();
    this.forecastDailyTotal = 6248;
  }

  expenseSum(){
    this.expenses = (this.expenseservice.getSumofAll()) + (this.inventory.getSumofAll());
  }

  incomeSum(){
    this.income = this.orderIncome.getTotalIncomeOfOrders();
  }

  dailySum(){
    let dayIncome = (this.orderIncome.getDayIncomeOfWeek(this.orderIncome.getDay()));
    let sum = dayIncome + (dayIncome*0.20); 
    let previousDayIncome = this.orderIncome.getPreviousDayIncome();
    let sum2 = 0;
    let average = 0;
    if(this.orderIncome.getDay() != 0){
      sum2 = previousDayIncome + (previousDayIncome*0.20);
      average = (sum+sum2)/2;
    }
    else if(this.orderIncome.getDay() == 6){
      sum2 = previousDayIncome + (previousDayIncome*0.50);
      sum2 = sum;
      average = sum2;
    }
    else{
      average = sum;
    }
    return average;
  }
  
} 

