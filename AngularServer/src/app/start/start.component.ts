import { Component } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {
  fullImagePath: string;
constructor(){
  this.fullImagePath = 'assets/images/mt_fuji_bc.png'
}
}
