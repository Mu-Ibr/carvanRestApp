import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core'
import { TableService } from '../table.service';
import { OrderService } from '../order.service';
import * as $ from 'jquery';
import { Chart, registerables} from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.page.html',
  styleUrls: ['./sales-report.page.scss'],
})
export class SalesReportPage implements OnInit {


  @ViewChild('barChart') barChart;
  @ViewChild('barChart2') barChart2;
  bars: any;
  income: number;
  totalOfClientsPerDay: number;
  averageIncomePerPerson: number;
  totalofTablesPerDay: number;
  private salesOption: number;
  salesOptionText: string;

  constructor(private tablesService: TableService,
    private orderService: OrderService) {
      this.salesOption = 1;
     }

  ionViewDidEnter() {
    this.createBarChartOrders();
    this.createBarChartPayment();
  }

  createBarChartOrders() {
    let stuffed=this.orderService.getStuffed(), appetizers=this.orderService.getAppetizers();
    let mainMeal=this.orderService.getMainmeal(), others=this.orderService.getOthers();
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'pie',
      data: {
        labels: ['ממולאים', 'מנות ראשונות', 'מנות עיקריות', 'אחר'],
        datasets: [{
          label: '',
          data: [stuffed, appetizers, mainMeal, others],
          backgroundColor: ['blue','green','orange', 'grey'], 
          borderColor: 'white',
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

  createBarChartPayment() {
    let numOfCash = this.tablesService.getNumberOfCashPayment(), numOfCredit = this.tablesService.getNumberOfCreditCardPayment();
    let numofCoupn = this.tablesService.getNumberofCoupon();
    this.bars = new Chart(this.barChart2.nativeElement, {
      type: 'pie',
      data: {
        labels: ['מזומנים', 'כרטיס אשראי', 'קופון',],
        datasets: [{
          label: '',
          data: [numOfCash, numOfCredit, numofCoupn],
          backgroundColor: ['blue','green','orange'], 
          borderColor: 'white',
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
    if(this.salesOption == 1){
      this.salesOptionText = 'יומי';
      this.income= this.tablesService.getTotalIncomeOfOrders();
      this.totalOfClientsPerDay= this.tablesService.getNumberOfClinetsPerDay();
      this.totalofTablesPerDay= this.tablesService.getNumberofTablesPerDay();
      if(this.totalOfClientsPerDay>0){
        this.averageIncomePerPerson = (this.income/this.totalOfClientsPerDay);
      }
      else{
        this.averageIncomePerPerson = 0;
      }
    }
    else if(this.salesOption == 2){
      this.salesOptionText = 'שבועי';
      this.income= this.tablesService.getTotalIncomeOfOrders();
      this.totalOfClientsPerDay= this.tablesService.getNumberOfClinetsPerDay();
      this.totalofTablesPerDay= this.tablesService.getNumberofTablesPerDay();
      if(this.totalOfClientsPerDay>0){
        this.averageIncomePerPerson = (this.income/this.totalOfClientsPerDay);
      }
      else{
        this.averageIncomePerPerson = 0;
      }
    }
    else if(this.salesOption == 3){
      this.salesOptionText = 'חודשי';
      this.income= this.tablesService.getTotalIncomeOfOrders();
      this.totalOfClientsPerDay= this.tablesService.getNumberOfClinetsPerDay();
      this.totalofTablesPerDay= this.tablesService.getNumberofTablesPerDay();
      if(this.totalOfClientsPerDay>0){
        this.averageIncomePerPerson = (this.income/this.totalOfClientsPerDay);
      }
      else{
        this.averageIncomePerPerson = 0;
      }
    }
  }

  onChange(salesOption){
    let val = $("#salesOption :selected").val();
    if(val == 'daily'){
      this.salesOption = 1;
    }
    else if(val == 'weekly'){
      this.salesOption = 2;
    }
    else if(val == 'monthly'){
      this.salesOption = 3;
    }
    this.ngOnInit();
  }
}
