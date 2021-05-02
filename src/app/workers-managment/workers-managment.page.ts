import { Component, OnInit } from '@angular/core';
import { WorkersService } from '../workers.service';
import {Worker} from '../Worker.model'
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-workers-managment',
  templateUrl: './workers-managment.page.html',
  styleUrls: ['./workers-managment.page.scss'],
})
export class WorkersManagmentPage implements OnInit {
  workers: Worker[];
  loadedWorker: Worker;

  constructor(
    private workerService: WorkersService,
    private activatedRoute: ActivatedRoute,
    private alertController: AlertController,
    ) { }

  ngOnInit() {
    this.workers = this.workerService.getAllWorkers();
  }
  
  async addNewWorker() {
    const alert = await this.alertController.create({
      header: 'הוסף עובד',
      inputs: [
        {
          name: 'name',
          id: 'name',
          type: 'text',
          placeholder: 'שם העובד'
        },
        {
          name: 'id',
          id: 'id',
          type: 'text',
          placeholder: 'מס עובד'
        },
        {
          name: 'image',
          id: 'image',
          type: 'text',
          placeholder: 'תמונה'
        },
        {
          name: 'type',
          id: 'type',
          type: 'text',
          placeholder: 'תחום'
        },
        {
          name: 'hireYear',
          id: 'hireYear',
          type: 'number',
          placeholder: 'שנת התחלה'
        },
        {
          name: 'phone',
          id: 'phone',
          type: 'text',
          placeholder: 'מספר טלפון'
        },
        {
          name: 'address',
          id: 'address',
          type: 'text',
          placeholder: 'מגורים'
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
            this.workers.push(new Worker(data.name, data.id, data.image, data.type, data.hireYear, data.phone, data.address));
            this.workerService.addWorker(new Worker(data.name, data.id, data.image, data.type, data.hireYear, data.phone, data.address));
          }
        }
      ]
    });
    await alert.present();
  }

  removeWorker(worker){
   this.workerService.removeWorker(worker);
   this.workers = this.workerService.getAllWorkers();
  }
}
