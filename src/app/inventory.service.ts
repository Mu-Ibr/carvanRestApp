import { Injectable } from '@angular/core';
import { Inventory } from './inventory.model'

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private equipments: Inventory[]=[];
  private food: Inventory[]=[];
  private drinks: Inventory[]=[];
  private cleaners: Inventory[]=[];
  private others: Inventory[]=[];
  private sumOfAll: number;
  private sumOfEquipments: number;
  private sumOfFood: number;
  private sumOfDrinks: number;
  private sumOfCleaners: number;
  private sumOfOthers: number;


  constructor() {
    this.sumOfAll=0;
    this.sumOfDrinks=0;
    this.sumOfEquipments=0;
    this.sumOfFood=0;
    this.sumOfOthers=0;
    this.sumOfCleaners=0;
   }
  
  getSumofAll(){
    return this.sumOfAll;
  }

  addSum(total){
    this.sumOfAll = this.sumOfAll + total;
  }
  
  addEquipment(inventory: Inventory){
    this.equipments.push(inventory);
    this.sumOfEquipments= (this.sumOfEquipments) + (inventory.total);
  }
  
  addFood(inventory: Inventory){
    this.food.push(inventory);
    this.sumOfFood= (this.sumOfFood) + (inventory.total);
  }
  
  addDrinks(inventory: Inventory){
    this.drinks.push(inventory);
    this.sumOfDrinks= (this.sumOfDrinks) + (inventory.total);
  }
  
  addCleaners(inventory: Inventory){
    this.cleaners.push(inventory);
    this.sumOfCleaners= (this.sumOfCleaners) + (inventory.total);
  }
  
  addOthers(inventory: Inventory){
    this.others.push(inventory);
    this.sumOfOthers= (this.sumOfOthers) + (inventory.total);
  }

  removeSum(total){
    this.sumOfAll = this.sumOfAll - total;
  }

  removeEquipment(item){
    let index = this.equipments.indexOf(item);
    if(index > -1){
      this.removeSum(item.total);
      this.sumOfEquipments = this.sumOfEquipments - item.total;
      this.equipments.splice(index, 1);
    }
  }

  removeFood(item){
    let index = this.food.indexOf(item);
    if(index > -1){
      this.removeSum(item.total);
      this.food.splice(index, 1);
      this.sumOfFood = this.sumOfFood - item.total;
    }
  }   

  removeDrinks(item){
    let index = this.drinks.indexOf(item);
    if(index > -1){
      this.removeSum(item.total);
      this.drinks.splice(index, 1);
      this.sumOfDrinks = this.sumOfDrinks - item.total;
    }
  }

  removeCleaners(item){
    let index = this.cleaners.indexOf(item);
    if(index > -1){
      this.removeSum(item.total);
      this.cleaners.splice(index, 1);
      this.sumOfCleaners = this.sumOfCleaners - item.total;
    }
  }
  
  removeOthers(item){
    let index = this.others.indexOf(item);
    if(index > -1){
      this.removeSum(item.total);
      this.others.splice(index, 1);
      this.sumOfOthers = this.sumOfOthers - item.total;
    }
  }
  
  getAllEquipments(){
    return [...this.equipments];
  }
  getAllFood(){
    return [...this.food];
  }
  getAllDrinks(){
    return [...this.drinks];
  }
  getAllCleaners(){
    return [...this.cleaners];
  }
  getAllOthers(){
    return [...this.others];
  }
  getSumOfEquipments(){
    return this.sumOfEquipments;
  }
  getSumOfFood(){
    return this.sumOfFood;
  }
  getSumOfDrinks(){
    return this.sumOfDrinks;
  }
  getSumOfCleaners(){
    return this.sumOfCleaners;
  }
  getSumofOthers(){
    return this.sumOfOthers;
  }

}
