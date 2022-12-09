import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  city_level: string;
  gzl_level: string;
  bc_level: string;
  cvr_white: string;
constructor(){
  this.city_level = 'assets/images/godizlla level1.png'
  this.gzl_level = 'assets/images/godizlla level2.png'
  this.bc_level = 'assets/images/godzilla level3.png'
  this.cvr_white = 'assets/images/white-cover-home.png'
}
}