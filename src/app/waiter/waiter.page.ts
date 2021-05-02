import { Component, OnInit, Query } from '@angular/core';
import { Table } from '../Table.model';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { TableService } from '../table.service';
import { Order } from '../Order.model';
import { OrderService } from '../order.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { data } from 'jquery';


@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.page.html',
  styleUrls: ['./waiter.page.scss'],
})
export class WaiterPage implements OnInit {
  tables: Table[];
  tableN: Table;
  workerName: any;

  constructor(
    private router: Router,
    public navCtrl: NavController,
    private route: ActivatedRoute,
    private tableservice: TableService,
    private alertController: AlertController) {}

  ngOnInit() {
    this.workerName = this.route.snapshot.queryParamMap.get('id')|| ' ';
    this.tables = this.tableservice.getTables();
   }

   async SelectClicked(table: Table){
     if(table.isTaken){
      this.router.navigate(['/order-waiter'], {queryParams: {id: table.tableNum}});
      return;
     }
     const alert = await this.alertController.create({
      inputs: [
        {
          name: 'numberOfClientsPerTable',
          id: 'numberOfClientsPerTable',
          type: 'number',
          placeholder: 'מספר הלקוחות בשולחן'
        },
      ],
      buttons: [
        {
          text: 'ביטול',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
            return;
          }
        }, {
          text: 'אשר',
          handler: data=>{
            if(!data.numberOfClientsPerTable){
              data.numberOfClientsPerTable = 0;
            }
            this.tableservice.addTable(table.tableNum, this.workerName, true,[],0,parseInt(data.numberOfClientsPerTable)); 
            this.router.navigate(['/order-waiter'], {queryParams: {id: table.tableNum}});
          }
        }
      ]
    });
    await alert.present();
  }
}
