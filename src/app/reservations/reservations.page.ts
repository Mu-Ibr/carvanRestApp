import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Reservation } from '../Reservation.model';
import { ReservationsService } from '../reservations.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.page.html',
  styleUrls: ['./reservations.page.scss'],
})
export class ReservationsPage implements OnInit {

  reserveses: Reservation[];
  reserve: Reservation;

  constructor(
    private reservationsService: ReservationsService,
    private alertController: AlertController,
  ) { }

  ngOnInit() {
    this.reserveses = this.reservationsService.getAllReservations();
  }
  
  async addReservatoin() {
    const alert = await this.alertController.create({
      header: 'הוסף הזמנה',
      inputs: [
        {
          name: 'date',
          id: 'date',
          type: 'date',
          placeholder: 'תאריך'
        },
        {
          name: 'name',
          id: 'name',
          type: 'text',
          placeholder: 'שם ההזמנה'
        },
        {
          name: 'numOfClients',
          id: 'numOfClients',
          type: 'number',
          placeholder: 'כמות האנשים'
        },
        {
          name: 'time',
          id: 'time',
          type: 'time',
          placeholder: 'שעה'
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
            this.reserveses.push(new Reservation(data.date, data.name, data.numOfClients, data.time));
            this.reservationsService.addReservation(new Reservation(data.date, data.name, data.numOfClients, data.time));
          }
        }
      ]
    });
    await alert.present();
  }

  removeReservation(reservation){
   this.reservationsService.removeReservation(reservation);
   this.reserveses = this.reservationsService.getAllReservations();
  }
}
