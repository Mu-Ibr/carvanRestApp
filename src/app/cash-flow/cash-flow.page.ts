import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core'
import { ExpensesService } from '../expenses.service';
import { InventoryService } from '../inventory.service';
import { OrderService } from '../order.service';
import { TableService } from '../table.service';
import { Chart, registerables} from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-cash-flow',
  templateUrl: './cash-flow.page.html',
  styleUrls: ['./cash-flow.page.scss'],
})
export class CashFlowPage implements OnInit {


  @ViewChild('barChart') barChart;

  bars: any;
  expenses: number;
  incomes: number;

  constructor(
    private expenseservice: ExpensesService,
    private inventoryservice: InventoryService,
    private orderIncome: TableService) { }

  ionViewDidEnter() {
    this.createBarChart();
  }

  createBarChart() {
    let months = ['ינואר','פברואר','מרץ','אפריל','מאי','יוני','יולי','אוגוסט','ספטמבר','אקטובר','נובמבר','דצמבר']
    let i= this.expenseservice.getMonth();
    let expensesMonthly = this.expenseservice.getExpenseMonthly();
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: [months[(i+3)%months.length], months[(i+2)%months.length], months[(i+1)%months.length], months[(i)%months.length]],
        datasets: [{
          label: 'תזרים מזומנים ל3 החודשים האחרונים',
          //data: [expensesMonthly[((i)%months.length)], expensesMonthly[((i+1)%months.length)], expensesMonthly[((i+2)%months.length)], expensesMonthly[((i+3)%months.length)]],
          data: [30000, 50000, 20000, 400 ],
          backgroundColor: ['grey','blue','green','orange'], 
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
   this.sumExpenses();
   this.sumIncome();
  }

  sumExpenses(){
    this.expenses = (this.expenseservice.getSumofAll())+(this.inventoryservice.getSumofAll());
  }

  sumIncome(){
    this.incomes = this.orderIncome.getTotalIncomeOfOrders();
    }
}
