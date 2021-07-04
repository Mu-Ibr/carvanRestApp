import { Injectable } from '@angular/core';
import { Worker } from './Worker.model';
import { UsersAuth } from './UserAuth.model'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WorkersService {
  public workers: Worker[] = [
    {
      id:'r1',
      name: 'מוחמד איברהים',
      imageUrl: 'https://avatars0.githubusercontent.com/u/35499309?s=400&u=2a9f6da2bf22666f2b60ec781c5d02c70beb2213&v=4',
      type: 'מנהל',
      hireYear: 2002,
      phone: '0508783678',
      address: 'abu gosh'
    }
  ]

  private users: UsersAuth[] =[
    {
      username: 'muhammadm',
      password: 'password',
      type: 'manager',
      workerName: 'מוחמד',
    },
    {
      username: 'muhammadw',
      password: 'password',
      type: 'waiter',
      workerName: 'מוחמד',
    },
    {
      username: 'muhammadk',
      password: 'password',
      type: 'kitchen',
      workerName: 'מוחמד',
    },
    {
      username: 'lina',
      password: 'password',
      type: 'waiter',
      workerName: 'לינה',
    },
    {
      username: 'wael',
      password: 'password',
      type: 'waiter',
      workerName: 'ואל',
    },
    
    {
      username: 'wassouf',
      password: 'password',
      type: 'waiter',
      workerName: 'וסוף',
    },
  ];

  constructor(private http: HttpClient) {
  }


  getAllWorkers(){
    return [...this.workers];
  }

  addWorker(worker:Worker){
    this.workers.push(worker);
    return this.http.post<{worker: Worker}>('https://caravan-944bb-default-rtdb.europe-west1.firebasedatabase.app/workers.json',{...worker})
    .subscribe();
  }

  removeWorker(worker: Worker){
    let index = this.workers.indexOf(worker);
    if(index > -1){
      this.workers.splice(index, 1);
    }
  }

  getWorker(workerId: string){
    return {
      ...this.workers.find(work=>{
        return work.id === workerId;
      })
    }
  }

  addUserAuth(username: string, password: string, name: string, type: string){
    this.users.push(new UsersAuth(username, password, name, type));
  }

  getUserAuth(usernmae: string, password: string){
    for(let users of this.users){
      if((users.username == usernmae) && (users.password == password)){
        return users.type;
      }
    }
    return 'invalid';
  }

  getUserAuthName(usernmae: string, password: string){
    for(let users of this.users){
      if((users.username == usernmae) && (users.password == password)){
        return users.workerName;
      }
    }
    return '';
  }
}
