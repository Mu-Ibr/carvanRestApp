import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InventoryManagmentPage } from './inventory-managment.page';

describe('InventoryManagmentPage', () => {
  let component: InventoryManagmentPage;
  let fixture: ComponentFixture<InventoryManagmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryManagmentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InventoryManagmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
