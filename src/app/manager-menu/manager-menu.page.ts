import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manager-menu',
  templateUrl: './manager-menu.page.html',
  styleUrls: ['./manager-menu.page.scss'],
})
export class ManagerMenuPage implements OnInit {

  workerName: any;
  constructor(
       private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.workerName = this.route.snapshot.queryParamMap.get('id')|| ' ';
  }

}
