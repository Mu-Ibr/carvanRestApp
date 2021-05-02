import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ExpensesService } from '../expenses.service';
import { Expense } from '../Expense.model';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.page.html',
  styleUrls: ['./expenses.page.scss'],
})
export class ExpensesPage implements OnInit {

  expenses: Expense[];
  sum: number;
  expenseType: string;
  listType: string;
  sumofAll: number;

  constructor(
    private exepnseService: ExpensesService,
    private alertController: AlertController) { }

  ngOnInit() {
    this.expenses = this.exepnseService.getExpOthers();
    this.listType = 'אחר';
    this.expenseType= 'others';
    this.sum = this.exepnseService.getOthers();
    this.sumofAll = this.exepnseService.getSumofAll();
  }

  
  async addNewExpense() {
    const alert = await this.alertController.create({
      header: 'הוסף',
      inputs: [
        {
          name: 'nameFor',
          id: 'nameFor',
          type: 'text',
          placeholder: 'למען'
        },
        {
          name: 'amount',
          id: 'amount',
          type: 'number',
          placeholder: 'סכום'
        },
        {
          name: 'dueDate',
          id: 'dueDate',
          type: 'date',
          placeholder: 'לתאריך'
        },
        {
          name:'type',
          id:'type',
          type: 'text',
          placeholder:'סוג'
        }
      ],
      buttons: [
        {
          text: 'ביטול',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'אשר',
          handler: data=>{
            if(!data.amount)
              data.amount = 0;
            this.expenses.push(new Expense(data.nameFor, data.amount, data.dueDate, data.type));
            this.addToExpenseService(data.nameFor, parseInt(data.amount), data.dueDate, data.type);
            this.exepnseService.addSum(parseInt(data.amount));
            this.sumExpenses();
          }
        }
      ]
    });
    await alert.present();
  }

  addToExpenseService(nameFor:string, amount:number, dueDate:Date, type:string){
    if(this.expenseType == 'fixedCosts'){
      this.exepnseService.addFixedCosts(new Expense(nameFor, amount, dueDate, type), amount);
      this.sum = this.exepnseService.getFixedCosts();
    }
    else if(this.expenseType == 'loans'){
      this.exepnseService.addLoans(new Expense(nameFor, amount, dueDate, type), amount);
      this.sum = this.exepnseService.getLoans();
    }
    else if(this.expenseType == 'wages'){
      this.exepnseService.addWages(new Expense(nameFor, amount, dueDate, type), amount);
      this.sum = this.exepnseService.getWages();
    }
    else if(this.expenseType == 'others'){
      this.exepnseService.addOthers(new Expense(nameFor, amount, dueDate, type), amount);
      this.sum = this.exepnseService.getOthers();
    }
  }

  getExpenseList(expense: string){
    if(expense == 'fixedCosts'){
      this.expenses = this.exepnseService.getExpFixedCosts();
      this.sum = this.exepnseService.getFixedCosts();
      this.expenseType = 'fixedCosts';
      this.listType = 'הוצאות קבועות';
    }
    else if(expense == 'loans'){
      this.expenses = this.exepnseService.getExpLoans();
      this.sum = this.exepnseService.getLoans();
      this.expenseType = 'loans';
      this.listType = 'הלוואות';
    }
    else if(expense == 'wages'){
      this.expenses = this.exepnseService.getExpWages();
      this.sum = this.exepnseService.getWages();
      this.expenseType = 'wages';
      this.listType = 'משכורות';
    }
    else if(expense == 'others'){
      this.expenses = this.exepnseService.getExpOthers();
      this.sum = this.exepnseService.getOthers();
      this.expenseType = 'others';
      this.listType = 'אחר';
    }
  }
  removeExpense(item){
    let index = this.expenses.indexOf(item);
    if(index > -1){
      this.expenses.splice(index, 1);
    }
    this.removeExpenseService(this.expenseType, item);
    this.sumofAll = this.exepnseService.getSumofAll();
  }

  removeExpenseService(expense: string, item){
    if(expense == 'fixedCosts'){
      this.exepnseService.removeFixdCosts(item);
      this.sum = this.exepnseService.getFixedCosts();
    }
    else if(expense == 'loans'){
      this.exepnseService.removeLoans(item);
      this.sum = this.exepnseService.getLoans();
    }
    else if(expense == 'wages'){
      this.exepnseService.removeWages(item);
      this.sum = this.exepnseService.getWages();
    }
    else if(expense == 'others'){
      this.exepnseService.removeOthers(item);
      this.sum = this.exepnseService.getOthers();
    }
  }
  
  sumExpenses(){
    this.sumofAll = this.exepnseService.getSumofAll();
  }

}
