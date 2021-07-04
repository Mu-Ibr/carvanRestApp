import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservation } from './Reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  public reserves: Reservation[] = []

  constructor(private http: HttpClient) {
  }


  getAllReservations(){
    return [...this.reserves];
  }

  addReservation(reserve:Reservation){
    this.reserves.push(reserve);
  }

  removeReservation(reserve: Reservation){
    let index = this.reserves.indexOf(reserve);
    if(index > -1){
      this.reserves.splice(index, 1);
    }
  }
}
