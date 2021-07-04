import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { Inventory } from '../inventory.model';
import { AlertController } from '@ionic/angular';
import { ExpensesService } from '../expenses.service';

@Component({
  selector: 'app-inventory-managment',
  templateUrl: './inventory-managment.page.html',
  styleUrls: ['./inventory-managment.page.scss'],
})
export class InventoryManagmentPage implements OnInit {
  inventories: Inventory[];
  totalSum:number;
  sum: number;
  inventoryType: string;
  listType: string;

  constructor(
    private inventoryService: InventoryService,
    private alertController: AlertController,
    private expenseService: ExpensesService
    ) { }

  ngOnInit() {
    this.inventories = this.inventoryService.getAllFood();
    this.sum = this.inventoryService.getSumOfFood();
    this.inventoryType = 'food';
    this.listType = 'מזון';
    this.totalSum = this.inventoryService.getSumofAll();
  }

  async addNewItem(){
    const alert = await this.alertController.create({
      header: 'הוסף פריט להזמנה',
      inputs: [
        {
          name: 'itemName',
          id: 'name',
          type: 'text',
          placeholder: 'שם הפריט'
        },
        {
          name: 'amount',
          id: 'amount',
          type: 'number',
          placeholder: 'כמות להזמנה'
        },
        {
          name: 'total',
          id: 'total',
          type: 'number',
          placeholder: 'עלות הזמנת הפריט בשקלים '
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
            if(!data.total)
              data.total = 0;
            if(!data.amount)
              data.amount = 0;
            this.inventories.push(new Inventory(data.itemName, data.amount, data.total));
            this.addToInventoryService(data.itemName, parseInt(data.amount), parseInt(data.total));
            this.inventoryService.addSum(parseInt(data.total));
            this.expenseService.addExpenseMonth(parseInt(data.total));
            this.sumExpenses();        
          }
        }
      ]
    });
    await alert.present();
  }

  addToInventoryService(itemName:string, amount:number, total:number){
    if(this.inventoryType == 'equipments'){
      this.inventoryService.addEquipment(new Inventory(itemName, amount, total));
      this.sum = this.inventoryService.getSumOfEquipments();
    }
    else if(this.inventoryType == 'food'){
      this.inventoryService.addFood(new Inventory(itemName, amount, total));
      this.sum = this.inventoryService.getSumOfFood();
    }
    else if(this.inventoryType == 'drinks'){
      this.inventoryService.addDrinks(new Inventory(itemName, amount, total));
      this.sum = this.inventoryService.getSumOfDrinks();
    }
    else if(this.inventoryType == 'cleaners'){
      this.inventoryService.addCleaners(new Inventory(itemName, amount, total));
      this.sum = this.inventoryService.getSumOfCleaners();
    }
    else if(this.inventoryType == 'others'){
      this.inventoryService.addOthers(new Inventory(itemName, amount, total));
      this.sum = this.inventoryService.getSumofOthers();
    }
    this.getInventoryList(this.inventoryType);
  }

  removeItem(item){
    let index = this.inventories.indexOf(item);
    if(index > -1){
      this.inventories.splice(index, 1);
    }
    this.removeItemService(this.inventoryType, item);
    this.totalSum = this.inventoryService.getSumofAll();
  }

  removeItemService(inventory: string, item){
    if(inventory == 'equipments'){
      this.inventoryService.removeEquipment(item);
      this.sum = this.inventoryService.getSumOfEquipments();
    }
    else if(inventory == 'food'){
      this.inventoryService.removeFood(item);
      this.sum = this.inventoryService.getSumOfFood();
    }
    else if(inventory == 'drinks'){
      this.inventoryService.removeDrinks(item);
      this.sum = this.inventoryService.getSumOfDrinks();
    }
    else if(inventory == 'cleaners'){
      this.inventoryService.removeCleaners(item);
      this.sum = this.inventoryService.getSumOfCleaners();
    }
    else if(inventory == 'others'){
      this.inventoryService.removeOthers(item);
      this.sum = this.inventoryService.getSumofOthers();
    }
  }

  getInventoryList(inventory: string){
    if(inventory == 'equipments'){
      this.inventories = this.inventoryService.getAllEquipments();
      this.sum = this.inventoryService.getSumOfEquipments();
      this.inventoryType = 'equipments';
      this.listType = 'ציוד';
    }
    else if(inventory == 'food'){
      this.inventories = this.inventoryService.getAllFood();
      this.sum = this.inventoryService.getSumOfFood();
      this.inventoryType = 'food';
      this.listType = 'מזון';
    }
    else if(inventory == 'drinks'){
      this.inventories = this.inventoryService.getAllDrinks();
      this.sum = this.inventoryService.getSumOfDrinks();
      this.inventoryType = 'drinks';
      this.listType = 'משקאות';
    }
    else if(inventory == 'cleaners'){
      this.inventories = this.inventoryService.getAllCleaners();
      this.sum = this.inventoryService.getSumOfCleaners();
      this.inventoryType = 'cleaners';
      this.listType = 'חומרי ניקוי';
    }
    else if(inventory == 'others'){
      this.inventories = this.inventoryService.getAllOthers();
      this.sum = this.inventoryService.getSumofOthers();
      this.inventoryType = 'others';
      this.listType = 'אחר';
    }
  }
  
  sumExpenses(){
    this.totalSum = this.inventoryService.getSumofAll();
  }
}
