import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
a=0;
text = "hi";

  add(){
    this.a+=1;
  }
  reset(){
    this.a=0;
  }
}
